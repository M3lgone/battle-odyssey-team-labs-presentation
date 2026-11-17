import SceneLayout from '../components/SceneLayout.jsx'

const practices = [
  { mark: '01', title: 'Tests de API', text: 'Pest comprueba creación, continuidad de HP/MP, validación y persistencia.' },
  { mark: '02', title: 'Validación y acceso', text: 'Form Requests, Passport y middleware de rol admin.' },
  { mark: '03', title: 'Trabajo con Git', text: 'Repos separados, rama develop y ramas de funcionalidad integradas.' },
  { mark: '04', title: 'Entorno reproducible', text: 'Docker Compose para API/MySQL y frontend servido por Nginx.' },
]

export default function Quality() {
  return (
    <SceneLayout
      className="scene--quality"
      kicker="CALIDAD Y PROFESIONALIDAD"
      title="Comprobar también es construir"
      subtitle="Prácticas respaldadas por el código y la configuración del proyecto."
    >
      <div className="quality-grid">
        {practices.map((practice) => (
          <article className="quality-card" key={practice.mark}>
            <span className="quality-mark">{practice.mark}</span>
            <h2>{practice.title}</h2>
            <p>{practice.text}</p>
            <span className="quality-accent" />
          </article>
        ))}
      </div>
      <div className="quality-foot">
        <span className="quality-foot-mark">i</span>
        <p>Tests automatizados: backend. No afirmo una suite de tests de frontend.</p>
        <span className="quality-db">MySQL en Docker <i /> SQLite en tests</span>
      </div>
    </SceneLayout>
  )
}
