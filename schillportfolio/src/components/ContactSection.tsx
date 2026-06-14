import type { FormEvent } from 'react'

type ContactSectionProps = {
  showFormMessage: boolean
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function ContactSection({ showFormMessage, onSubmit }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">05 /</span>
          <h2 className="sec-title">Contact</h2>
          <span className="sec-sub">// let&apos;s build something</span>
        </div>
        <div className="contact-grid">
          <div className="contact-intro">
            <h2>
              Have a project
              <br />
              in mind?
            </h2>
            <p>
              Freelance, internships, full-time roles, or just to say hi — my inbox is
              open. I usually reply within 24 hours.
            </p>
            <div className="contact-list">
              <a className="contact-item" href="mailto:sam@example.com">
                <span className="label">// email</span>
                <span className="val">sam@example.com →</span>
              </a>
              <a
                className="contact-item"
                href="https://github.com/sstech02"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">// github</span>
                <span className="val">@sstech02 →</span>
              </a>
              <a
                className="contact-item"
                href="https://www.linkedin.com/in/samuel-schill-017b3826a/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">// linkedin</span>
                <span className="val">/in/samuel-schill →</span>
              </a>
              <a className="contact-item" href="#top">
                <span className="label">// portfolio</span>
                <span className="val">samschill.dev →</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label htmlFor="cname">Name</label>
              <input id="cname" type="text" required placeholder="Jane Doe" />
            </div>
            <div className="form-row">
              <label htmlFor="cemail">Email</label>
              <input id="cemail" type="email" required placeholder="jane@company.com" />
            </div>
            <div className="form-row">
              <label htmlFor="cmsg">Message</label>
              <textarea id="cmsg" required placeholder="Tell me a bit about the project..." />
            </div>
            <div className="form-actions">
              <button className="form-submit" type="submit">
                Send message
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
              </button>
              <span className={`form-msg ${showFormMessage ? 'show' : ''}`}>
                → message queued. I&apos;ll be in touch.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
