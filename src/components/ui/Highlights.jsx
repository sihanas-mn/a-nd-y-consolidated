import { highlights } from '../../constants'

export default function Highlights() {
  return (
    <div className="stats-grid">
      {highlights.map(([value, label]) => (
        <div className="stat" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
