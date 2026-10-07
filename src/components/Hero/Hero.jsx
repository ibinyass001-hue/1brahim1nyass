import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-eyebrow', { y: 16, opacity: 0, duration: .7 })
        .from('.hero-title-line', { y: 70, opacity: 0, duration: 1, stagger: .08 }, '-=.45')
        .from('.hero-actions', { y: 14, opacity: 0, duration: .6 }, '-=.5')

      const move = (event) => {
        const x = (event.clientX / window.innerWidth - .5) * 2
        const y = (event.clientY / window.innerHeight - .5) * 2
        gsap.to('.hero-object', { x: x * 20, y: y * 14, duration: 1.5, ease: 'power3.out' })
      }

      window.addEventListener('pointermove', move)
      return () => window.removeEventListener('pointermove', move)
    }, heroRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero">
      <div className="hero-object" />
      <div className="hero-content">
        <p className="hero-eyebrow">PRODUCT DESIGNER · BUILDER</p>
        <h1 className="hero-title">
          <span className="hero-title-line">I design and build</span>
          <span className="hero-title-line">digital products.</span>
        </h1>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            Selected work
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </a>
          <a className="secondary-action" href="#contact">Contact</a>
        </div>
      </div>
      <span className="hero-scroll">SCROLL</span>
    </section>
  )
}

export default Hero
