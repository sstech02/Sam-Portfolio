import { stack } from '../data/portfolio'

export function StackSection() {
  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">02 /</span>
          <h2 className="sec-title">Stack</h2>
          <span className="sec-sub">// tools I reach for</span>
        </div>
        <div className="stack-grid">
          {stack.map((item) => (
            <div className="stack-card" key={item.name}>
              <div className="stack-icon">{item.icon}</div>
              <div className="stack-name">{item.name}</div>
              <div className="stack-cat">// {item.cat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
