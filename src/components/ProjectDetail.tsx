import React from 'react';
import { Project } from '../types';

const MAX_PROJECT_IMAGES = 20;

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const handleClose = () => {
    window.history.back();
  };

  const projectImages = Array.from({ length: MAX_PROJECT_IMAGES }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return `/assets/projects/${project.slug}/${index}.png`;
  });

  return (
    <div className="fixed inset-0 z-[100] bg-[#040809] overflow-y-auto animate-fade-in-up">
      <div className="max-w-screen-xl mx-auto px-6 py-24">
        <button
          onClick={handleClose}
          className="fixed top-12 right-12 glass w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform z-[110]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="space-y-32">
          {/* Header */}
          <header className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-4 mono text-xs text-zinc-500 tracking-[0.3em] uppercase">
              <span>{project.category}</span>
              <div className="w-8 h-px bg-zinc-800"></div>
              <span>Artifact {project.id}</span>
            </div>
            <h1 className="serif text-7xl md:text-9xl font-normal text-white leading-[0.9] tracking-tighter">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Visual Thumbnail */}
          <div className="aspect-video glass rounded-[1rem] overflow-hidden border border-zinc-900">
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <h4 className="mono text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                  Protocol Status
                </h4>
                <p className="text-zinc-300">Deployed_V.1.0</p>
              </div>
              <div className="space-y-4">
                <h4 className="mono text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                  Timeline
                </h4>
                <p className="text-zinc-300">Q3 2024 — PRESENT</p>
              </div>
              <div className="space-y-4">
                <h4 className="mono text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                  Logic Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-zinc-800 rounded-full text-[10px] mono text-zinc-500 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-24">
              <section className="space-y-8">
                <h3 className="serif text-4xl text-white italic">
                  The Challenge
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-8 border-t border-zinc-900 pt-24">
                <h3 className="serif text-4xl text-white italic">
                  Design Process
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {project.process}
                </p>
              </section>

              <section className="space-y-12 border-t border-zinc-900 pt-24">
                <h3 className="serif text-4xl text-white italic">
                  The Outcome
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-3xl">
                  {project.outcome}
                </p>
              </section>
            </div>
          </div>

          {/* Full-width Project Images */}
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-48">
            <div
              className="w-full mx-auto max-w-[1500px]"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onMouseDown={(e) => e.preventDefault()}
            >
              {projectImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} detail`}
                  draggable={false}
                  className="w-full h-auto object-cover select-none"
                  style={{
                    userSelect: 'none',
                    WebkitUserDrag: 'none',
                    pointerEvents: 'none',
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      'none';
                  }}
                />
              ))}
            </div>
          </section>

          {/* Footer CTA */}
          <footer className="py-24 border-t border-zinc-900 flex justify-between items-center">
            <button
              onClick={handleClose}
              className="mono text-s text-zinc-600 hover:text-white transition-colors px-6 py-6 -mx-6 -my-4"
            >
              ← BACK_TO_ARCHIVE
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
