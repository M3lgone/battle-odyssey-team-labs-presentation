import { useCallback, useEffect, useState } from 'react'
import { SCENES } from './deck.js'
import Hud from './components/Hud.jsx'
import Navigation from './components/Navigation.jsx'
import Opening from './scenes/Opening.jsx'
import Product from './scenes/Product.jsx'
import DemoBridge from './scenes/DemoBridge.jsx'
import Architecture from './scenes/Architecture.jsx'
import TechnicalChallenge from './scenes/TechnicalChallenge.jsx'
import Quality from './scenes/Quality.jsx'
import Closing from './scenes/Closing.jsx'

const SCENE_COMPONENTS = {
  opening: Opening,
  product: Product,
  demo: DemoBridge,
  architecture: Architecture,
  challenge: TechnicalChallenge,
  quality: Quality,
  closing: Closing,
}

export default function App() {
  const [index, setIndex] = useState(0)
  const goTo = useCallback((nextIndex) => {
    setIndex(Math.max(0, Math.min(SCENES.length - 1, nextIndex)))
  }, [])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const previous = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target
      if (target instanceof HTMLElement) {
        const tag = target.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'A') return
        if (tag === 'BUTTON' && (event.key === 'Enter' || event.key === ' ')) return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        next()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        previous()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [next, previous])

  const scene = SCENES[index]
  const Scene = SCENE_COMPONENTS[scene.id]

  return (
    <main className="presentation-shell">
      <div className="deck-stage" aria-label="Presentación Battle Odyssey para Tema Labs">
        <Hud scene={scene} index={index} total={SCENES.length} />
        <div className="scene-viewport" key={scene.id}>
          <Scene />
        </div>
        <Navigation scenes={SCENES} index={index} onGo={goTo} onNext={next} onPrevious={previous} />
      </div>
    </main>
  )
}
