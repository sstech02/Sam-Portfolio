import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { NavBar } from './components/NavBar'
import { ProjectsSection } from './components/ProjectsSection'
import { SiteFooter } from './components/SiteFooter'
import { StackSection } from './components/StackSection'
import { TimelineSection } from './components/TimelineSection'
import { projects } from './data/portfolio'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const storedTheme = window.localStorage.getItem('theme')
    return storedTheme === 'dark' ? 'dark' : 'light'
  })
  const [activeFilter, setActiveFilter] = useState('all')
  const [showFormMessage, setShowFormMessage] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => {
          if (project.cat === activeFilter) {
            return true
          }

          return project.tags.some(
            (tag) => tag.toLowerCase() === activeFilter.toLowerCase(),
          )
        })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowFormMessage(true)
    event.currentTarget.reset()
    window.setTimeout(() => setShowFormMessage(false), 3500)
  }

  return (
    <>
      <div className="bg-grid" />

      <NavBar onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        projects={filteredProjects}
      />
      <TimelineSection />
      <ContactSection showFormMessage={showFormMessage} onSubmit={handleSubmit} />
      <SiteFooter />
    </>
  )
}

export default App
