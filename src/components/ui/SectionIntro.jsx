export default function SectionIntro({ number, label, title, children }) {
  return (
    <div className="section-intro">
      <div className="eyebrow">
        <span /> {number} / {label}
      </div>
      <h2>{title}</h2>
      {children && <div className="section-intro-copy">{children}</div>}
    </div>
  )
}
