import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import gsap from 'gsap'
import './Work.css'

const disciplines = ['DESIGN', 'PRODUCT', 'BUILD', 'ENGINEERING', 'SYSTEMS', 'IDEAS']

const projects = [
  { name: 'Pay4LO', type: 'Fintech', url: 'https://fourontpay.onrender.com' },
  { name: 'Nexa', type: 'Student Platform', url: 'https://nexa-app-if5e.onrender.com' },
  { name: 'LiFix', type: 'Lifestyle Platform', url: 'https://lifix-app.onrender.com' },
  { name: 'RizIQ', type: 'Quiz Platform', url: 'https://riziq-app.onrender.com' },
  { name: 'Nova', type: 'AI Assistant', url: '#contact' },
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
          const angle = state.angle + index * (Math.PI * 2 / labels.length)
          const x = Math.sin(angle) * radius
          const y = -Math.cos(angle) * radius
          const depth = (Math.cos(angle) + 1) / 2
          const scale = .82 + depth * .18
          const opacity = .18 + depth * .55

          gsap.set(label, {
            x,
            y,
            scale,
            opacity,
            zIndex: Math.round(depth * 10),
          })
        })

        const lightRadius = 170
        gsap.set('.orbit-light', {
          x: Math.sin(state.angle) * lightRadius,
          y: -Math.cos(state.angle) * lightRadius,
          opacity: .3 + ((Math.cos(state.angle) + 1) / 2) * .55,
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
        scale: .94,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      })

      gsap.to('.orbit-center', {
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.07), 0 25px 80px rgba(255,255,255,.06)',
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
    if (!open) return
    const context = gsap.context(() => {
      gsap.fromTo('.work-panel', { y: 16, scale: .97, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: .45, ease: 'power3.out' })
      gsap.fromTo('.work-modal-card', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: .35, stagger: .04, delay: .08, ease: 'power2.out' })
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
              <span key={discipline} className="orbit-label">{discipline}</span>
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
            <button className="view-all" type="button" onClick={() => setOpen(true)}>
              View all
              <ArrowUpRight size={13} strokeWidth={1.4} />
            </button>
          </div>
          {open && (
            <div ref={panelRef} className="work-panel">
              <div className="work-panel-head">
                <span>PROJECTS</span>
                <button className="work-close" type="button" aria-label="Close work" onClick={() => setOpen(false)}>
                  <X size={15} strokeWidth={1.4} />
                </button>
              </div>
              <div className="work-modal-grid">
                {projects.map((project, index) => (
                  <a
                    key={project.name}
                    className="work-modal-card"
                    href={project.url}
                    target={project.url.startsWith('http') ? '_blank' : undefined}
                    rel={project.url.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span>0{index + 1}</span>
                    <div>
                      <strong>{project.name}</strong>
                      <small>{project.type}</small>
                    </div>
                    <ArrowUpRight size={14} strokeWidth={1.3} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Work
