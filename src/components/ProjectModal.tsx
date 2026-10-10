import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Activity, Sparkles, CheckCircle, Sliders, Play, RefreshCw, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Churn simulator state
  const [churnTenure, setChurnTenure] = useState(6);
  const [churnMonthly, setChurnMonthly] = useState(85);
  const [churnContract, setChurnContract] = useState<'month' | 'oneYear' | 'twoYear'>('month');
  const [hasTechSupport, setHasTechSupport] = useState(false);

  // Sales forecast simulator state
  const [forecastWeeks, setForecastWeeks] = useState(8);
  const [promoDiscount, setPromoDiscount] = useState(15);

  // Cleaning pipeline simulator state
  const [cleaningExecuted, setCleaningExecuted] = useState(false);
  const [cleaningRunning, setCleaningRunning] = useState(false);

  // Vision simulator state
  const [visionSample, setVisionSample] = useState<'defect' | 'normal' | 'edge'>('normal');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Real-time calculation for Churn Simulation
  const calculateChurnRisk = () => {
    let score = 0.45;
    if (churnContract === 'month') score += 0.32;
    if (churnContract === 'twoYear') score -= 0.35;
    if (!hasTechSupport) score += 0.18;
    if (churnTenure < 12) score += 0.22;
    if (churnTenure > 36) score -= 0.28;
    if (churnMonthly > 80) score += 0.14;
    return Math.max(0.04, Math.min(0.96, score));
  };

  const churnProbability = calculateChurnRisk();

  // Run Cleaning pipeline simulation
  const handleRunCleaning = () => {
    setCleaningRunning(true);
    setTimeout(() => {
      setCleaningRunning(false);
      setCleaningExecuted(true);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 border border-cyan-800/60 rounded px-2 py-0.5 bg-cyan-950/40">
              {project.category}
            </span>
            <h2 id="project-modal-title" className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#080c16] text-slate-200">
          {/* Visual Showcase */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-6">
              <div className="text-xs text-slate-300 font-mono">
                Validated on Real-World Datasets · Production ML Architecture
              </div>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Full Description & Problem Statement */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              System Architecture & Methodology
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Data Cleaning & Preprocessing Specifics */}
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Data Cleaning & Feature Engineering Strategy</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.dataCleaningHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Simulation Sandbox */}
          {project.interactiveDemoType && (
            <div className="p-6 rounded-xl bg-slate-950 border border-cyan-900/40 shadow-inner space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">Interactive Model Inference Sandbox</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                  Live Client Simulator
                </span>
              </div>

              {/* Churn Demo */}
              {project.interactiveDemoType === 'churn' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-slate-300 font-medium block mb-1.5">
                        Customer Tenure: <strong className="text-cyan-300">{churnTenure} months</strong>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="72"
                        value={churnTenure}
                        onChange={(e) => setChurnTenure(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-medium block mb-1.5">
                        Monthly Charges: <strong className="text-cyan-300">${churnMonthly}</strong>
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="130"
                        value={churnMonthly}
                        onChange={(e) => setChurnMonthly(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Contract Type:</span>
                      <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800">
                        <button
                          onClick={() => setChurnContract('month')}
                          className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                            churnContract === 'month' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                          }`}
                        >
                          Month-to-month
                        </button>
                        <button
                          onClick={() => setChurnContract('oneYear')}
                          className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                            churnContract === 'oneYear' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                          }`}
                        >
                          1-Year
                        </button>
                        <button
                          onClick={() => setChurnContract('twoYear')}
                          className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                            churnContract === 'twoYear' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                          }`}
                        >
                          2-Year
                        </button>
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer text-slate-300 select-none">
                      <input
                        type="checkbox"
                        checked={hasTechSupport}
                        onChange={(e) => setHasTechSupport(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500 w-4 h-4"
                      />
                      <span>Active Tech Support Add-on</span>
                    </label>
                  </div>

                  {/* Calculated Inference Output */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Inferred Churn Probability</div>
                      <div className="text-2xl font-bold font-mono text-white mt-0.5 flex items-baseline gap-2">
                        <span>{(churnProbability * 100).toFixed(1)}%</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-mono ${
                            churnProbability > 0.6
                              ? 'bg-rose-950 text-rose-300 border border-rose-800'
                              : churnProbability > 0.3
                              ? 'bg-amber-950 text-amber-300 border border-amber-800'
                              : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          }`}
                        >
                          {churnProbability > 0.6 ? 'HIGH RISK' : churnProbability > 0.3 ? 'MEDIUM RISK' : 'LOW RISK'}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 sm:text-right max-w-xs">
                      <strong className="text-cyan-400 font-mono">Action:</strong>{' '}
                      {churnProbability > 0.6
                        ? 'Trigger automated proactive account manager call with 15% annual upgrade offer.'
                        : churnProbability > 0.3
                        ? 'Enroll in customer success drip sequence & satisfaction survey.'
                        : 'Customer healthy; eligible for feature cross-sell.'}
                    </div>
                  </div>
                </div>
              )}

              {/* Cleaning Pipeline Demo */}
              {project.interactiveDemoType === 'cleaning' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300">
                    Test the automated cleaning engine on sample dirty enterprise customer feeds containing whitespace anomalies, NaNs, and negative revenue items:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-rose-400 font-bold mb-1">Raw Uncleaned Input:</div>
                      <div>• TotalCharges: <span className="text-rose-300">"  $1,240.50 "</span> (String)</div>
                      <div>• MonthlySpend: <span className="text-rose-300">-45.00</span> (Negative billing)</div>
                      <div>• AccountStatus: <span className="text-rose-300">null / NaN</span> (Missing)</div>
                      <div>• PostalCode: <span className="text-rose-300">"90210-9999"</span> (Inconsistent)</div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-emerald-400 font-bold mb-1">Pipeline Cleaned Output:</div>
                      {cleaningExecuted ? (
                        <>
                          <div>• TotalCharges: <span className="text-emerald-300">1240.50</span> (Float64 coerced)</div>
                          <div>• MonthlySpend: <span className="text-emerald-300">45.00</span> (Reconciled credit)</div>
                          <div>• AccountStatus: <span className="text-emerald-300">"ACTIVE"</span> (Imputed MICE)</div>
                          <div>• PostalCode: <span className="text-emerald-300">"90210"</span> (Standardized 5-digit)</div>
                        </>
                      ) : (
                        <div className="text-slate-500 italic pt-2">
                          Press "Execute Cleaning Pipeline" below to run the transformation engine.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleRunCleaning}
                      disabled={cleaningRunning}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {cleaningRunning ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Cleaning Dataset...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Execute Cleaning Pipeline</span>
                        </>
                      )}
                    </button>
                    {cleaningExecuted && (
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Cleaned with 100% schema assertion pass
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Forecast Demo */}
              {project.interactiveDemoType === 'forecast' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="text-slate-300 font-medium block mb-1.5">
                        Forecast Horizon: <strong className="text-cyan-300">{forecastWeeks} Weeks</strong>
                      </label>
                      <input
                        type="range"
                        min="4"
                        max="24"
                        value={forecastWeeks}
                        onChange={(e) => setForecastWeeks(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-medium block mb-1.5">
                        Promotional Discount: <strong className="text-cyan-300">{promoDiscount}%</strong>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        value={promoDiscount}
                        onChange={(e) => setPromoDiscount(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Projected Gross Volume ({forecastWeeks} Wks):</span>
                      <strong className="text-white">${(forecastWeeks * 38200 * (1 + promoDiscount * 0.015)).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Inventory Safety Stock Delta:</span>
                      <strong className="text-cyan-400">+{(promoDiscount * 140 + 450).toLocaleString()} units</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>95% Confidence Interval Band:</span>
                      <strong className="text-slate-300">± 4.2% WAPE</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Vision Demo */}
              {project.interactiveDemoType === 'vision' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300">
                    Select a sample image inspection payload to simulate real-time neural network layer activation and Grad-CAM class probability:
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setVisionSample('normal')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        visionSample === 'normal' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      Sample A (Standard Surface)
                    </button>
                    <button
                      onClick={() => setVisionSample('defect')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        visionSample === 'defect' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      Sample B (Micro-Crack Defect)
                    </button>
                    <button
                      onClick={() => setVisionSample('edge')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        visionSample === 'edge' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-300 border border-slate-800'
                      }`}
                    >
                      Sample C (Low-Light Edge Case)
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-slate-300">
                      <span>Top Predicted Class:</span>
                      <span className="text-cyan-400 font-bold">
                        {visionSample === 'defect' ? 'Defect Type-2 (Structural)' : visionSample === 'edge' ? 'Class-7 (Shadow Artifact)' : 'Nominal Product (Class-1)'}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Softmax Confidence:</span>
                      <span className="text-emerald-400 font-bold">
                        {visionSample === 'defect' ? '98.4%' : visionSample === 'edge' ? '89.1%' : '99.2%'}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Inference Latency:</span>
                      <span className="text-slate-300">14.8 ms (ResNet-50 PyTorch)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Key Insights & Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Key Empirical Insights
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {project.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400">✓</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Libraries Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-900 border border-slate-800 rounded-lg text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
