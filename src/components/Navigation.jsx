export default function Navigation({ scenes, index, onGo, onNext, onPrevious }) {
  return (
    <footer className="navigation">
      <button className="nav-button nav-button--quiet" type="button" onClick={onPrevious} disabled={index === 0}>
        <span aria-hidden="true">←</span> Anterior
      </button>
      <nav className="scene-dots" aria-label="Navegación por escenas">
        {scenes.map((scene, sceneIndex) => (
          <button
            className={`scene-dot${sceneIndex === index ? ' is-active' : ''}`}
            key={scene.id}
            type="button"
            title={scene.label}
            aria-label={`Ir a escena: ${scene.label}`}
            aria-current={sceneIndex === index ? 'step' : undefined}
            onClick={() => onGo(sceneIndex)}
          />
        ))}
      </nav>
      <button className="nav-button nav-button--next" type="button" onClick={onNext} disabled={index === scenes.length - 1}>
        Siguiente <span aria-hidden="true">→</span>
      </button>
    </footer>
  )
}
