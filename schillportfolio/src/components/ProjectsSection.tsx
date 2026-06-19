import { useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { filters } from '../data/portfolio'
import type { Project } from '../types/portfolio'

type ProjectsSectionProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
  projects: Project[]
}

export function ProjectsSection({ activeFilter, onFilterChange, projects }: ProjectsSectionProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: 'performance',
      slides: {
        perView: 1.08,
        spacing: 20,
      },
      breakpoints: {
        '(min-width: 900px)': {
          slides: {
            perView: 2,
            spacing: 20,
          },
        },
      },
    },
    [
      (slider) => {
        let timeoutId: ReturnType<typeof setTimeout>
        let isHovered = false

        const clearNextTimeout = () => {
          clearTimeout(timeoutId)
        }

        const nextTimeout = () => {
          clearNextTimeout()
          if (isHovered) {
            return
          }

          timeoutId = setTimeout(() => {
            slider.prev()
          }, 2800)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseenter', () => {
            isHovered = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseleave', () => {
            isHovered = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on('dragStarted', () => {
          clearNextTimeout()
        })
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
        slider.on('destroyed', clearNextTimeout)
      },
    ],
  )

  useEffect(() => {
    if (!instanceRef.current) {
      return
    }

    instanceRef.current.update()
  }, [projects, activeFilter, instanceRef])

  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">03 /</span>
          <h2 className="sec-title">Selected work</h2>
          <span className="sec-sub">// 2025 — 2026</span>
        </div>
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`chip ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div ref={sliderRef} className="keen-slider projects-carousel">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="keen-slider__slide proj-card"
            >
              <div className="proj-thumb">
                <div className="proj-thumb-inner">
                  <img src={project.image} alt={project.title} className="proj-image" loading="lazy" />
                </div>
              </div>
              <div className="proj-body">
                <div className="proj-meta">
                  <span>{`PROJECT_${String(index + 1).padStart(2, '0')}`}</span>
                  <span className="sep">·</span>
                  <span className="yr">{project.year}</span>
                  <span className="sep">·</span>
                  <span>{project.cat.toUpperCase()}</span>
                </div>
                <div className="proj-title">
                  {project.title}
                  <span className="ext-arrow">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </div>
                <p className="proj-desc">{project.desc}</p>
                <div className="proj-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={`${project.id}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
