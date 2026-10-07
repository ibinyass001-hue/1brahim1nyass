import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import './About.css'

function About() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.about-card', {
        y: 24,
        opacity: 0,
        duration: .8,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="about-label">
        <span>02</span>
        <span>ABOUT</span>
      </div>
      <div className="about-card">
        <div className="about-card-head">
          <span>IBRAHIM INYASS</span>
          <span>DESIGN · PRODUCT · ENGINEERING</span>
        </div>
        <div className="about-card-body">
          <h2>Designer.<br />Builder.</h2>
          <p>I work across design, product, and engineering, building digital experiences with a strong attention to detail. I’m drawn to simple ideas, well-made systems, and products that remain useful long after the first impression.</p>
        </div>
      </div>
    </section>
  )
}

export default About
