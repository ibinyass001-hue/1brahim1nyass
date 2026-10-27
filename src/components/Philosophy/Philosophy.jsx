import { useLayoutEffect, useRef } from 'react'
import { ArrowDownRight } from 'lucide-react'
import gsap from 'gsap'
import './Philosophy.css'

const principles = [
  {
    number: '01',
    title: 'Understand before building',
    description:
      'Every meaningful solution begins with the right questions. I take time to understand the people, the problem, and the outcome that actually matters before deciding what to build.',
  },
  {
    number: '02',
    title: 'Design with intention',
    description:
      'Good design is more than appearance. Each interaction, decision, and detail should have a reason to exist, making the experience clearer, more considered, and easier to use.',
  },
  {
    number: '03',
    title: 'Build for real life',
    description:
      'Ideas only create value when they work beyond the concept. I aim to build practical, accessible, and dependable digital experiences that respond to real needs and everyday constraints.',
  },
  {
    number: '04',
    title: 'Think beyond the screen',
    description:
      'Technology does not operate in isolation. My experience across education and business operations helps me consider the people, processes, and wider goals that shape whether a solution succeeds.',
  },
  {
    number: '05',
    title: 'Improve through learning',
    description:
      'Strong work is rarely finished in one pass. I value curiosity, honest feedback, and continuous refinement, using each project as an opportunity to improve both the outcome and the way I work.',
  },
]

function Philosophy() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.7,
        },
      })

      timeline
        .from('.philosophy-kicker', {
          opacity: 0,
          y: 12,
        })
        .from(
          '.philosophy-heading',
          {
            opacity: 0,
            y: 24,
          },
          '-=0.4'
        )
        .from(
          '.philosophy-copy',
          {
            opacity: 0,
            y: 16,
          },
          '-=0.35'
        )
        .from(
          '.philosophy-principle',
          {
            opacity: 0,
            y: 14,
            stagger: 0.1,
          },
          '-=0.25'
        )
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="philosophy-section"
      aria-labelledby="philosophy-heading"
    >
      <div className="philosophy-inner">
        <div className="philosophy-topline">
          <span className="philosophy-kicker">
            <span className="philosophy-kicker-dot" />
            02 / MY APPROACH
          </span>

          <span className="philosophy-location">
            A PRACTICAL MINDSET
            <span>ABUJA, NIGERIA</span>
          </span>
        </div>

        <div className="philosophy-main">
          <div className="philosophy-aside">
            <span className="philosophy-aside-line" />
            <span>WHAT GUIDES THE WORK</span>
          </div>

          <div className="philosophy-content">
            <h2
              id="philosophy-heading"
              className="philosophy-heading"
            >
              Technology matters when it
              <span> makes life better.</span>
            </h2>

            <div className="philosophy-introduction">
              <p className="philosophy-copy">
                I believe the best digital experiences are shaped by more
                than code. They come from understanding people, asking better
                questions, and recognising the practical challenges behind an
                idea. Technology becomes meaningful when it makes something
                clearer, simpler, more accessible, or more effective.
              </p>

              <p className="philosophy-copy philosophy-copy-secondary">
                My perspective brings together software development,
                problem-solving, education, and business operations. These
                experiences have taught me to look beyond the immediate task
                and consider the wider context: who a solution serves, how it
                will be used, and what lasting value it can create. I approach
                each project with curiosity, sound judgement, and a commitment
                to making the finished work genuinely useful.
              </p>
            </div>

            <div className="philosophy-principles">
              {principles.map((principle) => (
                <div
                  className="philosophy-principle"
                  key={principle.number}
                >
                  <span className="philosophy-principle-number">
                    {principle.number}
                  </span>

                  <div className="philosophy-principle-content">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="philosophy-footer">
          <span>
            THOUGHTFUL BY DESIGN. PRACTICAL BY NATURE.
          </span>

          <a href="#work">
            CONTINUE TO SELECTED WORK
            <ArrowDownRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
