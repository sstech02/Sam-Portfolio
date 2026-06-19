export function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="status-pill">
          <span className="dot" />
          Available for frontend work · Q2 2026
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Frontend engineer
              <br />
              specializing in <span className="accent">React, Next.js, and TypeScript.</span>
              <br />
              Building fast and intuitive web applications.
            </h1>
            <p className="hero-sub">
              I&apos;m Samuel — I design and build responsive web applications with React,
              Next.js, and TypeScript. Currently in the Frontend Simplified Institute
              residency, shipping production projects with Firebase auth, Stripe
              payments, and REST APIs.
            </p>
            <div className="hero-meta">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Appleton, WI
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Open to remote
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                UTC−06:00 · CST
              </span>
            </div>
            <div className="hero-cta-row">
              <a href="#projects" className="btn btn-primary">
                View work
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://github.com/sstech02"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                </svg>
                github.com/sstech02
              </a>
            </div>
          </div>

          <div className="terminal" aria-hidden="true">
            <div className="term-head">
              <span className="term-dot r" />
              <span className="term-dot y" />
              <span className="term-dot g" />
              <span className="term-title">~/samuel-schill — zsh</span>
            </div>
            <div className="term-body">
              <div className="term-line">
                <span className="term-prompt">$</span>
                <span className="term-cmd">whoami --json</span>
              </div>
              <div className="term-out">{'{'}</div>
              <div className="term-out">
                {'  '}<span className="k">&quot;name&quot;</span>: <span className="s">&quot;Samuel Schill&quot;</span>,
              </div>
              <div className="term-out">
                {'  '}<span className="k">&quot;role&quot;</span>: <span className="s">&quot;Frontend Developer&quot;</span>,
              </div>
              <div className="term-out">
                {'  '}<span className="k">&quot;stack&quot;</span>: [<span className="s">&quot;React&quot;</span>, <span className="s">&quot;Next.js&quot;</span>, <span className="s">&quot;TS&quot;</span>],
              </div>
              <div className="term-out">
                {'  '}<span className="k">&quot;learning&quot;</span>: <span className="s">&quot;Full-stack + AI&quot;</span>,
              </div>
              <div className="term-out">
                {'  '}<span className="k">&quot;shipped&quot;</span>: <span className="n">102</span>{' '}
                <span className="term-note">/* commits, 12mo */</span>
              </div>
              <div className="term-out">{'}'}</div>
              <div className="term-line term-line--last">
                <span className="term-prompt">$</span>
                <span className="term-cmd">
                  _ <span className="cursor" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
