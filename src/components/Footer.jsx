import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    href: "mailto:chikwatipheona@gmail.com",
    icon: <FaEnvelope />,
    label: "Email",
    external: false,
  },
  {
    href: "https://github.com/chikwatipheona",
    icon: <FaGithub />,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://linkedin.com/in/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://twitter.com/",
    icon: <FaTwitter />,
    label: "Twitter",
    external: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060a0a] border-t border-white/[0.05] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p
          className="font-display text-2xl font-bold text-slate-300 mb-2"
        >
          Pheona<span className="text-teal-400"> Chikwati.</span>
        </p>
        <p className="font-mono-custom text-xs tracking-widest uppercase text-slate-500 mb-10">
          Developer &amp; Cybersecurity Analyst
        </p>

        <div className="flex justify-center gap-4 mb-10">
          {SOCIAL_LINKS.map(({ href, icon, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/[0.08]
                         flex items-center justify-center text-slate-400 text-lg
                         hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-teal-300
                         hover:scale-110 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8">
          <p className="font-mono-custom text-xs text-slate-500 flex items-center justify-center gap-2">
            &copy; {currentYear} Pheona Chikwati.
          </p>
        </div>

      </div>
    </footer>
  );
}