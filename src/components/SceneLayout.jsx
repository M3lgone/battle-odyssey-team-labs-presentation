export default function SceneLayout({ kicker, title, subtitle, className = '', children }) {
  return (
    <section className={`scene scene--content ${className}`} aria-label={title}>
      <div className="scene-heading">
        <p className="eyebrow"><span />{kicker}</p>
        <h1>{title}</h1>
        {subtitle && <p className="scene-subtitle">{subtitle}</p>}
      </div>
      <div className="scene-body">{children}</div>
    </section>
  )
}
