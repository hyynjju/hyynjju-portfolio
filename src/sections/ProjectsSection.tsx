import { motion } from 'framer-motion';
import { Project, Section } from '../types';

const isTouchDevice =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

interface ProjectsSectionProps {
  projects: Project[];
  onSelect: (project: Project) => void;
  onHover: (project: Project | null) => void;
}

const projectCardVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(12px)',
    y: 40,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProjectsSection = ({
  projects,
  onSelect,
  onHover,
}: ProjectsSectionProps) => {
  return (
    <section id={Section.PROJECTS} className="py-60 px-8 md:px-12 bg-[#040809]">
      <div className="max-w-screen-2xl mx-auto space-y-48">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-zinc-800" />
            <span className="mono text-[11px] text-zinc-600 tracking-[0.7em] uppercase">
              Archive Index
            </span>
          </div>
          <h2 className="serif text-7xl md:text-9xl text-white font-light italic tracking-tighter">
            The Artifacts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-64">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => onSelect(project)}
              onMouseEnter={() => {
                if (!isTouchDevice) onHover(project);
              }}
              onMouseLeave={() => {
                if (!isTouchDevice) onHover(null);
              }}
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className={`group ${
                !isTouchDevice ? 'cursor-none' : ''
              } space-y-12 ${index % 2 === 1 ? 'md:mt-40' : ''}`}
            >
              <div className="aspect-video glass rounded-[1rem] overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-10 right-10 mono text-[10px] text-zinc-700 tracking-[0.3em]">
                  STP_{project.id}
                </div>
              </div>

              <div className="space-y-6 px-4">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] mono text-zinc-700 uppercase tracking-[0.5em] font-bold">
                    {project.category}
                  </span>
                  <div className="flex-1 h-px bg-zinc-900" />
                </div>
                <h3 className="serif text-5xl md:text-6xl text-white italic tracking-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-lg italic serif">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
