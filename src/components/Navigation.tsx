import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    { label: 'Studio', value: Section.HERO },
    { label: 'Archive', value: Section.PROJECTS },
    { label: 'Philosophy', value: Section.ABOUT },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] p-6 md:p-10 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div
          onClick={() => onNavigate(Section.HERO)}
          className="pointer-events-auto cursor-pointer flex flex-col items-start gap-1 group"
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full transition-transform group-hover:scale-150"></div>
            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></div>
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">
            Menu
          </span>
        </div>

        <div className="glass rounded-full px-2 py-1.5 flex gap-1 pointer-events-auto shadow-2xl shadow-black/40">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`px-5 py-2.5 rounded-full text-[10px] mono uppercase tracking-widest transition-all duration-500 relative overflow-hidden group ${
                activeSection === item.value
                  ? 'text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeSection === item.value && (
                <div className="absolute inset-0 bg-white rounded-full z-[-1]"></div>
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="pointer-events-auto cursor-pointer group flex items-center gap-4">
          <span className="mono text-[10px] uppercase tracking-widest text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Contact
          </span>
          <div className="glass w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:bg-white group-hover:text-zinc-950">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
