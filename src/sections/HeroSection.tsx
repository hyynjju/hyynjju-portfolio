import { motion } from 'framer-motion';
import InteractiveAsciiSphere from '../components/InteractiveAsciiSphere';
import { DESIGNER_NAME, DESIGNER_ROLE } from '../constants';
import { Section } from '../types';

interface HeroSectionProps {
  onCTAClick: () => void;
}

const charVariants = {
  hidden: { filter: 'blur(12px)', opacity: 0, y: 8 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

const lineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const simpleBlurVariants = {
  hidden: { filter: 'blur(10px)', opacity: 0, y: 15 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

const splitTextToChars = (text: string, className?: string) =>
  text.split('').map((char, i) => (
    <motion.span
      key={i}
      variants={charVariants}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section
      id={Section.HERO}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="hero-gradient" />

      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <InteractiveAsciiSphere />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-16"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.div
            variants={simpleBlurVariants}
            className="flex items-center gap-3 justify-center"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <p className="text-[11px] mono uppercase tracking-[0.6em] text-zinc-400">
              {DESIGNER_NAME} // 2025 PROTOCOL
            </p>
          </motion.div>

          <motion.h1
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.4,
                  delayChildren: 0.2,
                },
              },
            }}
            className="serif text-[15vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] text-white leading-[0.9] sm:leading-[0.85] tracking-tighter italic"
          >
            <motion.span variants={lineVariants} style={{ display: 'block' }}>
              {splitTextToChars('Bridging the Ideal')}
            </motion.span>

            <motion.span
              variants={lineVariants}
              style={{ display: 'block', marginTop: '0.5rem' }}
            >
              {splitTextToChars(
                'and the',
                'text-zinc-500 font-light opacity-60'
              )}{' '}
              {splitTextToChars('Real')}
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 15 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.15,
              },
            },
          }}
          className="flex flex-col md:flex-row items-center gap-12 pointer-events-auto"
        >
          <div className="text-center md:text-right space-y-1">
            <p className="text-zinc-300 text-[9px] mono uppercase tracking-widest leading-none">
              {DESIGNER_ROLE}
            </p>
            <p className="text-white text-[10px] mono uppercase tracking-[0.4em] pt-1">
              SEOUL, KR
            </p>
          </div>

          <button
            onClick={onCTAClick}
            className="btn-monotone px-14 py-6 rounded-full font-bold text-[11px] mono tracking-[0.5em]"
          >
            VIEW PORTFOLIO
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
