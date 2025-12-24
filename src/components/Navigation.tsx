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
    { label: 'About', value: Section.HERO },
    { label: 'Archive', value: Section.PROJECTS },
    { label: 'Contact', value: Section.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[12000] pt-3 px-3 md:pt-4 md:px-6 pointer-events-none">
      <div className="w-full flex items-center justify-center">
        <div
          className="
            glass bg-black/20 border-none rounded-2xl px-2 py-1.5 flex gap-1 pointer-events-auto 
            justify-center items-center w-fit mx-auto
          "
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.value;
            return (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-5 py-2.5 rounded-2xl text-[10px] md:text-xs mono uppercase tracking-widest transition-all duration-500 relative overflow-hidden group border ${
                  isActive
                    ? 'text-white bg-gradient-to-b from-white/20 to-white/10 border-white/20 shadow-lg'
                    : 'text-white/50 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                {/* 텍스트 효과 컨테이너 */}
                <span className="relative block overflow-hidden h-[1.25em] leading-[1.25em]">
                  {/* 상단: 기본/비활성 상태 텍스트 */}
                  <span
                    className={`block transition-transform duration-300 ease-out group-hover:-translate-y-full ${
                      isActive ? 'text-white' : 'text-white/50'
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* 하단: 호버 시 올라오는 텍스트 */}
                  <span className="absolute left-0 top-full block text-white transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {item.label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
