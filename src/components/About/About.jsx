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
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: undefined,
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section"
    >
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
          <h2>
            Designer.
            <br />
            Builder.
            <br />
            Problem solver.
          </h2>

          <div className="about-copy">
            <p>
              I work across design, product, and engineering, bringing ideas
              to life through digital experiences that feel considered,
              intuitive, and purposeful.
            </p>

            <p>
              My approach starts with understanding the problem before
              thinking about the solution. I pay attention to how things look,
              how they work, and how they make people feel. From the smallest
              interaction to the wider product experience, I believe every
              detail should have a reason to exist.
            </p>

            <p>
              I’m drawn to simple ideas, well-made systems, and products that
              remain useful long after the first impression. I enjoy exploring
              the space between creativity and logic, turning complex
              requirements into experiences that feel clear, natural, and
              easy to use.
            </p>

            <p>
              For me, good design goes beyond appearance. It creates clarity.
              Good engineering goes beyond functionality. It creates
              reliability. Good product thinking connects the two, ensuring
              that what gets built serves a real purpose.
            </p>

            <p>
              I enjoy being involved throughout the process: exploring ideas,
              shaping the experience, designing interfaces, building
              products, and refining the details until everything feels
              right. Moving between these disciplines allows me to think
              about the complete experience rather than just one part of it.
            </p>

            <p>
              Whether I’m working on a financial platform, an AI-powered
              experience, or a completely new idea, my goal remains the same:
              to make something useful, distinctive, and built with
              intention.
            </p>

            <p className="about-closing">
              I care about what we build, why it matters, and how well we
              build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
