import logo from '../assets/logo/logo-battle-odissey.png'
import archer from '../assets/characters/archer.png'

export default function Opening() {
  return (
    <section className="scene scene--opening" aria-label="De una idea a una aplicación">
      <div className="opening-copy">
        <p className="eyebrow"><span />IT ACADEMY</p>
        <img className="game-logo" src={logo} alt="Battle Odyssey" />
        <h1>De una idea <em>a una aplicación</em></h1>
        <p className="opening-lede">Un proyecto personal convertido en una experiencia full-stack funcional.</p>
        <div className="opening-tags">
          <span>FRONTEND</span><b>→</b><span>API REST</span><b>→</b><span>DATOS</span>
        </div>
        <p className="presenter-line">Ismael Gonzalez</p>
      </div>
      <div className="opening-art" aria-hidden="true">
        <div className="art-ring art-ring--outer" />
        <div className="art-ring art-ring--inner" />
        <img src={archer} alt="" />
        <span className="art-caption">UNA IDEA · UN PROYECTO · UNA APLICACIÓN</span>
      </div>
    </section>
  )
}
