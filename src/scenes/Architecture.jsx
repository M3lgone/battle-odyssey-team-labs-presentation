import SceneLayout from '../components/SceneLayout.jsx'

const nodes = [
  { key: 'react', title: 'React', type: 'UI + combate local', mark: '01' },
  { key: 'axios', title: 'Axios', type: 'HTTP · JSON · Bearer', mark: '02' },
  { key: 'laravel', title: 'Laravel API', type: 'rutas · validación · servicios', mark: '03' },
  { key: 'mysql', title: 'MySQL', type: 'partidas · batallas · relaciones', mark: '04' },
]

export default function Architecture() {
  return (
    <SceneLayout
      className="scene--architecture"
      kicker="ARQUITECTURA REAL"
      title="Cada capa tiene una responsabilidad"
      subtitle="Una petición concreta conecta interfaz, API y persistencia."
    >
      <div className="architecture-board">
        <div className="architecture-flow">
          {nodes.map((node, index) => (
            <div className="flow-part" key={node.key}>
              <article className={`flow-node flow-node--${node.key}`}>
                <span className="node-mark">{node.mark}</span>
                <h2>{node.title}</h2>
                <p>{node.type}</p>
              </article>
              {index < nodes.length - 1 && (
                <div className="flow-arrow" aria-hidden="true"><span>→</span></div>
              )}
            </div>
          ))}
        </div>

        <div className="server-workflow">
          <span className="workflow-label">DENTRO DE LA API</span>
          <span>Route</span><b>→</b><span>Form Request</span><b>→</b><span>Controller</span><b>→</b><span>Service</span>
        </div>

        <div className="response-line">
          <span className="response-arrow" aria-hidden="true">←</span>
          <p><strong>Respuesta JSON</strong> · Laravel serializa el resultado → Axios → React actualiza la interfaz</p>
        </div>

        <div className="infra-row">
          <span><i className="infra-icon">▦</i> Docker Compose</span>
          <span><i className="infra-icon">▣</i> Nginx sirve el build del frontend</span>
          <span><i className="infra-icon">◈</i> Passport · token Bearer</span>
        </div>
        <p className="architecture-footnote">Los turnos se resuelven en el frontend; la API valida y persiste sus resultados. MySQL no genera la respuesta JSON.</p>
      </div>
    </SceneLayout>
  )
}
