import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import TechMarquee  from './components/TechMarquee'
import Experience   from './components/Experience'
import Projects     from './components/Projects'
import Skills       from './components/Skills'
import Education    from './components/Education'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import CaseStudy    from './pages/CaseStudy'

function Home() {
  return (
    <div className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:slug" element={<CaseStudy />} />
    </Routes>
  )
}

export default App
