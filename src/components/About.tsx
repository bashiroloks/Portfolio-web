import React, { useState } from 'react';
import { Brain, Cpu, Database, Sparkles, Check, User, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, CORE_STATISTICS } from '../data/portfolioData';

interface AboutProps {
  onOpenCV: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCV }) => {
  const [imageSrc, setImageSrc] = useState<string>(PERSONAL_INFO.portraitImage);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    // If local asset fails, attempt remote fallback URL
    if (imageSrc !== PERSONAL_INFO.fallbackPortraitUrl && PERSONAL_INFO.fallbackPortraitUrl) {
      setImageSrc(PERSONAL_INFO.fallbackPortraitUrl);
    } else {
      setImageError(true);
    }
  };

  const statIcons = [Brain, Cpu, Database, Sparkles];

  const highlights = [
    'Supervised & Unsupervised Machine Learning modeling',
    'Deep Neural Architectures (PyTorch, CNNs, Transfer Learning)',
    'Scalable Big Data Processing with PySpark & SQL',
    'Automated, fault-tolerant Data Cleaning Pipelines',
    'Rigorous Statistical Analysis & Feature Engineering',
    'Translating raw datasets into strategic business decisions',
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#070b14]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/14] sm:aspect-[9/13] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-2 shadow-2xl shadow-cyan-950/30 group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0c121e] flex items-center justify-center">
                {/* Fallback container if image is loading or fails */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center text-slate-400">
                    <div className="w-20 h-20 rounded-full bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center mb-4 text-cyan-400">
                      <User className="w-10 h-10" />
                    </div>
                    <div className="font-semibold text-white text-base">Bashir Olokodana</div>
                    <div className="text-xs text-slate-400 font-mono mt-1">Data Scientist Photo</div>
                    <div className="text-[11px] text-slate-500 mt-3 border border-slate-800 rounded px-2.5 py-1">
                      Professional Photo
                    </div>
                  </div>
                )}

                {/* Primary Photo Asset with head gap padding and top alignment */}
                {!imageError && (
                  <img
                    src={imageSrc}
                    alt="Bashir Olokodana - Data Scientist"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={handleImageError}
                    className={`w-full h-full object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-[1.02] ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Subtle scrim & overlay badge with reduced height so it does not block the photo */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent flex items-center justify-between text-xs backdrop-blur-[2px]">
                  <div>
                    <div className="font-semibold text-white text-xs sm:text-sm">Bashir Olokodana</div>
                    <div className="text-cyan-400 font-mono text-[11px]">Data Scientist · ML & Big Data</div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 border border-slate-700/60 rounded px-2 py-0.5 bg-slate-900/80">
                    Lagos, NG
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action below photo */}
            <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-400">
              <button
                onClick={onOpenCV}
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>Read Full Background & Credentials</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Bio Prose & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                {PERSONAL_INFO.bioHeadline}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                {PERSONAL_INFO.bioSecondary}
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Core Focus & Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="p-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 mt-0.5 shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Statistics Cards as requested */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {CORE_STATISTICS.map((stat, idx) => {
                const Icon = statIcons[idx % statIcons.length];
                return (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:bg-slate-900/80"
                  >
                    <div className="flex items-center justify-between text-slate-400 mb-2">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-500">{stat.unit}</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
