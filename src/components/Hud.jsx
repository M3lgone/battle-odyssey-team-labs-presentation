import { TOTAL_DURATION } from '../deck.js'

export default function Hud({ scene, index, total }) {
  const progress = ((index + 1) / total) * 100

  return (
    <header className="hud">
      <div className="hud-brand">
        <span className="brand-mark" aria-hidden="true">✦</span>
        <span className="brand-name">Battle Odyssey</span>
        <span className="brand-context">IT ACADEMY <i /> TEMA LABS</span>
      </div>
      <div className="hud-progress" aria-label={`Escena ${index + 1} de ${total}`}>
        <div className="progress-meta">
          <span>{String(index + 1).padStart(2, '0')} <b>/</b> {String(total).padStart(2, '0')}</span>
          <span>{scene.time} <b className="duration-total">/ {TOTAL_DURATION}</b></span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuemin="1"
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Progreso de la presentación"
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </header>
  )
}
