import SceneLayout from '../components/SceneLayout.jsx'
import { SNIPPETS } from '../data/snippets.js'

function CodeCard({ snippet, className = '' }) {
  return (
    <article className={`code-card ${className}`}>
      <div className="code-card-top">
        <span>{snippet.label}</span>
        <span className="code-language">{snippet.file.split('/').at(-1)}</span>
      </div>
      <pre><code>{snippet.code}</code></pre>
      <p className="code-path">{snippet.file}</p>
    </article>
  )
}

export default function TechnicalChallenge() {
  return (
    <SceneLayout
      className="scene--challenge"
      kicker="RETO TÉCNICO · CONTINUIDAD ENTRE BATALLAS"
      title="Conservar el estado, de extremo a extremo"
      subtitle="Continuar mantiene los recursos; descansar inicia con los máximos."
    >
      <div className="challenge-flow" aria-label="Flujo del dato entre capas">
        <span>React state</span><b>→</b><span>Axios · POST</span><b>→</b><span>Form Request</span><b>→</b><span>BattleService</span><b>→</b><span>MySQL</span><b>→</b><span>JSON · 201</span>
      </div>

      <div className="challenge-code-grid">
        <CodeCard snippet={SNIPPETS.carryover} />
        <CodeCard snippet={SNIPPETS.service} />
      </div>

      <div className="challenge-bottom">
        <CodeCard snippet={SNIPPETS.test} className="test-code-card" />
        <aside className="challenge-notes">
          <div className="note-label">QUÉ DEMUESTRA</div>
          <p>El frontend conserva HP/MP y los envía. Laravel valida enteros no negativos, limita al máximo y guarda la siguiente batalla.</p>
          <p className="trust-boundary">La API persiste el resultado reportado; no recalcula los turnos.</p>
        </aside>
      </div>
    </SceneLayout>
  )
}
