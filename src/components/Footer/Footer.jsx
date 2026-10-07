import { ArrowUp } from 'lucide-react'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <strong>IBRAHIM INYASS</strong>
          <span>PRODUCT DESIGNER · BUILDER</span>
        </div>
        <button className="footer-top" type="button" onClick={scrollToTop}>
          BACK TO TOP
          <ArrowUp size={13} strokeWidth={1.4} />
        </button>
      </div>
      <div className="footer-bottom">
        <span>© 2026 IBRAHIM INYASS</span>
        <span>NIGERIA</span>
      </div>
    </footer>
  )
}

export default Footer
