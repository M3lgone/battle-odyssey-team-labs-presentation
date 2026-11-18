import SceneLayout from '../components/SceneLayout.jsx'
import battleScreenshot from '../assets/screenshots/battle.png'

const proofPoints = [
  { title: 'Una partida completa', detail: 'Selección · turnos · progresión' },
  { title: 'Un sistema conectado', detail: 'React · API REST · persistencia' },
  { title: 'Una aplicación gestionable', detail: 'Cuentas · historial · administración' },
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
          <img src={battleScreenshot} alt="Escena de combate de Battle Odyssey con un Guerrero y un Goblin" />
        </figure>
        <div className="proof-list">
          {proofPoints.map((point) => (
            <article className="proof-point" key={point.title}>
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
