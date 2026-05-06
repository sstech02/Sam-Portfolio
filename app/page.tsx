'use client'
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type MouseEvent
} from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import profilepic from '../app/assets/SamuelSchillprofilepic.jpg'
import SaminternshipV2 from '../app/assets/SaminternshipV2.png'
import Netflixclone from '../app/assets/Netflixclone.png'
import Ultraverse from '../app/assets/Ultraverse.png'
// Project data for the projects grid
interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  screenshot: string | StaticImageData
}

const projects: Project[] = [
  {
    title: 'Summarist',
    description:
      'A book summary site that includes a user-friendly interface, dynamically fetched API rendering, and responsive design. Features include login functionality (login, signup, reset password) with Google authentication and guest login included. Users can become premium members to access premium book audio (monthly and yearly). Responsive design and skeleton loading states are implemented for a seamless user experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe'],
    link: 'https://sam-internship2.vercel.app/',
    screenshot: SaminternshipV2
  },
  {
    title: 'Ultraverse',
    description:
      'A mock NFT marketplace built using React. Features include a movable/scrollable carousel, onscrolling animations, dynamically rendered APIs, responsiveness, and skeleton loading states.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://sam-internship-psi.vercel.app/',
    screenshot: Ultraverse
  },
  {
    title: 'Netflix Clone',
    description:
      'A recreation of the Netflix UI using Vite, showcasing responsive design and dynamic content rendering. Movies displayed using the TMDB API',
    tech: ['Vite', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://netflix-clone-ten-iota-12.vercel.app/',
    screenshot: Netflixclone
  }
]

// Navigation links
const navLinks = ['About', 'Projects', 'Contact']

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/sstech02',
    ariaLabel: 'GitHub profile'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samuel-schill-017b3826a/',
    ariaLabel: 'LinkedIn profile'
  },
  {
    label: 'Twitter',
    href: 'https://x.com/sstech02',
    ariaLabel: 'Twitter profile'
  }
] as const

const aboutSkills = [
  { label: 'JavaScript', iconClassName: 'fa-brands fa-js' },
  { label: 'TypeScript', iconClassName: 'fa-solid fa-code' },
  { label: 'React', iconClassName: 'fa-brands fa-react' },
  { label: 'Next.js', iconClassName: 'fa-solid fa-forward' },
  { label: 'HTML', iconClassName: 'fa-brands fa-html5' },
  { label: 'CSS', iconClassName: 'fa-brands fa-css3-alt' },
  { label: 'Tailwind CSS', iconClassName: 'fa-solid fa-wind' },
  { label: 'Firebase', iconClassName: 'fa-solid fa-fire' }
]

const backgroundTextArtWords = [
  'BUILD',
  'CREATE',
  'DESIGN',
  'CODE',
  'SHIP',
  'UX',
  'UI',
  'DEVELOP',
  'DEBUG',
  'IMPROVE'
]

interface ContactFormValues {
  name: string
  email: string
  message: string
}

interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

type ContactFormStatusType = '' | 'success' | 'error'

