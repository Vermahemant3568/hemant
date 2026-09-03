import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const NAV = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [...new Set(NAV.map(n => n.id))]
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--color-bg-nav)' : 'var(--color-bg-primary)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: '1px solid var(--color-border)',
          boxShadow: scrolled ? '0 4px 24px var(--color-shadow)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <button onClick={() => scrollTo('about')} className="flex items-center gap-2.5 group">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 group-hover:scale-105"
              style={{ background: 'var(--color-accent)', color: '#fff' }}
            >
              <Zap size={15} strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-bold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                {personalInfo.name}
              </span>
              <span className="flex items-center gap-1 mt-0.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-medium tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                  Available for work
                </span>
              </span>
            </span>
          </button>

          {/* ── Desktop Nav ── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ label, id }) => {
              const isActive = active === id
              return (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                    style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}
                  >
                    {label}
                    <span
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                      style={{ width: isActive ? '60%' : '0%', background: 'var(--color-accent)' }}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95"
              style={{ background: 'var(--color-accent)', boxShadow: '0 2px 12px color-mix(in srgb, var(--color-accent) 35%, transparent)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
            >
              Let's Connect
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>

            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-colors"
              style={{ color: 'var(--color-text-secondary)', borderColor: 'var(--color-border)', background: 'var(--color-bg-card)' }}
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className="fixed top-0 right-0 z-50 h-full w-72 md:hidden flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          background: 'var(--color-bg-card)',
          borderLeft: '1px solid var(--color-border)',
          boxShadow: '-8px 0 32px var(--color-shadow)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex items-center justify-between px-5 h-[68px] border-b" style={{ borderColor: 'var(--color-border)' }}>
          <span className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ color: 'var(--color-text-muted)', background: 'var(--color-bg-secondary)' }}
          >
            <X size={16} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 pt-4 flex-1">
          {NAV.map(({ label, id }) => {
            const isActive = active === id
            return (
              <button
                key={label}
                onClick={() => scrollTo(id)}
                className="flex items-center w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150"
                style={isActive
                  ? { color: 'var(--color-accent)', background: 'var(--color-accent-bg)', borderLeft: '3px solid var(--color-accent)' }
                  : { color: 'var(--color-text-secondary)', borderLeft: '3px solid transparent' }
                }
              >
                {label}
              </button>
            )
          })}
        </nav>

        <div className="px-4 pb-8 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'var(--color-accent)' }}
          >
            Let's Connect <ArrowUpRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </>
  )
}
