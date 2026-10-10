import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Database, Cpu, Brain, BarChart3, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    'data-science': Terminal,
    'machine-learning': Cpu,
    'deep-learning': Brain,
    'big-data': Database,
    'data-viz': BarChart3,
  };

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 relative border-t border-slate-800/80 bg-[#060911]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Technical Stack & Domain Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Engineered for production readiness, algorithmic accuracy, and high-performance analytical compute across the full data science lifecycle.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Terminal;
            return (
              <div
                key={category.id}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-500 self-start sm:self-auto">
                    {category.skills.length} Technologies Listed
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700/80 transition-all hover:bg-slate-950/90 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 tabular-nums">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Clean Progress Indicator Bar */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-1">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="text-slate-300">{skill.experience}</span>
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
