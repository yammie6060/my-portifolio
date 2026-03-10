
export default function SkillTag({ label }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-md text-xs tracking-wide
                 bg-teal-500/[0.07] border border-teal-500/20 text-teal-300
                 hover:bg-teal-500/15 hover:border-teal-400/40
                 transition-all duration-200 cursor-default font-mono-custom"
    >
      {label}
    </span>
  );
}