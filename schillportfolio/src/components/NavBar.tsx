type NavBarProps = {
  onToggleTheme: () => void
}

export function NavBar({ onToggleTheme }: NavBarProps) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <div className="brand-mark">S</div>
          <span>samschill.dev</span>
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">
            <span className="num">01</span> about
          </a>
          <a href="#stack" className="nav-link">
            <span className="num">02</span> stack
          </a>
          <a href="#projects" className="nav-link">
            <span className="num">03</span> projects
          </a>
          <a href="#timeline" className="nav-link">
            <span className="num">04</span> timeline
          </a>
          <a href="#contact" className="nav-link">
            <span className="num">05</span> contact
          </a>
          <button
            type="button"
            className="theme-btn"
            id="themeBtn"
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <a href="#contact" className="nav-cta">
            Get in touch
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
