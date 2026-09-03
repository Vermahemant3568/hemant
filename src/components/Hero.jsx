import { useState, useEffect } from 'react'
import { GitFork, Link, Mail, Download, ArrowUpRight, MapPin, Briefcase, Star, TrendingUp, Users, Award } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import profileImg from '../assets/profile.jpeg'

const socials = [
  { icon: GitFork, href: 'https://github.com',                 label: 'GitHub' },
  { icon: Link,    href: 'https://linkedin.com',               label: 'LinkedIn' },
  { icon: Mail,    href: 'mailto:vermahemant3568@gmail.com',  label: 'Email' },
]

const ROLES = [
  'GenAI Developer',
  'Web Localisation Specialist',
  'Localisation DTP Specialist',
  'Frontend Developer',
]

const stats = [
  { icon: TrendingUp, value: '6+',   label: 'Years Experience' },
  { icon: Briefcase,  value: '50+',  label: 'Projects Delivered' },
  { icon: Users,      value: '4',    label: 'Core Skill Areas' },
  { icon: Award,      value: 'GenAI',label: 'Current Focus' },
]

function useTypewriter(words, typingSpeed = 75, deletingSpeed = 40, pauseMs = 1800) {
  const [display,  setDisplay]  = useState('')
  const [wordIdx,  setWordIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let t
    if (!deleting && display === current) {
      t = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && display === '') {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    } else {
      t = setTimeout(() => {
        setDisplay(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
      }, deleting ? deletingSpeed : typingSpeed)
    }
    return () => clearTimeout(t)
  }, [display, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return display
}

export default function Hero() {
  const typedRole = useTypewriter(ROLES)

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-[68px]"
      style={{ background: 'var(--color-bg-primary)' }}
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ════════════════════════════════
              TEXT COLUMN — always first on mobile
          ════════════════════════════════ */}
          <div className="flex flex-col gap-6 order-1">

            {/* Greeting + Name */}
            <div className="flex flex-col gap-1.5">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-accent)' }}
              >
                Hi, I'm
              </p>
              <h1
                className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Hemant{' '}
                <span style={{ color: 'var(--color-accent)' }}>Kumar</span>
              </h1>

              {/* Typewriter role */}
              <div className="flex items-center gap-1 mt-1 h-7">
                <span
                  className="text-base sm:text-lg font-semibold"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {typedRole}
                </span>
                <span
                  className="inline-block w-[2px] h-5 rounded-full animate-pulse"
                  style={{ background: 'var(--color-accent)' }}
                />
              </div>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-1.5 text-xs font-medium w-fit" style={{ color: 'var(--color-text-muted)' }}>
              <MapPin size={13} />
              Noida · Remote-Ready
            </div>

            {/* Divider */}
            <div className="w-12 h-0.5 rounded-full" style={{ background: 'var(--color-accent)' }} />

            {/* Bio */}
            <p className="text-sm sm:text-base leading-[1.8]" style={{ color: 'var(--color-text-secondary)' }}>
              I turn technical problem-solving into practical digital products. With{' '}
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>6+ years</span>{' '}
              of hands-on work in frontend engineering, multilingual localisation, and design operations, I’m now focused on building intelligent{' '}
              <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Generative AI</span>{' '}
              experiences that are useful, scalable, and user-centered.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'var(--color-accent)',
                  boxShadow: '0 4px 20px color-mix(in srgb, var(--color-accent) 35%, transparent)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
              >
                View My Work <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="mailto:vermahemant3568@gmail.com?subject=Project%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all duration-200 hover:scale-[1.02] active:scale-95"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text-primary)',
                  background: 'var(--color-bg-card)',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <Mail size={15} /> Let's Talk
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-2.5 pt-1">
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                Connect —
              </span>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    background: 'var(--color-bg-card)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-border-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                    e.currentTarget.style.background = 'var(--color-accent-bg)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-text-secondary)'
                    e.currentTarget.style.background = 'var(--color-bg-card)'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════
              IMAGE COLUMN — second on mobile
          ════════════════════════════════ */}
          <div className="flex flex-col items-center gap-6 order-2">

            {/* Profile image */}
            <div className="relative flex items-center justify-center w-full">

              {/* Soft background blob */}
              <div
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-20"
                style={{ background: 'var(--color-accent)' }}
              />

              {/* Dashed orbit ring */}
              <div
                className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full"
                style={{ border: '1.5px dashed var(--color-border-accent)', opacity: 0.5 }}
              />

              {/* Photo */}
              <div
                className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2"
                style={{
                  borderColor: 'var(--color-border)',
                  boxShadow: '0 24px 64px var(--color-shadow)',
                }}
              >
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 inset-x-0 h-16"
                  style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--color-accent) 15%, transparent), transparent)' }}
                />
              </div>

              {/* Floating — Years badge */}
              <div
                className="absolute bottom-2 -right-2 sm:-right-4 flex flex-col items-center justify-center w-[72px] h-[72px] rounded-2xl border shadow-xl"
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)',
                  boxShadow: '0 8px 32px var(--color-shadow)',
                }}
              >
                <span className="text-xl font-extrabold leading-none" style={{ color: 'var(--color-accent)' }}>6+</span>
                <span className="text-[9px] font-semibold text-center leading-tight mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Years{'\n'}Exp</span>
              </div>

              {/* Floating — Projects badge */}
              <div
                className="absolute top-2 -left-2 sm:-left-4 flex items-center gap-1.5 px-3 py-2 rounded-xl border shadow-xl"
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: 'var(--color-border)',
                  boxShadow: '0 8px 32px var(--color-shadow)',
                }}
              >
                <Star size={12} style={{ color: 'var(--color-accent)' }} fill="currentColor" />
                <span className="text-xs font-bold" style={{ color: 'var(--color-text-primary)' }}>50+ Projects</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                  style={{
                    background: 'var(--color-bg-card)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
                    style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                  >
                    <Icon size={14} />
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-base font-extrabold" style={{ color: 'var(--color-text-primary)' }}>{value}</span>
                    <span className="text-[10px] font-medium leading-tight" style={{ color: 'var(--color-text-muted)' }}>{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div
              className="w-full max-w-xs sm:max-w-sm px-5 py-4 rounded-2xl border"
              style={{ background: 'var(--color-accent-bg)', borderColor: 'var(--color-border-accent)' }}
            >
              <p
                className="text-xs sm:text-sm font-medium leading-relaxed text-center italic"
                style={{ color: 'var(--color-accent-text)' }}
              >
                "Turning 6+ years of web & production experience into AI-powered solutions."
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
