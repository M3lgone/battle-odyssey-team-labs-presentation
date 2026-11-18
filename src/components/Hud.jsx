export default function Hud({ index, total }) {
  const progress = ((index + 1) / total) * 100

  return (
    <header className="hud">
      <div className="hud-brand">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span className="brand-name">Battle Odyssey</span>
      </div>
      <div className="hud-progress">
        <div
          className="progress-track"
          role="progressbar"
          aria-valuemin="1"
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Progreso del recorrido"
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </header>
  )
}
