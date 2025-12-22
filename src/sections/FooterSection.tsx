import { DESIGNER_EMAIL } from '../constants';

const FooterSection = () => {
  return (
    <footer className="py-48 px-8 border-t border-zinc-900 bg-zinc-950/20">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
        <a
          href={`mailto:${DESIGNER_EMAIL}`}
          className="serif text-6xl md:text-6xl text-white tracking-tighter italic opacity-80 hover:opacity-100 transition-opacity"
        >
          {DESIGNER_EMAIL}
        </a>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <div className="flex gap-6 text-[10px] mono uppercase tracking-[0.5em] text-zinc-600">
            <a
              href="https://github.com/hyynjju"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 hover:text-white transition-all"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/hyynjju"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 hover:text-white transition-all"
            >
              Instagram
            </a>
            <a
              href={`mailto:${DESIGNER_EMAIL}`}
              className="px-6 py-4 hover:text-white transition-all"
            >
              Email
            </a>
          </div>

          <div className="mono text-[9px] text-zinc-800 tracking-[0.4em] uppercase font-bold text-center md:text-right leading-loose">
            2025 &copy; SYSTEM DESIGN LAB
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
