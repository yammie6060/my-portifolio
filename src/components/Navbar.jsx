import { useState, useEffect } from "react";
import resumePDF from "../assets/resume.pdf"; 

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleResumeClick = (e) => {
    e.preventDefault();
    // For download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pheona_Chikwati_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setMenuOpen(false);
  };

  const handleResumeView = (e) => {
    e.preventDefault();
    window.open(resumePDF, '_blank');
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4
                  flex items-center justify-between transition-all duration-400
                  ${scrolled
          ? "bg-[#0a0f0f]/80 backdrop-blur-xl border-b border-teal-500/10 shadow-xl shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <a
        href="#"
        className="font-display text-4xl font-bold text-teal-400 tracking-wide
                   hover:text-teal-300 transition-colors duration-200"
      >
        Pheona Chikwati<span className="text-slate-100">.</span>
      </a>

      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="font-mono-custom text-xs tracking-[0.14em] uppercase
                         text-slate-400 hover:text-teal-300 transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
        <li className="relative group">
          <button
            onClick={handleResumeClick}
            className="font-mono-custom text-xs tracking-widest uppercase
                       px-4 py-2 border border-teal-500/40 rounded-lg text-teal-300
                       hover:bg-teal-500/10 hover:border-teal-400/70 transition-all duration-200
                       flex items-center gap-1"
          >
            <span>Resume</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-[#0d1414] border border-teal-500/20 
                          rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 
                          group-hover:visible transition-all duration-200 overflow-hidden">
            <button
              onClick={handleResumeClick}
              className="w-full text-left px-4 py-3 text-xs text-slate-300 
                         hover:bg-teal-500/10 hover:text-teal-300 transition-colors
                         border-b border-teal-500/10 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
            <button
              onClick={handleResumeView}
              className="w-full text-left px-4 py-3 text-xs text-slate-300 
                         hover:bg-teal-500/10 hover:text-teal-300 transition-colors
                         flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7
                         -1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View in Browser
            </button>
          </div>
        </li>
      </ul>

      <button
        className="md:hidden text-slate-300 hover:text-teal-300 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0d1414]/95
                        backdrop-blur-xl border-b border-teal-500/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono-custom text-sm uppercase tracking-widest
                             text-slate-300 hover:text-teal-300 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="space-y-2">
              <button
                onClick={handleResumeClick}
                className="w-full btn-outline text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </button>
              <button
                onClick={handleResumeView}
                className="w-full px-4 py-2 text-xs text-slate-400 
                           hover:text-teal-300 transition-colors
                           flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7
                           -1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View in Browser
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}