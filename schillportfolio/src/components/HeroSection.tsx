import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const terminalLines = [
  { kind: 'command', text: 'whoami --json' },
  { kind: 'output', text: '{' },
  { kind: 'output', text: '  "name": "Samuel Schill",' },
  { kind: 'output', text: '  "role": "Frontend Developer",' },
  { kind: 'output', text: '  "stack": ["React", "Next.js", "TS"],' },
  { kind: 'output', text: '  "learning": "Full-stack + AI",' },
  { kind: 'output', text: '  "shipped": 102 /* commits, 12mo */' },
  { kind: 'output', text: '}' },
] as const

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!*&%'

function randomChar() {
  return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
}

export function HeroSection() {
  const terminalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!terminalRef.current) {
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanupFns: Array<() => void> = []

    const ctx = gsap.context(() => {
      const lineRows = gsap.utils.toArray<HTMLElement>('[data-term-line]')
      const finalPrompt = gsap.utils.toArray<HTMLElement>('[data-term-final]')

      const splitLineToChars = (textEl: HTMLElement) => {
        const source = textEl.dataset.fullText ?? textEl.textContent ?? ''
        const frag = document.createDocumentFragment()

        for (const letter of source) {
          const span = document.createElement('span')
          span.className = 'term-char'
          span.dataset.content = letter
          span.textContent = letter
          frag.appendChild(span)
        }

        textEl.textContent = ''
        textEl.appendChild(frag)
      }

      const scrambleOne = (charEl: HTMLElement) => {
        if (charEl.dataset.scrambling === '1') {
          return
        }

        const original = charEl.dataset.content ?? charEl.textContent ?? ''
        if (original.trim().length === 0) {
          return
        }

        charEl.dataset.scrambling = '1'
        charEl.classList.add('is-scrambling')

        const state = { frame: 0 }
        const totalFrames = 7

        gsap.to(state, {
          frame: totalFrames,
          duration: 0.32,
          ease: 'none',
          onStart: () => {
            gsap.to(charEl, { y: -2, color: 'var(--accent)', duration: 0.14, overwrite: true })
          },
          onUpdate: () => {
            charEl.textContent = randomChar()
          },
          onComplete: () => {
            charEl.textContent = original
            charEl.dataset.scrambling = '0'
            charEl.classList.remove('is-scrambling')
            gsap.to(charEl, { y: 0, color: 'inherit', duration: 0.18, overwrite: true })
          },
        })
      }

      const bindPointerScramble = () => {
        const terminal = terminalRef.current
        if (!terminal) {
          return
        }

        const onMove = (e: PointerEvent) => {
          const chars = terminal.querySelectorAll<HTMLElement>('.term-char')
          chars.forEach((charEl) => {
            const rect = charEl.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = e.clientX - cx
            const dy = e.clientY - cy
            const dist = Math.hypot(dx, dy)

            if (dist < 85 && Math.random() > 0.65) {
              scrambleOne(charEl)
            }
          })
        }

        terminal.addEventListener('pointermove', onMove)
        cleanupFns.push(() => terminal.removeEventListener('pointermove', onMove))
      }

      if (reduceMotion) {
        lineRows.forEach((line) => {
          const textEl = line.querySelector<HTMLElement>('[data-term-text]')
          const fullText = textEl?.dataset.fullText ?? ''
          if (textEl) {
            textEl.textContent = fullText
            splitLineToChars(textEl)
          }
          gsap.set(line, { autoAlpha: 1, y: 0 })
        })
        gsap.set(finalPrompt, { autoAlpha: 1, y: 0 })
        bindPointerScramble()
        return
      }

      gsap.set(lineRows, { autoAlpha: 0, y: 8 })
      gsap.set(finalPrompt, { autoAlpha: 0, y: 8 })

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      lineRows.forEach((line) => {
        const textEl = line.querySelector<HTMLElement>('[data-term-text]')
        if (!textEl) {
          return
        }

        const fullText = textEl.dataset.fullText ?? ''
        textEl.textContent = ''

        tl.to(line, { autoAlpha: 1, y: 0, duration: 0.16 })

        const chars = { count: 0 }
        tl.to(chars, {
          count: fullText.length,
          duration: Math.max(0.25, fullText.length * 0.024),
          ease: 'none',
          onUpdate: () => {
            textEl.textContent = fullText.slice(0, Math.floor(chars.count))
          },
          onComplete: () => {
            splitLineToChars(textEl)
          },
        })
      })

      tl.to(finalPrompt, { autoAlpha: 1, y: 0, duration: 0.2 }, '>-0.02')
      tl.call(() => {
        bindPointerScramble()
      })
    }, terminalRef)

    return () => {
      cleanupFns.forEach((fn) => fn())
      ctx.revert()
    }
  }, [])

  return (
    <header className="hero" id="top">
      <div className="hero-starfield" aria-hidden="true">
        <span className="hero-stars hero-stars--small" />
        <span className="hero-stars hero-stars--medium" />
        <span className="hero-stars hero-stars--large" />
      </div>
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

          <div className="terminal" aria-hidden="true" ref={terminalRef}>
            <div className="term-head">
              <span className="term-dot r" />
              <span className="term-dot y" />
              <span className="term-dot g" />
              <span className="term-title">~/samuel-schill — zsh</span>
            </div>
            <div className="term-body">
              {terminalLines.map((line, idx) => (
                <div
                  key={`${line.kind}-${idx}`}
                  className={`term-line ${line.kind === 'output' ? 'term-line--output' : ''}`}
                  data-term-line
                >
                  {line.kind === 'command' ? <span className="term-prompt">$</span> : null}
                  <span
                    className={line.kind === 'command' ? 'term-cmd term-type' : 'term-out term-type'}
                    data-term-text
                    data-full-text={line.text}
                  />
                </div>
              ))}
              <div className="term-line term-line--last" data-term-final>
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
