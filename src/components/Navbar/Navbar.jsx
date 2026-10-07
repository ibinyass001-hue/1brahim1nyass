import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <a className="brand" href="/" aria-label="Ibrahim Inyass home" onClick={closeMenu}>
        <span>IBRAHIM</span>
        <span>INYASS</span>
      </a>
      <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
      </button>
    </nav>
  )
}

export default Navbar