export default function Home () {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSocialIndex, setActiveSocialIndex] = useState<number | null>(
    null
  )
  const contactAnimationTimeoutsRef = useRef<
    Array<ReturnType<typeof setTimeout>>
  >([])
  const [contactFormValues, setContactFormValues] = useState<ContactFormValues>(
    {
      name: '',
      email: '',
      message: ''
    }
  )
  const [contactFormErrors, setContactFormErrors] = useState<ContactFormErrors>(
    {}
  )
  const [contactFormStatus, setContactFormStatus] = useState('')
  const [contactFormStatusType, setContactFormStatusType] =
    useState<ContactFormStatusType>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<Set<string>>(new Set())

  const handleImageLoad = (projectTitle: string) => {
    setImagesLoaded(prev => new Set(prev).add(projectTitle))
  }

  const clearContactAnimationTimeouts = () => {
    contactAnimationTimeoutsRef.current.forEach(timeoutId => {
      clearTimeout(timeoutId)
    })
    contactAnimationTimeoutsRef.current = []
  }

  useEffect(() => {
    return () => {
      clearContactAnimationTimeouts()
    }
  }, [])

  const handleContactClick = () => {
    const initialDelay = 500
    const stepDelay = 650

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })

    clearContactAnimationTimeouts()
    setActiveSocialIndex(null)

    socialLinks.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setActiveSocialIndex(index)
      }, initialDelay + index * stepDelay)
      contactAnimationTimeoutsRef.current.push(timeoutId)
    })

    const resetTimeoutId = setTimeout(() => {
      setActiveSocialIndex(null)
    }, initialDelay + socialLinks.length * stepDelay)
    contactAnimationTimeoutsRef.current.push(resetTimeoutId)
  }

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault()
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setContactFormValues(previousValues => ({
      ...previousValues,
      [name]: value
    }))
    setContactFormErrors(previousErrors => ({
      ...previousErrors,
      [name]: undefined
    }))
    setContactFormStatus('')
    setContactFormStatusType('')
  }

  const isContactFormValid =
    contactFormValues.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactFormValues.email.trim()) &&
    contactFormValues.message.trim().length > 0

  const validateContactForm = () => {
    const errors: ContactFormErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!contactFormValues.name.trim()) {
      errors.name = 'Name is required.'
    }

    if (!contactFormValues.email.trim()) {
      errors.email = 'Email is required.'
    } else if (!emailPattern.test(contactFormValues.email.trim())) {
      errors.email = 'Enter a valid email address.'
    }

    if (!contactFormValues.message.trim()) {
      errors.message = 'Message is required.'
    }

    return errors
  }

  const handleContactFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validateContactForm()
    setContactFormErrors(errors)

    if (Object.keys(errors).length > 0) {
      setContactFormStatus('Please fix the highlighted fields.')
      setContactFormStatusType('error')
      return
    }

    setIsSubmitting(true)

    const { name, email, message } = contactFormValues
    const mailtoSubject = encodeURIComponent(`Message from ${name.trim()}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    )

    // Simulate a brief delay to show loading state
    setTimeout(() => {
      window.location.href = `mailto:samuelsch002@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
      setContactFormStatus(
        'Success! Your message is ready in your email client.'
      )
      setContactFormStatusType('success')
      setContactFormValues({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 600)
  }

  return (
    <div className={`page-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className='bg-text-art' aria-hidden='true'>
        {backgroundTextArtWords.map((word, index) => {
          // 4% -> 76% keeps the staircase visible from top-left to bottom-right.
          const progress =
            index / Math.max(backgroundTextArtWords.length - 1, 1)
          const positionPercent = 4 + progress * 72
          const shimmerDuration = (5.6 + ((index * 29) % 11) * 0.52).toFixed(2)
          const shimmerDelay = (((index * 47) % 23) * 0.31).toFixed(2)
          const shimmerHue = (index * 73 + 47) % 360

          return (
            <span
              key={`${word}-${index}`}
              className='bg-text-art-word'
              style={{
                left: `${positionPercent}%`,
                top: `${positionPercent}%`,
                color: `hsl(${shimmerHue} 84% 60% / ${
                  isDarkMode ? 0.44 : 0.3
                })`,
                animationDelay: `${index * 0.7}s, ${shimmerDelay}s`,
                animationDuration: `10s, ${shimmerDuration}s`
              }}
            >
              {word}
            </span>
          )
        })}
      </div>
      {/* Header */}
      <header className='site-header'>
        <div className='header-inner'>
          <span className='site-logo'>Samuel Schill</span>
          <nav aria-label='Main navigation'>
            <ul className='nav-list'>
              <li>
                <button
                  type='button'
                  className='theme-toggle'
                  onClick={() => setIsDarkMode(previousValue => !previousValue)}
                  aria-label='Toggle dark mode'
                  aria-pressed={isDarkMode}
                >
                  {isDarkMode ? 'Light' : 'Dark'}
                </button>
              </li>
              {navLinks.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className='nav-link'
                    onClick={event => handleNavClick(event, link.toLowerCase())}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className='hero-section'>
        <div className='hero-avatar' aria-hidden='true'>
          <Image
            src={profilepic}
            alt='Samuel Schill'
            className='rounded-full'
          />
        </div>
        <h1 className='hero-heading'>
          <span className='waving-hand'>👋</span>Hi, I&apos;m{' '}
          <span className='hero-name'>Sam</span>
        </h1>
        <p className='hero-tagline'>
          Hey there! I&apos;m a passionate developer who loves building web
          applications with a focus on UI and UX. I love what I do and I&apos;m
          always eager to learn new technologies and improve my skills. Feel
          free to check out my projects below or get in touch!
        </p>
        <button
          type='button'
          className='hero-cta'
          onClick={handleContactClick}
          aria-label='Show social contact links'
          style={{ cursor: 'pointer' }}
        >
          Contact Me
        </button>
      </section>

      {/* About */}
      <section id='about' className='about-section'>
        <div className='about-inner'>
          <div className='about-photo-wrapper'>
            <Image
              src={profilepic}
              alt='Samuel Schill portrait'
              className='about-photo'
            />
          </div>
          <div className='about-content'>
            <h2 className='about-heading'>About Me</h2>
            <p className='about-bio'>
              I am a web developer focused on building clean, responsive user
              interfaces, and practical web apps. I enjoy learning new tools,
              and turning ideas into polished experiences.
            </p>
            <ul className='about-skills' aria-label='Skills'>
              {aboutSkills.map(skill => (
                <li key={skill.label} className='about-skill-item'>
                  <i
                    className={`about-skill-icon ${skill.iconClassName}`}
                    aria-hidden='true'
                  ></i>
                  <span>{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id='projects' className='projects-section'>
        <div className='projects-inner'>
          <h2 className='projects-heading'>Projects</h2>
          <div className='projects-grid'>
            {projects.map(project => (
              <article key={project.title} className='project-card'>
                <div
                  className={`project-image ${
                    imagesLoaded.has(project.title)
                      ? 'project-image-loaded'
                      : 'project-image-loading'
                  }`}
                  aria-hidden='true'
                >
                  {typeof project.screenshot === 'string' ? (
                    project.screenshot && (
                      <Image
                        src={project.screenshot}
                        alt={project.title}
                        onLoad={() => handleImageLoad(project.title)}
                      />
                    )
                  ) : (
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      onLoad={() => handleImageLoad(project.title)}
                    />
                  )}
                  {!imagesLoaded.has(project.title) && (
                    <div
                      className='project-image-skeleton'
                      aria-hidden='true'
                    ></div>
                  )}
                </div>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <ul
                  className='project-tech-list'
                  aria-label='Technologies used'
                >
                  {project.tech.map(tag => (
                    <li key={tag} className='project-tech-tag'>
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-link'
                  aria-label={`View ${project.title}`}
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <div className='footer-inner'>
          <section className='contact-form-section' aria-label='contact-form'>
            <h2 className='contact-form-heading'>Contact Me</h2>
            <form
              className='contact-form'
              onSubmit={handleContactFormSubmit}
              noValidate
            >
              <label className='contact-form-label' htmlFor='contact-name'>
                Name
              </label>
              <input
                id='contact-name'
                name='name'
                type='text'
                className='contact-form-input'
                value={contactFormValues.name}
                onChange={handleContactFormChange}
                aria-invalid={Boolean(contactFormErrors.name)}
                aria-describedby={
                  contactFormErrors.name ? 'contact-name-error' : undefined
                }
              />
              {contactFormErrors.name && (
                <p id='contact-name-error' className='contact-form-error'>
                  {contactFormErrors.name}
                </p>
              )}

              <label className='contact-form-label' htmlFor='contact-email'>
                Email
              </label>
              <input
                id='contact-email'
                name='email'
                type='email'
                className='contact-form-input'
                value={contactFormValues.email}
                onChange={handleContactFormChange}
                aria-invalid={Boolean(contactFormErrors.email)}
                aria-describedby={
                  contactFormErrors.email ? 'contact-email-error' : undefined
                }
              />
              {contactFormErrors.email && (
                <p id='contact-email-error' className='contact-form-error'>
                  {contactFormErrors.email}
                </p>
              )}

              <label className='contact-form-label' htmlFor='contact-message'>
                Message
              </label>
              <textarea
                id='contact-message'
                name='message'
                className='contact-form-textarea'
                rows={4}
                value={contactFormValues.message}
                onChange={handleContactFormChange}
                aria-invalid={Boolean(contactFormErrors.message)}
                aria-describedby={
                  contactFormErrors.message
                    ? 'contact-message-error'
                    : undefined
                }
              />
              {contactFormErrors.message && (
                <p id='contact-message-error' className='contact-form-error'>
                  {contactFormErrors.message}
                </p>
              )}

              <button
                type='submit'
                className='contact-form-submit'
                disabled={!isContactFormValid || isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className='loading-spinner' aria-hidden='true'></span>
                    Sending...
                  </>
                ) : (
                  'Send'
                )}
              </button>
              {contactFormStatus && (
                <p
                  className={`contact-form-status ${
                    contactFormStatusType === 'success'
                      ? 'contact-form-status-success'
                      : 'contact-form-status-error'
                  }`}
                  role='status'
                >
                  {contactFormStatus}
                </p>
              )}
            </form>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className='site-footer'>
        <div className='footer-inner'>
          <div className='footer-meta'>
            <p className='footer-copy'>
              &copy; {new Date().getFullYear()} Samuel Schill. All rights
              reserved.
            </p>
            <nav aria-label='Social links'>
              <ul className='social-list'>
                {socialLinks.map((socialLink, index) => (
                  <li
                    key={socialLink.label}
                    className={`social-item ${
                      activeSocialIndex === index ? 'social-item-active' : ''
                    }`}
                  >
                    <a
                      href={socialLink.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='social-link'
                      aria-label={socialLink.ariaLabel}
                    >
                      {socialLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              type='button'
              className='back-to-top-button'
              onClick={handleBackToTopClick}
              aria-label='Back to top'
            >
              <span className='back-to-top-icon' aria-hidden='true'>
                ↑
              </span>
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
