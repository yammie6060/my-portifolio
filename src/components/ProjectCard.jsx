export default function ProjectCard({ emoji, title, description, tech, live }) {
  return (
    <article className="card-base flex flex-col overflow-hidden group
                        hover:shadow-xl hover:shadow-teal-500/[0.08]">

      <div className="px-7 pt-7 pb-5 border-b border-white/[0.04]
                      bg-gradient-to-br from-teal-500/[0.05] to-transparent">
        <span className="text-4xl block mb-4">{emoji}</span>
        <h3
          className="text-xl font-bold text-slate-100 group-hover:text-teal-200 transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>
      </div>

      <div className="flex flex-col flex-1 px-7 py-6 gap-5">
        <p className="text-slate-400 text-sm leading-relaxed flex-1"
           style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="font-mono-custom text-[0.7rem] px-2.5 py-1
                         bg-emerald-500/[0.07] border border-emerald-500/20
                         text-emerald-300 rounded-md tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono-custom text-xs
                     text-teal-400 hover:text-teal-200 transition-colors tracking-wide
                     group/link w-fit"
        >
          <span className="w-5 h-px bg-teal-400 group-hover/link:w-8 transition-all duration-300" />
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}