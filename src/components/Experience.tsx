import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'experience' | 'education' | 'certification'>('all');

  const filteredItems = filter === 'all'
    ? TIMELINE_DATA
    : TIMELINE_DATA.filter((item) => item.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-slate-800/80 bg-[#070b14]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Trajectory & Academic Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience & Education
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Academic credentials, technical research, certifications, and hands-on data science problem-solving history.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setFilter('experience')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'experience'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setFilter('certification')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'certification'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item) => {
            const Icon = getIcon(item.type);
            return (
              <div key={item.id} className="relative group">
                {/* Node marker on the line */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border border-cyan-500/60 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-950">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/90 transition-all hover:bg-slate-900/80 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                        {item.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span className="text-slate-300 font-medium">{item.organization}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
