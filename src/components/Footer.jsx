import { GitFork, Link, Mail, Zap } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

const socials = [
  { icon: GitFork, href: 'https://github.com',                    label: 'GitHub' },
  { icon: Link,    href: 'https://linkedin.com',                  label: 'LinkedIn' },
  { icon: Mail,    href: 'mailto:vermahemant3568@gmail.com',     label: 'Email' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <a href="#about" className="flex items-center gap-2.5 group">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg"
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
          </a>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-xs transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.background = 'var(--color-accent-bg)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.background = 'transparent' }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
        >
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
