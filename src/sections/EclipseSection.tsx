import { useEffect, useRef, useState } from 'react';
import { DESIGNER_EMAIL } from '../constants';
import { Section } from '../types';

export default function EclipseSection() {
  const MIN_SCALE = 1;
  const MAX_SCALE = 1.2;

  const eclipseRef = useRef<HTMLDivElement | null>(null);
  const targetScaleRef = useRef(MIN_SCALE);
  const currentScaleRef = useRef(MIN_SCALE);
  const rafRef = useRef<number | null>(null);

  const [scale, setScale] = useState<number>(MIN_SCALE);

  useEffect(() => {
    const updateTargetScale = () => {
      const el = eclipseRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elementCenterY = rect.top + rect.height / 2;
      const viewportCenterY = window.innerHeight / 2;
      const distance = Math.abs(elementCenterY - viewportCenterY);

      // 0 at center, 1 when far enough away. This makes the eclipse peak at screen center
      // and prevents it from continuing to grow after passing the center.
      const range = Math.max(1, (window.innerHeight + rect.height) / 2);
      const t = 1 - Math.min(1, distance / range);

      targetScaleRef.current = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * t;
    };

    updateTargetScale();
    window.addEventListener('scroll', updateTargetScale, { passive: true });
    window.addEventListener('resize', updateTargetScale);

    return () => {
      window.removeEventListener('scroll', updateTargetScale);
      window.removeEventListener('resize', updateTargetScale);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      // Smoothly ease current scale toward target scale
      const target = targetScaleRef.current;
      const current = currentScaleRef.current;
      const next = current + (target - current) * 0.12;

      currentScaleRef.current = next;
      setScale(next);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id={Section.CONTACT}
      className="relative py-40 md:py-56 px-8 md:px-12 bg-[#040809] overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center">
        <div
          ref={eclipseRef}
          className="relative w-[min(84vw,760px)] aspect-square"
        >
          {/* Eclipse visuals (scales on scroll) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'center',
              willChange: 'transform',
            }}
          >
            {/* Outer glow */}
            <div
              className="absolute inset-[-6%] rounded-full blur-3xl opacity-80"
              style={{
                background:
                  'radial-gradient(circle, rgba(93,152,255,0) 60%, rgba(93,152,255,0.95) 70%, rgba(93,152,255,0.35) 76%, rgba(93,152,255,0) 84%)',
              }}
            />

            {/* Soft rim (white -> blue) */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-95"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 48%, rgba(255,255,255,0.25) 52%, rgba(255,255,255,1) 55%, rgba(255,255,255,0.75) 58%, rgba(93,152,255,0.95) 62%, rgba(93,152,255,0.35) 66%, rgba(0,0,0,0) 72%, rgba(0,0,0,0) 100%)',
              }}
            />

            {/* Extra soft white haze near the rim */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-70"
              style={{
                background:
                  'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.10) 53%, rgba(255,255,255,0.65) 56%, rgba(255,255,255,0.20) 60%, rgba(93,152,255,0.18) 64%, rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)',
              }}
            />

            {/* Crisp center disk */}
            <div className="absolute inset-[6%] rounded-full bg-black" />
          </div>

          {/* Content (does NOT scale) */}
          <div className="absolute inset-[6%] rounded-full flex items-center justify-center p-10 md:p-14 text-center z-10">
            <div className="space-y-8">
              <h3 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                Your project
                <br />
                starts here.
              </h3>

              <a
                href={`mailto:${DESIGNER_EMAIL}`}
                className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 rounded-2xl glass border border-white/15 hover:border-white/25 transition-colors"
              >
                <span className="relative block overflow-hidden h-[1.25em] leading-[1.25em]">
                  <span className="block mono italic md:text-md font-medium tracking-widest leading-[1.25em] text-white/50 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {DESIGNER_EMAIL}
                  </span>
                  <span className="absolute left-0 top-full block mono italic md:text-md font-medium tracking-widest leading-[1.25em] text-white transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    {DESIGNER_EMAIL}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
