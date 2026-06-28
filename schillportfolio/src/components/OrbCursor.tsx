import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const interactiveSelector = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  'summary',
  '[role="button"]',
  '[data-cursor="interactive"]',
].join(', ')

export function OrbCursor() {
  const orbRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const prefersFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersFinePointer || prefersReducedMotion) {
      return undefined
    }

    const orb = orbRef.current
    const core = coreRef.current

    if (!orb || !core) {
      return undefined
    }

    const root = document.documentElement
    root.classList.add('cursor-active')

    gsap.set([orb, core], {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      autoAlpha: 0,
    })

    const moveOrbX = gsap.quickTo(orb, 'x', { duration: 0.42, ease: 'power3.out' })
    const moveOrbY = gsap.quickTo(orb, 'y', { duration: 0.42, ease: 'power3.out' })
    const moveCoreX = gsap.quickTo(core, 'x', { duration: 0.16, ease: 'power2.out' })
    const moveCoreY = gsap.quickTo(core, 'y', { duration: 0.16, ease: 'power2.out' })

    let isInteractive = false

    const setInteractive = (nextValue: boolean) => {
      if (isInteractive === nextValue) {
        return
      }

      isInteractive = nextValue

      gsap.to(orb, {
        scale: nextValue ? 1.55 : 1,
        duration: 0.24,
        ease: 'power2.out',
        overwrite: 'auto',
      })
      gsap.to(core, {
        scale: nextValue ? 0.55 : 1,
        duration: 0.24,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const showCursor = () => {
      gsap.to([orb, core], {
        autoAlpha: 1,
        duration: 0.18,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const hideCursor = () => {
      gsap.to([orb, core], {
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      })
      setInteractive(false)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return
      }

      showCursor()
      moveOrbX(event.clientX)
      moveOrbY(event.clientY)
      moveCoreX(event.clientX)
      moveCoreY(event.clientY)

      const target = event.target instanceof Element ? event.target.closest(interactiveSelector) : null
      setInteractive(Boolean(target))
    }

    const handlePointerDown = () => {
      gsap.to(orb, {
        scale: isInteractive ? 1.3 : 0.9,
        duration: 0.12,
        ease: 'power2.out',
        overwrite: 'auto',
      })
      gsap.to(core, {
        scale: isInteractive ? 0.4 : 0.75,
        duration: 0.12,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const handlePointerUp = () => {
      setInteractive(isInteractive)
      if (!isInteractive) {
        gsap.to(orb, {
          scale: 1,
          duration: 0.18,
          ease: 'power2.out',
          overwrite: 'auto',
        })
        gsap.to(core, {
          scale: 1,
          duration: 0.18,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }
    }

    const handleWindowMouseOut = (event: MouseEvent) => {
      if (event.relatedTarget === null) {
        hideCursor()
      }
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('mouseout', handleWindowMouseOut)
    window.addEventListener('blur', hideCursor)

    return () => {
      root.classList.remove('cursor-active')
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('mouseout', handleWindowMouseOut)
      window.removeEventListener('blur', hideCursor)
    }
  }, [])

  return (
    <>
      <div ref={orbRef} className="orb-cursor" aria-hidden="true" />
      <div ref={coreRef} className="orb-cursor__core" aria-hidden="true" />
    </>
  )
}