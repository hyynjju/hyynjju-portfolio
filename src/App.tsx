import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import InteractiveAsciiSphere from './components/InteractiveAsciiSphere';
import ProjectDetail from './components/ProjectDetail';
import { Section, Project } from './types';
import { PROJECTS, DESIGNER_NAME } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Add class to body to hide standard cursor when project preview is active
    if (hoveredProject) {
      document.body.classList.add('project-hovering');
    } else {
      document.body.classList.remove('project-hovering');
    }
  }, [hoveredProject]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom >= window.innerHeight * 0.4
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.scroll-reveal')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedProject]);

  const triggerTransition = useCallback((callback: () => void) => {
    const overlay = document.getElementById('transition-overlay');
    if (overlay) {
      overlay.classList.add('active');
      setTimeout(() => {
        callback();
      }, 750);
      setTimeout(() => {
        overlay.classList.remove('active');
      }, 1500);
    } else {
      callback();
    }
  }, []);

  const handleProjectSelect = (project: Project) => {
    triggerTransition(() => {
      setSelectedProject(project);
      setHoveredProject(null);
    });
  };

  const scrollTo = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black relative">
      <Navigation activeSection={activeSection} onNavigate={scrollTo} />

      {/* Floating Project Cursor Preview - Replaces normal cursor */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-[11000] mono text-[5px] leading-tight whitespace-pre p-5 glass rounded-2xl text-white transform -translate-x-1/2 -translate-y-1/2 animate-fade-in shadow-2xl backdrop-blur-xl border border-white/20"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <div className="mb-3 text-[10px] tracking-widest text-zinc-300 uppercase border-b border-white/10 pb-2 flex justify-between items-center">
            <span>PREVIEW_{hoveredProject.id}</span>
            <span className="opacity-40">{hoveredProject.category}</span>
          </div>
          <div className="opacity-80 scale-125 origin-center p-2">
            {hoveredProject.asciiArt}
          </div>
          <div className="mt-3 text-[9px] mono text-center opacity-50 tracking-[0.3em]">
            CLICK_TO_INITIALIZE
          </div>
        </div>
      )}

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* HERO SECTION */}
      <section
        id={Section.HERO}
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Gradient only in Hero */}
        <div className="hero-gradient"></div>

        {/* Sphere Art */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
          <InteractiveAsciiSphere />
        </div>

        <div className="relative z-10 w-full max-w-screen-2xl px-8 flex flex-col items-center text-center">
          <div className="space-y-6 scroll-reveal visible">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <p className="text-[11px] mono uppercase tracking-[0.6em] text-zinc-400">
                {DESIGNER_NAME} // 2025 PROTOCOL
              </p>
            </div>

            <h1 className="serif text-[10vw] md:text-[8vw] lg:text-[7vw] text-white leading-[0.85] tracking-tighter italic">
              Bridging the Ideal
              <br />
              <span className="text-zinc-500 font-light opacity-60">
                and the
              </span>{' '}
              Real
            </h1>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center gap-12 scroll-reveal visible pointer-events-auto">
            <div className="text-center md:text-right space-y-1">
              <p className="text-zinc-500 text-[9px] mono uppercase tracking-widest leading-none">
                Senior UXUI Designer & Engineer
              </p>
              <p className="text-white text-[10px] mono uppercase tracking-[0.4em] pt-1">
                SEOUL, KR
              </p>
            </div>

            <div className="hidden md:block w-px h-12 bg-zinc-800"></div>

            <button
              onClick={() =>
                triggerTransition(() => scrollTo(Section.PROJECTS))
              }
              className="btn-monotone px-14 py-6 rounded-full font-bold text-[10px] mono tracking-[0.5em] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              LAUNCH_SYSTEM
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id={Section.PROJECTS}
        className="py-60 px-8 md:px-12 bg-[#040809]"
      >
        <div className="max-w-screen-2xl mx-auto space-y-48">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 scroll-reveal">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-zinc-800"></div>
                <span className="mono text-[11px] text-zinc-600 tracking-[0.7em] uppercase">
                  Archive Index
                </span>
              </div>
              <h2 className="serif text-7xl md:text-9xl text-white font-light italic tracking-tighter">
                The Artifacts
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-64">
            {PROJECTS.map((project: Project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectSelect(project)}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group cursor-none space-y-12 scroll-reveal ${
                  index % 2 === 1 ? 'md:mt-40' : ''
                }`}
              >
                <div className="aspect-[16/10] glass rounded-[2.5rem] overflow-hidden relative flex items-center justify-center p-16 transition-all duration-700 group-hover:bg-white/5 border-zinc-900 group-hover:border-zinc-700">
                  <div className="project-ascii mono text-[7px] text-zinc-800 transition-all duration-700 select-none whitespace-pre scale-[2] group-hover:text-white group-hover:scale-[2.4]">
                    {project.asciiArt}
                  </div>
                  <div className="absolute top-10 right-10 mono text-[10px] text-zinc-700 group-hover:text-zinc-400 transition-colors tracking-[0.3em]">
                    STP_{project.id}
                  </div>
                </div>
                <div className="space-y-6 px-4">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] mono text-zinc-700 uppercase tracking-[0.5em] font-bold">
                      {project.category}
                    </span>
                    <div className="flex-1 h-px bg-zinc-900"></div>
                  </div>
                  <h3 className="serif text-5xl md:text-6xl text-white italic transition-transform group-hover:translate-x-3 duration-700 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-lg italic serif">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-48 px-8 border-t border-zinc-900 bg-zinc-950/20">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="serif text-6xl md:text-8xl text-white tracking-tighter italic opacity-80">
            {DESIGNER_NAME}
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
            <div className="flex gap-14 text-[10px] mono uppercase tracking-[0.5em] text-zinc-600">
              <a
                href="#"
                className="hover:text-white transition-all hover:tracking-[0.7em]"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:text-white transition-all hover:tracking-[0.7em]"
              >
                Email
              </a>
            </div>
            <div className="mono text-[9px] text-zinc-800 tracking-[0.4em] uppercase font-bold text-center md:text-right leading-loose">
              2025 &copy; SYSTEM DESIGN LAB
              <br />
              SYNTHESIZED GLOBALLY
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
