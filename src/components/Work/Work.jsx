import { useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Leaf,
  Trophy,
  Wallet,
  X,
} from 'lucide-react'
import gsap from 'gsap'
import './Work.css'

const disciplines = [
  'DESIGN',
  'PRODUCT',
  'BUILD',
  'ENGINEERING',
  'SYSTEMS',
  'IDEAS',
]

const projects = [
  {
    name: 'Pay4LO',
    type: 'Fintech',
    url: 'https://fourontpay.onrender.com',
    icon: Wallet,
    slug: 'pay4lo',
  },
  {
    name: 'Nexa',
    type: 'Student Platform',
    url: 'https://nexa-app-if5e.onrender.com',
    icon: GraduationCap,
    slug: 'nexa',
  },
  {
    name: 'LiFix',
    type: 'Lifestyle Platform',
    url: 'https://lifix-app.onrender.com',
    icon: Leaf,
    slug: 'lifix',
  },
  {
    name: 'RizIQ',
    type: 'Quiz Platform',
    url: 'https://riziq-app.onrender.com',
    icon: Trophy,
    slug: 'riziq',
  },
  {
    name: 'Nova',
    type: 'AI Assistant',
    url: '#contact',
    icon: BrainCircuit,
    slug: 'nova',
  },
]

function Work() {
  const [open, setOpen] = useState(false)
  const workRef = useRef(null)
  const panelRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const labels = gsap.utils.toArray('.orbit-label')
      const radius = 155
      const state = { angle: 0 }

      const renderOrbit = () => {
        labels.forEach((label, index) => {
          const angle =
            state.angle + index * (Math.PI * 2 / labels.length)
          const x = Math.sin(angle) * radius
          const y = -Math.cos(angle) * radius
          const depth = (Math.cos(angle) + 1) / 2

          gsap.set(label, {
            x,
            y,
            scale: 0.82 + depth * 0.18,
            opacity: 0.18 + depth * 0.55,
            zIndex: Math.round(depth * 10),
          })
        })

        gsap.set('.orbit-light', {
          x: Math.sin(state.angle) * 170,
          y: -Math.cos(state.angle) * 170,
          opacity: 0.3 + ((Math.cos(state.angle) + 1) / 2) * 0.55,
        })
      }

      renderOrbit()

      const orbit = gsap.to(state, {
        angle: Math.PI * 2,
        duration: 42,
        ease: 'none',
        repeat: -1,
        onUpdate: renderOrbit,
      })

      gsap.from('.orbit-center', {
        scale: 0.94,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      })

      gsap.to('.orbit-center', {
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,.07), 0 25px 80px rgba(255,255,255,.06)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      return () => orbit.kill()
    }, workRef)

    return () => context.revert()
  }, [])

  useLayoutEffect(() => {
    if (!open || !panelRef.current) return

    const context = gsap.context(() => {
      const lid = panelRef.current.querySelector('.glass-lid')
      const cards = panelRef.current.querySelectorAll('.work-modal-card')

      gsap.fromTo(
        '.work-panel',
        { y: 18, scale: 0.97, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
        }
      )

      gsap.fromTo(
        lid,
        { rotationX: 0 },
        {
          rotationX: -68,
          duration: 0.9,
          delay: 0.25,
          ease: 'power3.inOut',
          transformOrigin: 'top center',
        }
      )

      gsap.fromTo(
        cards,
        {
          y: -280,
          rotationX: -45,
          rotationZ: (index) => index % 2 === 0 ? -16 : 18,
          scale: 0.72,
          opacity: 0,
        },
        {
          y: 0,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          duration: 1.7,
          stagger: 0.28,
          delay: 0.55,
          ease: 'bounce.out',
          clearProps: 'transform',
        }
      )
    }, panelRef)

    return () => context.revert()
  }, [open])

  return (
    <section ref={workRef} id="work" className="work-section">
      <div className="work-layout">
        <div className="work-orbit">
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />

          <div className="orbit-labels">
            {disciplines.map((discipline) => (
              <span key={discipline} className="orbit-label">
                {discipline}
              </span>
            ))}
            <i className="orbit-light" />
          </div>

          <div className="orbit-center">
            <span>HOW I</span>
            <strong>WORK</strong>
          </div>
        </div>

        <div className="work-content">
          <span className="work-kicker">01 — SELECTED WORK</span>

          <div className="work-heading-row">
            <h2>PROJECTS.</h2>
            <button
              className="view-all"
              type="button"
              aria-expanded={open}
              aria-controls="project-glass-case"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Close case' : 'View all'}
              {open
                ? <X size={13} strokeWidth={1.4} />
                : <ArrowUpRight size={13} strokeWidth={1.4} />}
            </button>
          </div>

          {open && (
            <div
              ref={panelRef}
              id="project-glass-case"
              className="work-panel"
            >
              <div className="work-panel-head">
                <div>
                  <span className="case-eyebrow">COLLECTION / 001</span>
                  <strong>MY PROJECTS</strong>
                </div>
                <button
                  className="work-close"
                  type="button"
                  aria-label="Close projects"
                  onClick={() => setOpen(false)}
                >
                  <X size={15} strokeWidth={1.4} />
                </button>
              </div>

              <div className="glass-case">
                <div className="glass-lid">
                  <span>SELECTED DIGITAL WORKS</span>
                  <i />
                </div>

                <div className="glass-chamber">
                  <div className="glass-reflection" />

                  <div className="work-modal-grid">
                    {projects.map((project, index) => {
                      const ProjectIcon = project.icon

                      return (
                        <a
                          key={project.name}
                          className={`work-modal-card project-card--${project.slug}`}
                          href={project.url}
                          target={
                            project.url.startsWith('http')
                              ? '_blank'
                              : undefined
                          }
                          rel={
                            project.url.startsWith('http')
                              ? 'noreferrer'
                              : undefined
                          }
                          aria-label={`View ${project.name} — ${project.type}`}
                        >
                          <span className="project-index">
                            0{index + 1}
                          </span>
                          <ArrowUpRight
                            className="project-arrow"
                            size={13}
                            strokeWidth={1.4}
                          />
                          <ProjectIcon
                            className="project-icon"
                            size={25}
                            strokeWidth={1.5}
                          />
                          <div className="project-card-content">
                            <strong>{project.name}</strong>
                            <small>{project.type}</small>
                          </div>
                          <span className="project-card-shine" />
                        </a>
                      )
                    })}
                  </div>

                  <div className="glass-floor" />
                </div>

                <div className="glass-base">
                  <span>II</span>
                  <span>FIVE PROJECTS · ONE VISION</span>
                  <span>2026</span>
                </div>
              </div>

              <p className="case-caption">
                A collection of things imagined, designed and built.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Work
