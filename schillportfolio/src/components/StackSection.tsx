import { stack } from '../data/portfolio'

export function StackSection() {
  const midpoint = Math.ceil(stack.length / 2)
  const topRow = stack.slice(0, midpoint)
  const bottomRow = stack.slice(midpoint)

  return (
    <section id="stack">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">02 /</span>
          <h2 className="sec-title">Stack</h2>
          <span className="sec-sub">// tools I reach for</span>
        </div>
        <div className="stack-marquee">
          {[topRow, bottomRow].map((row, rowIndex) => (
            <div className="stack-row" key={`stack-row-${rowIndex}`}>
              <div className={`stack-track stack-track--${rowIndex + 1}`}>
                {[...row, ...row].map((item, itemIndex) => (
                  <div className="stack-card" key={`${item.name}-${itemIndex}`}>
                    <div className="stack-icon">{item.icon}</div>
                    <div className="stack-name">{item.name}</div>
                    <div className="stack-cat">// {item.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
