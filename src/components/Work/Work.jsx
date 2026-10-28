import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Work.css'

import pay4loImage from '../../assets/pay4lo.png'
import nexaImage from '../../assets/nexa.png'
import lifixImage from '../../assets/lifix.png'
import riziqImage from '../../assets/riziq.png'
import novaImage from '../../assets/nova.png'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    number: '01',
    name: 'Pay4LO',
    category: 'FINTECH',
    description:
      'A connected financial platform for payments, money management, and everyday digital services.',
    image: pay4loImage,
    url: 'https://fourontpay.onrender.com',
  },
  {
    number: '02',
    name: 'Nova',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'A conversational AI experience built to help people explore ideas and get things done.',
    image: novaImage,
    url: 'https://nova-ai-pg8q.onrender.com/',
  },
  {
    number: '03',
    name: 'Nexa',
    category: 'EDTECH',
    description:
      'A digital experience bringing student life, learning, and useful resources together.',
    image: nexaImage,
    url: 'https://nexa-app-if5e.onrender.com',
  },
  {
    number: '04',
    name: 'LiFix',
    category: 'SERVICES',
    description:
      'A service-focused platform designed to make everyday needs easier to discover and manage.',
    image: lifixImage,
    url: 'https://lifix-app.onrender.com',
  },
  {
    number: '05',
    name: 'RizIQ',
    category: 'INTERACTIVE LEARNING',
    description:
      'An engaging learning experience combining knowledge, challenges, and competition.',
    image: riziqImage,
    url: 'https://riziq-app.onrender.com',
  },
]

function Work() {
  const workRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.work-heading > *', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-heading',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.project-item', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.work-grid',
          start: 'top 85%',
          once: true,
        },
      })
    }, workRef)

    return () => context.revert()
  }, [])

  return (
    <section className="work-section" id="work" ref={workRef}>
      <div className="work-container">
        <header className="work-heading">
          <p className="work-kicker">SELECTED WORK / 2024—2026</p>

          <div className="work-heading-row">
            <h2>
              Things I’ve
              <br />
              <span>built.</span>
            </h2>

            <p className="work-intro">
              A selection of digital products shaped by curiosity,
              thoughtful design, and the desire to make useful things
              work beautifully.
            </p>
          </div>

          <div className="work-heading-bottom">
            <span>INDEPENDENT PROJECTS</span>
            <span>05 PROJECTS</span>
          </div>
        </header>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <a
                className="project-image"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                />

                <span className="project-open" aria-hidden="true">
                  <ArrowUpRight size={19} strokeWidth={1.6} />
                </span>
              </a>

              <div className="project-details">
                <div className="project-overline">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-title-row">
                  <h3>{project.name}</h3>

                  <a
                    className="project-visit"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} website`}
                  >
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </a>
                </div>

                <p>{project.description}</p>

                <a
                  className="project-text-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore project
                  <ArrowUpRight size={15} strokeWidth={1.6} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <footer className="work-footer">
          <p>GOOD THINGS HAPPEN WHEN THE RIGHT MINDS CONNECT.</p>

          <a href="#contact">
            Have an idea worth building? Let’s make it real.
            <ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
        </footer>
      </div>
    </section>
  )
}

export default Work
