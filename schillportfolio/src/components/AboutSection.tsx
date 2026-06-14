export function AboutSection() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">01 /</span>
          <h2 className="sec-title">About</h2>
          <span className="sec-sub">// background</span>
        </div>
        <div className="about-grid">
          <div>
            <p className="about-lead">
              I started writing code in September 2025 after years working in
              high-pressure kitchens — and a lot of what I learned there carries over:
              run the checklist, ship under pressure, no drama.
            </p>
            <p className="about-copy">
              Now I focus on the front end. I care about clean component architecture,
              accessible interfaces, and motion that has a reason to be there.
              I&apos;m currently going through the Frontend Simplified Institute residency
              and pushing toward full-stack.
            </p>
            <p className="about-copy">
              When I&apos;m not at the keyboard you&apos;ll find me reading docs,
              dialing in a Firebase rule set, or trying to make an animation
              feel one frame snappier.
            </p>
          </div>
          <div>
            <div className="focus-card">
              <div className="focus-title">CURRENT_FOCUS.md</div>
              <ul className="focus-list">
                <li>
                  <span className="focus-dot" />
                  <div>
                    <div className="focus-name">Production-ready React apps</div>
                    <div className="focus-copy">Auth, payments, REST, SSR</div>
                  </div>
                </li>
                <li>
                  <span className="focus-dot" />
                  <div>
                    <div className="focus-name">Motion and interaction design</div>
                    <div className="focus-copy">
                      Detail-level transitions with reduced-motion respect
                    </div>
                  </div>
                </li>
                <li>
                  <span className="focus-dot" />
                  <div>
                    <div className="focus-name">Full-stack progression</div>
                    <div className="focus-copy">Node, API design, AI tooling</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
