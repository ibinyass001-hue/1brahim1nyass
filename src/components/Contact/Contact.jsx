import './Contact.css'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ibrahim-inyass-3206b3277/',
    icon: (
      <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM2.7 9h3.6v12H2.7V9Zm5.7 0h3.45v1.64h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52V21h-3.6v-5.95c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V21H8.4V9Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:ibinyass001@gmail.com',
    icon: (
      <svg className="email-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l9 5.85 9-5.85V7H3Zm18 10V9.78l-8.45 5.49a1 1 0 0 1-1.1 0L3 9.78V17h18Z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348061256601',
    icon: (
      <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a9.7 9.7 0 0 0-8.43 14.5L2 22l5.66-1.48A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.39-.23-3.36.88.9-3.27-.25-.4A8 8 0 1 1 12 19.7Zm4.39-5.92c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z"/>
      </svg>
    ),
  },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-label">
        <span>03</span>
        <span>CONTACT</span>
      </div>
      <div className="contact-card">
        <div className="contact-top">
          <span>GET IN TOUCH</span>
          <span className="contact-status"><i /> AVAILABLE FOR RELETED WORK</span>
        </div>
        <div className="contact-main">
          <h2>Have something<br />worth building?</h2>
          <p>I’m open to thoughtful collaborations, product work, and interesting ideas.</p>
        </div>
        <div className="contact-bottom">
          <div className="contact-links">
            {links.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label === 'LinkedIn' || label === 'WhatsApp' ? '_blank' : undefined}
                rel={label === 'LinkedIn' || label === 'WhatsApp' ? 'noreferrer' : undefined}
              >
                {icon}
              </a>
            ))}
          </div>
          <span className="contact-location">NIGERIA · 2026</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
