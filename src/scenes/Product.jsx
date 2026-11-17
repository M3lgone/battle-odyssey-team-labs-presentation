import SceneLayout from '../components/SceneLayout.jsx'
import battleScreenshot from '../assets/screenshots/battle.png'

const proofPoints = [
  { number: '01', title: 'Una partida completa', detail: 'Selección · turnos · progresión' },
  { number: '02', title: 'Un sistema conectado', detail: 'React · API REST · persistencia' },
  { number: '03', title: 'Una aplicación gestionable', detail: 'Cuentas · historial · administración' },
]

export default function Product() {
  return (
    <SceneLayout
      className="scene--product"
      kicker="EL RESULTADO"
      title="Una idea que ya se puede jugar"
      subtitle="Un RPG por turnos: de elegir personaje a guardar el resultado de una partida."
    >
      <div className="product-layout">
        <figure className="product-shot framed-shot">
          <img src={battleScreenshot} alt="Captura real de una batalla de Battle Odyssey" />
          <figcaption><span className="live-dot" /> CAPTURA REAL DEL PRODUCTO</figcaption>
        </figure>
        <div className="proof-list">
          {proofPoints.map((point) => (
            <article className="proof-point" key={point.number}>
              <span className="proof-number">{point.number}</span>
              <div><h2>{point.title}</h2><p>{point.detail}</p></div>
            </article>
          ))}
          <div className="product-note">
            <span className="gold-rule" />
            <p>Una motivación personal, llevada hasta una aplicación funcional.</p>
          </div>
        </div>
      </div>
    </SceneLayout>
  )
}
