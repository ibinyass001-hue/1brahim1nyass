import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Philosophy from './components/Philosophy/Philosophy'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import './experience.css'

function App() {
  return (
    <main className="site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar />
      <Hero />
      <Philosophy />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
