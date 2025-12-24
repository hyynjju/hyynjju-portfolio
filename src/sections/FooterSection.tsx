import { DESIGNER_EMAIL } from '../constants';

const FooterSection = () => {
  return (
    <footer className="py-32 px-8 border-t border-zinc-900 bg-zinc-950/20">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        {/* Email */}
        <a
          href={`mailto:${DESIGNER_EMAIL}`}
          className="serif text-4xl sm:text-3xl md:text-4xl text-white tracking-tighter italic opacity-80 hover:opacity-100 transition-opacity text-left"
        >
          {DESIGNER_EMAIL}
        </a>

        {/* Links + Copyright */}
        <div className="flex flex-col items-start md:items-end">
          <div className="flex gap-6 text-xs mono uppercase tracking-[0.5em] text-zinc-600">
            <a
              href="https://github.com/hyynjju"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 hover:text-white transition-all"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com/hyynjju"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 hover:text-white transition-all"
            >
              Instagram
            </a>
            <a
              href={`mailto:${DESIGNER_EMAIL}`}
              className="py-4 hover:text-white transition-all"
            >
              Email
            </a>
          </div>

          <div className="mono text-xs text-zinc-800 tracking-[0.4em] uppercase font-bold text-left md:text-right leading-loose">
            2025 &copy; SYSTEM DESIGN LAB
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
