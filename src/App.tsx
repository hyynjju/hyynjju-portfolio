import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import ProjectDetail from './components/ProjectDetail';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import EclipseSection from './sections/EclipseSection';
import FooterSection from './sections/FooterSection';
import { Section, Project } from './types';
import { PROJECTS } from './data/projects';

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
    // Safari swipe-back 대응용 base history state
    window.history.replaceState({ page: 'home' }, '', window.location.href);
  }, []);

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
    const handlePopState = () => {
      setSelectedProject(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isInAppBrowser = () => {
    const ua = navigator.userAgent || navigator.vendor;
    return /Twitter|FBAN|FBAV/.test(ua);
  };

  useEffect(() => {
    if (isInAppBrowser()) {
      document.body.classList.add('in-app-browser');
    }
  }, []);

  const triggerTransition = useCallback((callback: () => void) => {
    if (isInAppBrowser()) {
      callback();
      return;
    }

    const overlay = document.getElementById('transition-overlay');
    if (!overlay) {
      callback();
      return;
    }

    overlay.classList.add('active');

    setTimeout(callback, 750);
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 1500);
  }, []);

  const handleProjectSelect = (project: Project) => {
    window.history.pushState(
      { projectId: project.id, slug: project.slug },
      '',
      `${project.slug}`
    );

    triggerTransition(() => {
      setSelectedProject(project);
      setHoveredProject(null);
    });
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black relative">
      <Navigation
        activeSection={activeSection}
        onNavigate={(sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth',
            });
          }
        }}
      />

      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-[11000] transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <div className="w-40 h-40 glass rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
            <img
              src={hoveredProject.icon}
              alt={`${hoveredProject.title} app icon`}
              className="w-full h-full object-cover bg-black"
            />
          </div>
        </div>
      )}

      {selectedProject && <ProjectDetail project={selectedProject} />}

      <HeroSection
        onCTAClick={() => {
          const element = document.getElementById(Section.PROJECTS);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth',
            });
          }
        }}
      />

      <ProjectsSection
        projects={PROJECTS}
        onSelect={handleProjectSelect}
        onHover={setHoveredProject}
      />

      <EclipseSection />

      <FooterSection />
    </div>
  );
};

export default App;
