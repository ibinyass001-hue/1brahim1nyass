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

    const context = gsap.context(() => {
      gsap.timeline({
        defaults: { ease: 'power3.out' },
      })
        .from('.hero-eyebrow', {
          y: 16,
          opacity: 0,
          duration: 0.55,
        })
        .from('.hero-title-line', {
          y: 35,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
        }, '-=0.2')
        .from('.hero-description, .hero-actions, .hero-portrait, .hero-bottom', {
          y: 14,
          opacity: 0,
          duration: 0.55,
          stagger: 0.08,
        }, '-=0.3')
    }, hero)

    return () => context.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-object" aria-hidden="true" />

      <div className="hero-main">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-status-dot" />
            PRODUCT DESIGNER <span>·</span> BUILDER
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">I design and build</span>
            <span className="hero-title-line hero-title-accent">
              digital products<span className="hero-period">.</span>
            </span>
          </h1>

          <p className="hero-description">
            Thoughtful design. Useful technology. Digital experiences
            built with purpose and attention to detail.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#work">
              Explore my work
              <ArrowUpRight size={17} strokeWidth={1.7} />
            </a>

            <a className="secondary-action" href="#contact">
              Let’s talk
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-frame">
            <img
              className="hero-portrait-image"
              src={heroImage}
              alt="Portrait of Ibrahim Inyass"
              fetchPriority="high"
            />
          </div>
          <span className="hero-portrait-caption">DESIGN · PRODUCT · ENGINEERING</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span className="hero-location">NIGERIA · 2026</span>
        <a className="hero-scroll" href="#work">
          SCROLL TO EXPLORE
          <ArrowDown size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  )
}

export default Hero
