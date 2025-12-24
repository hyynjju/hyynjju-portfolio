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
    <nav className="fixed top-0 left-0 w-full z-[100] pt-3 px-3 md:pt-4 md:px-6 pointer-events-none">
      <div className="w-full flex items-center justify-center">
        <div
          className="
            glass border-none rounded-2xl px-2 py-1.5 flex gap-1 pointer-events-auto justify-center
            w-[calc(100vw-12px)] md:w-[calc(100vw-24px)] max-w-none
          "
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.value;
            return (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-5 py-2.5 rounded-2xl text-xs mono uppercase tracking-widest transition-all duration-500 relative overflow-hidden group border ${
                  isActive
                    ? 'text-white bg-gradient-to-b from-white/20 to-white/10 border-white/20'
                    : 'text-white/50 border-transparent hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
