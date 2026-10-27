import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import heroImage from '../../assets/hero-new.png'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const hero = heroRef.current

    if (!hero) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      timeline
        .from('.hero-portrait-image', {
          opacity: 0,
          y: 18,
          duration: 0.8,
        })
        .from(
          '.hero-eyebrow',
          {
            opacity: 0,
            y: 12,
            duration: 0.4,
          },
          '-=0.5'
        )
        .from(
          '.hero-title-line',
          {
            opacity: 0,
            y: 22,
            duration: 0.6,
            stagger: 0.09,
          },
          '-=0.2'
        )
        .from(
          '.hero-description, .hero-actions, .hero-capabilities, .hero-bottom',
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
            stagger: 0.06,
          },
          '-=0.25'
        )
    }, hero)

    return () => context.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-main">
        <div className="hero-portrait">
          <div className="hero-portrait-frame">
            <img
              className="hero-portrait-image"
              src={heroImage}
              alt="Portrait of Muhammed Ibrahim Inyass"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-status-dot" />
            TECHNOLOGY · OPERATIONS · LEADERSHIP
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">Building useful</span>
            <span className="hero-title-line">digital experiences</span>
            <span className="hero-title-line hero-title-accent">
              with purpose<span className="hero-period">.</span>
            </span>
          </h1>

          <p className="hero-description">
            I’m Ibrahim Inyass, a technology-focused professional combining
            frontend development with experience in education, business
            operations, and team coordination. I enjoy turning ideas into
            practical digital experiences that solve real problems.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#work">
              Explore my work
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </a>

            <a className="secondary-action" href="#contact">
              Let’s connect
            </a>
          </div>

          <div className="hero-capabilities">
            <span className="hero-capabilities-label">AREAS OF EXPERIENCE</span>

            <div className="hero-capabilities-list">
              <span>Frontend development</span>
              <span>Business operations</span>
              <span>Education & leadership</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span className="hero-location">ABUJA, NIGERIA</span>
        <span className="hero-bottom-note">
          REACT · JAVASCRIPT · API INTEGRATION
        </span>
        <a className="hero-scroll" href="#work">
          EXPLORE PROJECTS
          <ArrowDown size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  )
}

export default Hero
