import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, FEATURED_PROJECTS, TIMELINE_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <h2 id="cv-modal-title" className="text-base font-semibold text-white">
              Curriculum Vitae — Bashir Olokodana
            </h2>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Data Scientist & ML Specialist
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Bashir</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-1"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#090d16] text-slate-200 text-sm leading-relaxed">
          {/* Header Zone */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Bashir Olokodana"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (PERSONAL_INFO.fallbackPortraitUrl && target.src !== PERSONAL_INFO.fallbackPortraitUrl) {
                      target.src = PERSONAL_INFO.fallbackPortraitUrl;
                    }
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-[center_12%] border border-slate-700/80 shadow-md shrink-0"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Bashir Olokodana
                  </h1>
                  <p className="text-cyan-400 font-medium mt-1">
                    Data Scientist · Machine Learning & Big Data Specialist
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-400 space-y-1 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={PERSONAL_INFO.whatsappUrl} className="hover:text-cyan-300">
                    +234 816 983 7666 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Professional Summary
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Results-oriented Data Scientist specializing in Machine Learning, Deep Learning, Big Data pipelines, and automated Data Cleaning. Proven track record of architecting end-to-end predictive systems, high-accuracy classification models, and robust ETL pipelines. Passionate about transforming noisy unstructured data into actionable strategic intelligence with mathematical rigor.
            </p>
          </div>

          {/* Core Competencies & Skills */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl">
                  <div className="text-xs font-semibold text-cyan-300 mb-1.5">{cat.name}</div>
                  <div className="text-xs text-slate-300 flex flex-wrap gap-x-2 gap-y-1">
                    {cat.skills.map((s, idx) => (
                      <span key={s.name}>
                        {s.name}
                        {idx < cat.skills.length - 1 && <span className="text-slate-600 ml-2">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Data Science Projects */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Key Applied Projects & Systems
            </h3>
            <div className="space-y-4">
              {FEATURED_PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-xl space-y-2">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <span className="font-semibold text-white text-sm">{p.title}</span>
                    <span className="text-xs text-cyan-400 font-mono">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-300">{p.fullDescription}</p>
                  <div className="text-xs text-slate-400 pt-1">
                    <strong className="text-slate-300 font-medium">Stack:</strong>{' '}
                    {p.technologies.join(', ')}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-300 pt-1">
                    {p.metrics.map((m) => (
                      <span key={m.label}>
                        {m.label}: <strong className="text-white">{m.value}</strong>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & History */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Professional Experience & Academic Background
            </h3>
            <div className="space-y-4">
              {TIMELINE_DATA.map((item) => (
                <div key={item.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="text-xs text-slate-400 font-mono">{item.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400">
                    {item.organization} · {item.location}
                  </div>
                  <p className="text-xs text-slate-300">{item.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-1">
                    {item.bullets.slice(0, 2).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
