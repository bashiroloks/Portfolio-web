import React from 'react';
import { Github, Linkedin, Twitter, Instagram, MessageSquare, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: PERSONAL_INFO.socials.github },
    { name: 'LinkedIn', icon: Linkedin, url: PERSONAL_INFO.socials.linkedin },
    { name: 'X / Twitter', icon: Twitter, url: PERSONAL_INFO.socials.x },
    { name: 'Instagram', icon: Instagram, url: PERSONAL_INFO.socials.instagram },
    { name: 'WhatsApp', icon: MessageSquare, url: PERSONAL_INFO.socials.whatsapp },
    { name: 'Email', icon: Mail, url: PERSONAL_INFO.socials.email },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#05080f] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <a href="#home" className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{PERSONAL_INFO.name} — Data Scientist</span>
            </a>
            <p className="text-slate-400 italic font-mono text-xs">
              “{PERSONAL_INFO.tagline}.”
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-5 font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors self-start md:self-auto cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs">Top</span>
          </button>
        </div>

        {/* Bottom copyright & Socials */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-400">
          <div>
            © 2026 Bashir Olokodana. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
