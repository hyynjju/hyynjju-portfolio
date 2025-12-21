import React, { useRef, useEffect } from 'react';

const InteractiveAsciiSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const chars = ' .:-=+*#%@';
    const width = 120;
    const height = 60;
    let frame = 0;

    const render = () => {
      if (!containerRef.current) return;
      frame += 0.007;

      // Smooth lerp for mouse interaction
      currentMouseRef.current.x +=
        (mouseRef.current.x - currentMouseRef.current.x) * 0.05;
      currentMouseRef.current.y +=
        (mouseRef.current.y - currentMouseRef.current.y) * 0.05;

      let output = '';

      const mx = currentMouseRef.current.x * 0.4;
      const my = currentMouseRef.current.y * 0.4;

      // Orbiting light source
      const lightX = Math.cos(frame * 1.5);
      const lightY = Math.sin(frame * 1.2);
      const lightZ = 0.5;

      for (let j = 0; j < height; j++) {
        const y = (j / height - 0.5) * 2.4;

        for (let i = 0; i < width; i++) {
          const x = (i / width - 0.5) * 2.8 * (width / height) * 0.8;

          const dx = x - mx;
          const dy = y - my;
          const distSq = dx * dx + dy * dy;

          if (distSq < 1.0) {
            // Clamp to avoid NaN from floating-point precision
            const zSq = 1.0 - distSq;
            const z = zSq > 0 ? Math.sqrt(zSq) : 0;

            const dot = dx * lightX + dy * lightY + z * lightZ;
            const intensity = Math.max(0, (dot + 1) * 0.5);

            const rawIndex = Math.floor(intensity * (chars.length - 1));
            const safeIndex = Math.max(0, Math.min(chars.length - 1, rawIndex));

            output += chars[safeIndex];
          } else {
            output += ' ';
          }
        }
        output += '\n';
      }

      containerRef.current.textContent = output;
      requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mono text-[8px] md:text-[10px] lg:text-[12px] leading-[0.7] tracking-[0.1em] text-white pointer-events-none select-none whitespace-pre overflow-hidden flex items-center justify-center w-full h-full scale-[1.5] md:scale-[2.0]"
      style={{ opacity: 0.3 }}
    />
  );
};

export default InteractiveAsciiSphere;
