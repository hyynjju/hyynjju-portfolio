import { useCallback, useEffect, useRef, useState } from 'react';
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const scrollToIndex = useCallback(
    (nextIndex: number) => {
      const max = Math.max(0, projects.length - 1);
      const clamped = Math.min(Math.max(nextIndex, 0), max);
      const el = cardRefs.current[clamped];
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
        setActiveIndex(clamped);
      }
    },
    [projects.length]
  );

  const handlePrev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (mostVisible?.target) {
          const idxAttr = (mostVisible.target as HTMLElement).dataset.index;
          const idx = idxAttr ? Number(idxAttr) : 0;
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root,
        threshold: [0.55, 0.7, 0.85],
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [projects.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const updateFades = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const hasOverflow = maxScrollLeft > 1;

      if (!hasOverflow) {
        setShowLeftFade(false);
        setShowRightFade(false);
        return;
      }

      setShowLeftFade(el.scrollLeft > 8);
      setShowRightFade(el.scrollLeft < maxScrollLeft - 8);
    };

    const onWheel = (e: WheelEvent) => {
      // If the user is doing a vertical scroll gesture while hovering the horizontal track,
      // forward it to the page to avoid a nested-scroll feeling.
      const isVerticalIntent = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (!isVerticalIntent) return;

      window.scrollBy({ top: e.deltaY, left: 0 });
      e.preventDefault();
    };

    const onScroll = () => updateFades();
    const onResize = () => updateFades();

    updateFades();

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      el.removeEventListener('wheel', onWheel as EventListener);
      el.removeEventListener('scroll', onScroll as EventListener);
      window.removeEventListener('resize', onResize);
    };
  }, []);

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

        <div className="relative -mx-8 md:-mx-12">
          {/* Chevrons */}
          <button
            type="button"
            aria-label="Previous project"
            onClick={handlePrev}
            disabled={activeIndex <= 0}
            className="absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition disabled:opacity-20 disabled:pointer-events-none"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={handleNext}
            disabled={activeIndex >= projects.length - 1}
            className="absolute right-0 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 glass w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition disabled:opacity-20 disabled:pointer-events-none"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Edge fade (matches background) */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-16 bg-gradient-to-r from-[#040809] to-transparent transition-opacity duration-300 ${
              showLeftFade ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-16 bg-gradient-to-l from-[#040809] to-transparent transition-opacity duration-300 ${
              showRightFade ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-10 px-8 md:px-12 overflow-x-auto overflow-y-hidden overscroll-x-contain overscroll-y-none snap-x snap-mandatory scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
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
                className={`group snap-center shrink-0 ${
                  !isTouchDevice ? 'cursor-none' : ''
                } w-[78vw] sm:w-[60vw] md:w-[420px] lg:w-[520px]`}
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-[1.25rem]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />

                  {/* Hover color overlay (per-project) */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-80"
                    style={{
                      backgroundColor:
                        (project as any).overlayColor ??
                        (project as any).accentColor ??
                        (project as any).themeColor ??
                        'transparent',
                    }}
                  />

                  {/* Top-right ID label */}
                  <div className="absolute top-6 right-6 mono text-[10px] text-white/60 tracking-[0.3em]">
                    STP_{project.id}
                  </div>

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    {/* Title + Subtitle (Top) */}
                    <div className="space-y-3">
                      <h3 className="serif text-4xl md:text-5xl text-white italic tracking-tight">
                        {project.title}
                      </h3>

                      <p className="mono text-[11px] md:text-[12px] text-white/70 uppercase tracking-[0.35em] transition-all duration-500 ease-out group-hover:opacity-0 group-hover:-translate-y-1">
                        {project.category}
                      </p>
                    </div>

                    {/* Description + Action (Bottom) */}
                    <div className="flex items-end justify-between gap-6">
                      <p className="mono text-sm md:text-base text-white/70 leading-relaxed max-w-[75%] opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                        {project.description}
                      </p>

                      <div className="shrink-0">
                        <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                          <div className="w-5 h-5 transition-transform duration-500 ease-out group-hover:rotate-45">
                            <svg
                              className="w-full h-full text-white/80"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M12 5v14" />
                              <path d="M5 12h14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover affordance */}
                  <div className="absolute inset-0 ring-1 ring-white/0 group-hover:ring-white/15 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
