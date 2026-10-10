import React from 'react';
import { ArrowRight, Mail, FileText, Github, Linkedin, Twitter, Instagram, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DataVisualizerCanvas } from './DataVisualizerCanvas';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const socialIcons = [
    { name: 'GitHub', icon: Github, url: PERSONAL_INFO.socials.github, hover: 'hover:text-cyan-400' },
    { name: 'LinkedIn', icon: Linkedin, url: PERSONAL_INFO.socials.linkedin, hover: 'hover:text-blue-400' },
    { name: 'X / Twitter', icon: Twitter, url: PERSONAL_INFO.socials.x, hover: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, url: PERSONAL_INFO.socials.instagram, hover: 'hover:text-pink-400' },
    { name: 'WhatsApp', icon: MessageSquare, url: PERSONAL_INFO.socials.whatsapp, hover: 'hover:text-emerald-400' },
    { name: 'Email', icon: Mail, url: PERSONAL_INFO.socials.email, hover: 'hover:text-cyan-300' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-900/20 via-indigo-900/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-gradient-to-br from-blue-900/20 via-purple-900/15 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, CTAs, Socials */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Domain Discipline Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Machine Learning & Deep Learning Specialist</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Data Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Turning Data Into{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Intelligence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I’m <strong className="text-white font-semibold">Bashir Olokodana</strong>, a Data Scientist passionate about transforming complex datasets into meaningful insights and intelligent solutions using Machine Learning, Deep Learning, and modern data technologies.
            </p>

            {/* Two Primary CTAs + Download CV */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all duration-150 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-150 hover:border-slate-600 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-150 cursor-pointer"
                title="View Full Curriculum Vitae"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Media Icons with Accessible Labels */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-xs font-mono text-slate-400">Connect with Bashir</div>
              <div className="flex items-center gap-3">
                {socialIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Bashir Olokodana on ${item.name}`}
                      className={`p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/80 text-slate-400 transition-colors cursor-pointer ${item.hover}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: AI / Neural Network Visualization Graphic */}
          <div className="lg:col-span-6 w-full">
            <div className="relative">
              <DataVisualizerCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
