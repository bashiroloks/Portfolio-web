import React, { useState } from 'react';
import { Database, Sparkles, Search, Cpu, Layers, CheckCircle2, TrendingUp, ArrowRight, Code2 } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const [selectedStepId, setSelectedStepId] = useState<number>(2); // Default to Data Cleaning

  const stepIcons: Record<string, React.ElementType> = {
    Database,
    Sparkles,
    Search,
    Cpu,
    Layers,
    CheckCircle2,
    TrendingUp,
  };

  const activeStep = WORKFLOW_STEPS.find((s) => s.id === selectedStepId) || WORKFLOW_STEPS[0];
  const ActiveIcon = stepIcons[activeStep.iconName] || Database;

  return (
    <section id="workflow" className="py-20 sm:py-28 relative border-t border-slate-800/80 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            End-To-End Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Science Workflow
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A disciplined, reproducible pipeline transforming raw messy inputs into robust, audited intelligence. Click any step to inspect code and data transformations.
          </p>
        </div>

        {/* Pipeline Stepper (Horizontal on desktop, scrollable/segmented on mobile) */}
        <div className="relative mb-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-[760px] lg:min-w-0 justify-between relative">
            {/* Background connecting line */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[2px] bg-slate-800 z-0" />

            {WORKFLOW_STEPS.map((step) => {
              const Icon = stepIcons[step.iconName] || Database;
              const isSelected = step.id === selectedStepId;
              const isPassed = step.id < selectedStepId;

              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStepId(step.id)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  {/* Step Bubble */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 border ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-110'
                        : isPassed
                        ? 'bg-slate-900 text-cyan-400 border-cyan-800/80'
                        : 'bg-slate-950 text-slate-400 border-slate-800 group-hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Labels */}
                  <div className="mt-2.5 text-center">
                    <div
                      className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {step.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
                      Step {step.id}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Details Card for Selected Step */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Overview, Tools & Data I/O */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase">
                    Stage {activeStep.id} of 7 · {activeStep.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {activeStep.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStep.description}
              </p>

              {/* Tools utilized */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Technologies & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 rounded-lg text-cyan-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Transformation Sample Preview */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Transformation Snapshot
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  {activeStep.inputData.map((row, i) => (
                    <div key={i} className="flex justify-between text-slate-400 border-b border-slate-900 pb-1">
                      <span>{Object.keys(row)[0]}: <strong className="text-slate-200">{String(Object.values(row)[0])}</strong></span>
                      <span className="text-cyan-400">{String(Object.values(row)[1])}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStep.id === 1}
                  onClick={() => setSelectedStepId((prev) => Math.max(1, prev - 1))}
                  className="px-3.5 py-2 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep.id === WORKFLOW_STEPS.length}
                  onClick={() => setSelectedStepId((prev) => Math.min(WORKFLOW_STEPS.length, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Code Sample Window */}
            <div className="lg:col-span-7">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#040711] shadow-2xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-300">pipeline_stage_{activeStep.id}.py</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-cyan-400">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Python 3.11</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-[13px] leading-relaxed font-mono text-slate-300">
                  <pre>
                    <code>{activeStep.sampleCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
