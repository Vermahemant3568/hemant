import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Globe, PenTool, CheckCircle2, ArrowUpRight, FolderOpen } from 'lucide-react'
import { projects } from '../data/portfolio'

const FILTERS = ['All', 'GenAI', 'Localisation', 'DTP']

const CATEGORY_CONFIG = {
  GenAI:       { color: '#6366f1', bg: '#eef2ff', text: '#4338ca', bar: 'linear-gradient(to right, #6366f1, #818cf8)', Icon: Sparkles },
  Localisation:{ color: 'var(--color-accent)', bg: 'var(--color-accent-bg)', text: 'var(--color-accent-text)', bar: 'linear-gradient(to right, var(--color-accent), #06b6d4)', Icon: Globe },
  DTP:         { color: '#d97706', bg: '#fffbeb', text: '#92400e', bar: 'linear-gradient(to right, #f59e0b, #fbbf24)', Icon: PenTool },
}

function ProjectCard({ project, index }) {
  const cfg = CATEGORY_CONFIG[project.category] || CATEGORY_CONFIG.GenAI

  return (
    <div
      className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)', boxShadow: '0 1px 4px var(--color-shadow)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = cfg.color
        e.currentTarget.style.boxShadow = `0 12px 36px color-mix(in srgb, ${cfg.color} 14%, transparent)`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.boxShadow = '0 1px 4px var(--color-shadow)'
      }}
      onClick={() => {}} // handled by Link wrapper
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: cfg.bar }} />

      <div className="flex flex-col flex-1 p-6">

        {/* Card top row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cfg.bg, color: cfg.color }}>
            <cfg.Icon size={18} />
          </div>
          <span
            className="text-4xl font-black opacity-10 leading-none select-none"
            style={{ color: cfg.color }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Category badge */}
        <span
          className="self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
          style={{ background: cfg.bg, color: cfg.color }}
        >
          {project.category}
        </span>

        {/* Title + description */}
        <h3 className="text-base font-bold mb-2 leading-snug" style={{ color: 'var(--color-text-primary)' }}>{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{project.description}</p>

        {/* Achievement preview pills */}
        <div className="flex flex-col gap-1.5 mb-5">
          {project.achievements.slice(0, 2).map((a, i) => (
            <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
              <CheckCircle2 size={11} style={{ color: cfg.color, flexShrink: 0 }} />
              {a}
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.tools.slice(0, 4).map(tool => (
            <span key={tool} className="text-[11px] px-2 py-0.5 rounded border font-medium"
              style={{ background: 'var(--color-tag-bg)', color: 'var(--color-tag-text)', borderColor: 'var(--color-tag-border)' }}>
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-[11px] px-2 py-0.5 rounded border font-medium"
              style={{ background: 'var(--color-tag-bg)', color: 'var(--color-text-muted)', borderColor: 'var(--color-tag-border)' }}>
              +{project.tools.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          to={`/case-study/${project.slug}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold border transition-all duration-200"
          style={{ background: cfg.bg, color: cfg.color, borderColor: cfg.color + '40' }}
          onClick={e => e.stopPropagation()}
        >
          <ArrowUpRight size={13} />
          View Case Study
        </Link>

      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-20 sm:py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--color-accent)' }}>
              Selected Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
              Featured Projects
            </h2>
            <p className="text-sm mt-1.5" style={{ color: 'var(--color-text-muted)' }}>
              Three case studies showing my work across GenAI, localisation, and product delivery
            </p>
          </div>
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl border self-start sm:self-auto flex-shrink-0"
            style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-accent-bg)' }}>
              <FolderOpen size={15} style={{ color: 'var(--color-accent)' }} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: 'var(--color-text-muted)' }}>Total Projects</p>
              <p className="text-sm font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>{projects.length} Case Studies</p>
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => {
            const cfg = CATEGORY_CONFIG[f]
            const isActive = active === f
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200"
                style={isActive
                  ? { background: cfg ? cfg.color : 'var(--color-accent)', borderColor: cfg ? cfg.color : 'var(--color-accent)', color: '#fff' }
                  : { background: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }
                }
              >
                {f}
                <span className="ml-1.5 text-xs opacity-60">
                  {f === 'All' ? projects.length : projects.filter(p => p.category === f).length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={i} project={project} index={projects.indexOf(project)} />
          ))}
        </div>

      </div>
    </section>
  )
}
