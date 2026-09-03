import { Monitor, Server, PenTool, Sparkles, Globe, Layers } from 'lucide-react'
import { skills } from '../data/portfolio'

const iconMap = {
  monitor:   Monitor,
  server:    Server,
  'pen-tool': PenTool,
  sparkles:  Sparkles,
  globe:     Globe,
  layers:    Layers,
}

const groupConfig = {
  'Generative AI':        { color: '#6366f1', bg: '#eef2ff', border: '#c7d2fe' },
  'Web Localisation':     { color: '#10b981', bg: '#ecfdf5', border: '#6ee7b7' },
  'Localisation DTP':     { color: '#f59e0b', bg: '#fffbeb', border: '#fcd34d' },
  'Frontend Development': { color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' },
  'Backend Development':  { color: '#8b5cf6', bg: '#f5f3ff', border: '#c4b5fd' },
  'Design & Tools':       { color: '#ec4899', bg: '#fdf2f8', border: '#f9a8d4' },
}

const levelConfig = {
  'Expert':             { color: '#16a34a', bg: '#dcfce7' },
  'Proficient':         { color: '#0891b2', bg: '#ecfeff' },
  'Learning & Building':{ color: '#7c3aed', bg: '#ede9fe' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1.5" style={{ color: 'var(--color-accent)' }}>
            Technical Profile
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
            Core Skills & GenAI Focus
          </h2>
          <p className="text-sm mt-1.5" style={{ color: 'var(--color-text-muted)' }}>
            A blend of product thinking, frontend execution, multilingual delivery, and emerging AI capabilities
          </p>
        </div>

        {/* Skills grid — 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map(({ group, icon, level, items }) => {
            const Icon = iconMap[icon] ?? Sparkles
            const cfg  = groupConfig[group]  ?? { color: '#0891b2', bg: '#ecfeff', border: '#67e8f9' }
            const lvl  = levelConfig[level]  ?? { color: '#0891b2', bg: '#ecfeff' }

            return (
              <div
                key={group}
                className="flex flex-col gap-4 p-5 rounded-2xl border transition-all duration-200"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = cfg.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                      style={{ background: cfg.bg, color: cfg.color }}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                        {group}
                      </h3>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1 inline-block"
                        style={{ background: lvl.bg, color: lvl.color }}
                      >
                        {level}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-bold px-2 py-1 rounded-lg flex-shrink-0"
                    style={{ background: cfg.bg, color: cfg.color }}
                  >
                    {items.length}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px" style={{ background: 'var(--color-border)' }} />

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg border"
                      style={{
                        background: 'var(--color-tag-bg)',
                        color: 'var(--color-tag-text)',
                        borderColor: 'var(--color-tag-border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom summary strip */}
        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: 'AI & Automation', value: 'GenAI' },
            { label: 'Skill Categories', value: skills.length },
            { label: 'Expert Areas', value: skills.filter(s => s.level === 'Expert').length },
            { label: 'Years Experience', value: '6+' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-4 px-3 rounded-xl border text-center"
              style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
            >
              <span className="text-xl font-extrabold" style={{ color: 'var(--color-accent)' }}>{value}</span>
              <span className="text-[11px] font-medium" style={{ color: 'var(--color-text-muted)' }}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
