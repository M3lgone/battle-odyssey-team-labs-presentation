import { useState } from 'react'
import archer from '../assets/characters/archer.png'
import betweenBattles from '../assets/screenshots/between-battles.png'

const route = ['Acceso', 'Nueva partida', 'Personaje', 'Ataque + habilidad', 'Siguiente batalla']

export default function DemoBridge() {
  const [showBackup, setShowBackup] = useState(false)

  return (
    <section className="scene scene--demo" aria-label="Transición a la demo real">
      <div className="demo-heading">
        <p className="eyebrow"><span />03 · PRODUCTO EN VIVO <i /> 2:30</p>
        <h1>Ahora, en la aplicación real.</h1>
        <p>La presentación no simula el juego. Cambia a la pestaña local preparada.</p>
      </div>

      <div className="demo-layout">
        <div className="demo-launch-card">
          <div className="demo-artwork">
            <div className="demo-art-grid" />
            <img src={archer} alt="Ilustración del personaje Archer" />
            <span className="demo-art-label">RUN LOCAL · REACT + LARAVEL</span>
          </div>
          <div className="demo-launch-copy">
            <div className="ready-label"><span className="live-dot" /> PESTAÑA PREPARADA</div>
            <p className="local-url">localhost:5173</p>
            <p className="switch-hint">Cambia a la pestaña del juego con <kbd>Ctrl</kbd> + <kbd>Tab</kbd>. Vuelve con <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>.</p>
            <p className="demo-no-duplicate">El juego debe estar abierto y probado antes de empezar.</p>
          </div>
        </div>

        <aside className="demo-route-card">
          <div className="card-kicker">RECORRIDO · 2 MIN 30 S</div>
          <ol className="demo-route">
            {route.map((step, index) => (
              <li key={step}>
                <span className="route-number">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className="demo-focus">
            <span className="focus-mark">↗</span>
            <p>En la siguiente batalla, compararé los HP y MP conservados.</p>
          </div>
          <button className="backup-toggle" type="button" onClick={() => setShowBackup(true)}>
            Plan B <span aria-hidden="true">·</span> captura real
          </button>
        </aside>
      </div>

      {showBackup && (
        <div className="backup-overlay" role="dialog" aria-modal="true" aria-labelledby="backup-title">
          <div className="backup-card">
            <button className="backup-close" type="button" onClick={() => setShowBackup(false)} aria-label="Cerrar plan B">×</button>
            <p className="eyebrow"><span />PLAN B · SIN SIMULACIÓN</p>
            <h2 id="backup-title">Captura real del juego</h2>
            <p>Si falla la conexión, continúo con una captura del producto y explico el flujo técnico.</p>
            <img src={betweenBattles} alt="Captura real de la pantalla entre batallas" />
            <span className="backup-caption">CAPTURA DEL PROYECTO · NO INTERACTIVA</span>
          </div>
        </div>
      )}
    </section>
  )
}
