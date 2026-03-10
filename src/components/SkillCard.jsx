
import SkillTag from "./SkillTag";

export default function SkillCard({ category, items }) {
  return (
    <div className="card-base p-7 hover:shadow-lg hover:shadow-teal-500/5">
      <h3 className="font-mono-custom text-xs uppercase tracking-[0.18em] text-teal-400 mb-5">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillTag key={item} label={item} />
        ))}
      </div>
    </div>
  );
}