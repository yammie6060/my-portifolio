
export default function SectionHeader({ eyebrow, title, centered = false }) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}