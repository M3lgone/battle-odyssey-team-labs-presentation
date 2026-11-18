import winner from '../assets/characters/win-warrior.png'

const skills = ['Construir una solución funcional', 'Conectar frontend, API y datos', 'Explicar decisiones y validar resultados']

export default function Closing() {
  return (
    <section className="scene scene--closing" aria-label="Qué puedo aportar">
      <div className="closing-art">
        <div className="closing-sigil">✦</div>
        <img src={winner} alt="Guerrero celebrando una victoria" />
        <span>PROYECTO FINAL · FULL-STACK</span>
      </div>
      <div className="closing-copy">
        <p className="eyebrow"><span />CIERRE</p>
        <h1>De una idea <em>a una aplicación funcional.</em></h1>
        <p className="closing-intro">Eso es lo que he practicado construyendo Battle Odyssey.</p>
        <ul>
          {skills.map((skill) => <li key={skill}><span>✦</span>{skill}</li>)}
        </ul>
        <div className="closing-signoff"><span />Gracias <i /> ¿Preguntas?</div>
      </div>
    </section>
  )
}
