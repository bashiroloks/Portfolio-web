import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  layer: number;
  index: number;
  radius: number;
  baseRadius: number;
  activation: number; // 0 to 1
  label?: string;
}

interface Pulse {
  source: Node;
  target: Node;
  progress: number;
  speed: number;
  color: string;
}

export const DataVisualizerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Layer structure: 4 layers
    // Input (5 nodes), Hidden 1 (7 nodes), Hidden 2 (6 nodes), Output (3 nodes)
    const layerCounts = [5, 7, 6, 3];
    let nodes: Node[] = [];
    const pulses: Pulse[] = [];

    const initNetwork = () => {
      nodes = [];
      const layerXPositions = [0.12, 0.38, 0.65, 0.88];

      layerCounts.forEach((count, layerIdx) => {
        const x = width * layerXPositions[layerIdx];
        const stepY = height / (count + 1);

        for (let i = 0; i < count; i++) {
          const y = stepY * (i + 1);
          nodes.push({
            x,
            y,
            layer: layerIdx,
            index: i,
            radius: layerIdx === 0 || layerIdx === 3 ? 5 : 4,
            baseRadius: layerIdx === 0 || layerIdx === 3 ? 5 : 4,
            activation: 0.2 + Math.random() * 0.3,
            label: layerIdx === 3 ? (i === 0 ? 'Prediction' : i === 1 ? 'Confidence' : 'Insight') : undefined,
          });
        }
      });
    };

    initNetwork();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const colors = ['#38bdf8', '#818cf8', '#2dd4bf', '#a78bfa'];

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // Random pulse generator
      if (frameCount % 18 === 0 && nodes.length > 0) {
        const sourceLayer = Math.floor(Math.random() * 3);
        const sourceNodes = nodes.filter((n) => n.layer === sourceLayer);
        const targetNodes = nodes.filter((n) => n.layer === sourceLayer + 1);

        if (sourceNodes.length > 0 && targetNodes.length > 0) {
          const source = sourceNodes[Math.floor(Math.random() * sourceNodes.length)];
          const target = targetNodes[Math.floor(Math.random() * targetNodes.length)];
          pulses.push({
            source,
            target,
            progress: 0,
            speed: 0.015 + Math.random() * 0.02,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      // Draw connections (synapses)
      for (let l = 0; l < 3; l++) {
        const currentLayerNodes = nodes.filter((n) => n.layer === l);
        const nextLayerNodes = nodes.filter((n) => n.layer === l + 1);

        currentLayerNodes.forEach((n1) => {
          nextLayerNodes.forEach((n2) => {
            const dx = n1.x - mouseX;
            const dy = n1.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const isNearMouse = dist < 90;

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = isNearMouse
              ? 'rgba(56, 189, 248, 0.45)'
              : 'rgba(148, 163, 184, 0.08)';
            ctx.lineWidth = isNearMouse ? 1.5 : 0.75;
            ctx.stroke();
          });
        });
      }

      // Update & draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          // Trigger activation on target node
          p.target.activation = Math.min(1, p.target.activation + 0.4);
          pulses.splice(i, 1);
          continue;
        }

        const px = p.source.x + (p.target.x - p.source.x) * p.progress;
        const py = p.source.y + (p.target.y - p.source.y) * p.progress;

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Update & draw nodes
      nodes.forEach((n) => {
        // Natural activation decay
        n.activation = Math.max(0.15, n.activation - 0.008);

        // Mouse distance effect
        const dx = n.x - mouseX;
        const dy = n.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          n.activation = Math.min(1, n.activation + 0.05);
          n.radius = n.baseRadius + (80 - dist) * 0.05;
        } else {
          n.radius = n.baseRadius;
        }

        // Draw outer glow if active
        if (n.activation > 0.4) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${n.activation * 0.25})`;
          ctx.fill();
        }

        // Draw node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.activation > 0.5 ? '#38bdf8' : '#334155';
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();

        // Layer labels
        if (n.label) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(n.label, n.x + 10, n.y + 3);
        }
      });

      // Layer headers at the top
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
      const layerNames = ['Input Layer', 'Hidden L1', 'Hidden L2', 'Predictions'];
      const layerXPositions = [0.12, 0.38, 0.65, 0.88];
      layerNames.forEach((title, idx) => {
        ctx.fillText(title, width * layerXPositions[idx] - 25, 20);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md overflow-hidden p-3 shadow-2xl shadow-cyan-950/20">
      {/* Decorative hairline header bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/70 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-slate-300">Neural Network Active</span>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Feedforward · Stochastic Gradient Descent
        </div>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full h-[calc(100%-36px)] cursor-crosshair block"
      />

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-500 pointer-events-none">
        <span>Hover canvas to excite synaptic weights</span>
        <span>Loss: 0.0142 · Convergence: 99.8%</span>
      </div>
    </div>
  );
};
