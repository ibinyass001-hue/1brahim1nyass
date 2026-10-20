import { useLayoutEffect, useRef } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Leaf,
  Trophy,
  Wallet,
} from 'lucide-react'
import gsap from 'gsap'
import './Work.css'

const projects = [
  {
    name: 'Pay4LO',
    type: 'Fintech',
    description: 'Everyday payments, travel, and smarter money experiences.',
    url: 'https://fourontpay.onrender.com',
    icon: Wallet,
    slug: 'pay4lo',
    number: '01',
    discipline: 'FINANCIAL TECHNOLOGY',
  },
  {
    name: 'Nexa',
    type: 'Student Platform',
    description: 'A connected digital experience built around student life.',
    url: 'https://nexa-app-if5e.onrender.com',
    icon: GraduationCap,
    slug: 'nexa',
    number: '02',
    discipline: 'EDUCATION',
  },
  {
    name: 'LiFix',
    type: 'Lifestyle Platform',
    description: 'Convenient access to everyday services in one place.',
    url: 'https://lifix-app.onrender.com',
    icon: Leaf,
    slug: 'lifix',
    number: '03',
    discipline: 'LIFESTYLE',
  },
  {
    name: 'RizIQ',
    type: 'Quiz Platform',
    description: 'A quiz and competition experience designed for learning.',
    url: 'https://riziq-app.onrender.com',
    icon: Trophy,
    slug: 'riziq',
    number: '04',
    discipline: 'LEARNING & PLAY',
  },
  {
    name: 'Nova',
    type: 'AI Assistant',
    description: 'A conversational assistant concept for more intuitive workflows.',
    url: '#contact',
    icon: BrainCircuit,
    slug: 'nova',
    number: '05',
    discipline: 'ARTIFICIAL INTELLIGENCE',
  },
]

function Work() {
  const workRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.work-kicker, .work-intro', {
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: undefined,
        immediateRender: false,
      })

      gsap.from('.project-tile', {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.12,
        clearProps: 'transform',
      })
    }, workRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={workRef} id="work" className="work-section">
      <div className="work-inner">
        <div className="work-heading">
          <div className="work-intro">
            <span className="work-kicker">
              <span className="work-kicker-dot" />
              01 / SELECTED WORK
            </span>
            <h2>Things I've <span>built.</span></h2>
            <p>
              A selection of products and ideas shaped through design,
              engineering, and a lot of curiosity.
            </p>
          </div>

          <span className="work-count">
            <strong>05</strong>
            <span>PROJECTS<br />AND COUNTING</span>
          </span>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const ProjectIcon = project.icon
            const external = project.url.startsWith('http')

            return (
              <a
                key={project.slug}
                className={`project-tile project-tile--${project.slug}`}
                href={project.url}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                aria-label={`Explore ${project.name}, ${project.type}`}
              >
                <div className="project-tile-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-discipline">{project.discipline}</span>
                  <span className="project-open">
                    <ArrowUpRight size={17} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="project-art">
                  <div className="project-art-orbit project-art-orbit--outer" />
                  <div className="project-art-orbit project-art-orbit--inner" />
                  <div className="project-art-glow" />
                  <div className="project-art-icon">
                    <ProjectIcon size={38} strokeWidth={1.35} />
                  </div>
                  <span className="project-art-wordmark">{project.name}</span>
                </div>

                <div className="project-tile-bottom">
                  <div>
                    <h3>{project.name}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="work-footer">
          <span>DESIGNED WITH INTENTION. BUILT TO BE USEFUL.</span>
          <a href="#contact">
            Have a project in mind?
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work
