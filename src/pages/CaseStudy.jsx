import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock, User, Calendar, Wrench, CheckCircle2, TrendingUp, Lightbulb, Sparkles, Globe, PenTool, ChevronRight } from 'lucide-react'
import { projects } from '../data/portfolio'

const CATEGORY_CONFIG = {
  GenAI:        { color: '#6366f1', bg: '#eef2ff', text: '#4338ca', bar: 'linear-gradient(135deg, #6366f1, #818cf8)', Icon: Sparkles },
  Localisation: { color: '#0891b2', bg: '#ecfeff', text: '#0e7490', bar: 'linear-gradient(135deg, #0891b2, #06b6d4)', Icon: Globe },
  DTP:          { color: '#d97706', bg: '#fffbeb', text: '#92400e', bar: 'linear-gradient(135deg, #f59e0b, #fbbf24)', Icon: PenTool },
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  const cfg = CATEGORY_CONFIG[project.category] || CATEGORY_CONFIG.GenAI
  const cs = project.caseStudy
  const currentIndex = projects.indexOf(project)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <div style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>

      {/* Fixed header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: '#0f172a', borderColor: '#1e293b' }}
      >
        {/* Thin category color bar at very top */}
        <div className="h-0.5 w-full" style={{ background: cfg.bar }} />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">

          {/* Left — back button */}
          <Link
            to="/#projects"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 flex-shrink-0"
            style={{ background: '#1e293b', color: '#e2e8f0' }}
            onMouseEnter={e => { e.currentTarget.style.background = cfg.color; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#e2e8f0' }}
          >
            <ArrowLeft size={14} />
            Back
          </Link>

          {/* Center — title + category */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: cfg.color }}>
              <cfg.Icon size={12} color="#fff" />
            </div>
            <span
              className="text-sm font-bold truncate hidden sm:block"
              style={{ color: '#f1f5f9' }}
            >
              {project.title}
            </span>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
              style={{ background: cfg.color + '25', color: cfg.color }}
            >
              {project.category}
            </span>
          </div>

          {/* Right — meta pills */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {[
              { icon: Clock, label: cs.duration },
              { icon: Calendar, label: cs.year },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
                style={{ background: '#1e293b', color: '#94a3b8' }}
              >
                <Icon size={11} />
                {label}
              </div>
            ))}
          </div>

        </div>
      </header>

      {/* Page content — offset for fixed header */}
      <div className="pt-14">

        {/* Hero title block — scrollable, not fixed */}
        <div
          className="py-10 sm:py-14 border-b"
          style={{ background: '#0f172a', borderColor: '#1e293b' }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: cfg.color }}>
              Case Study
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3" style={{ color: '#f1f5f9' }}>
              {project.title}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed max-w-2xl" style={{ color: '#94a3b8' }}>
              {project.description}
            </p>

            {/* Role pill — mobile only meta */}
            <div className="flex flex-wrap gap-2 mt-5">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: '#1e293b', color: '#cbd5e1' }}>
                <User size={11} />
                {cs.role}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium sm:hidden" style={{ background: '#1e293b', color: '#cbd5e1' }}>
                <Clock size={11} />
                {cs.duration}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium sm:hidden" style={{ background: '#1e293b', color: '#cbd5e1' }}>
                <Calendar size={11} />
                {cs.year}
              </div>
            </div>
          </div>
        </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-12">

          {/* Problem & Goal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#fee2e2' }}>
                  <span className="text-red-500 text-xs font-black">!</span>
                </div>
                <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>The Problem</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{cs.problem}</p>
            </div>
            <div className="p-6 rounded-2xl border" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: cfg.bg }}>
                  <TrendingUp size={13} style={{ color: cfg.color }} />
                </div>
                <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>The Goal</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{cs.goal}</p>
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={15} style={{ color: cfg.color }} />
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Tools & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span
                  key={tool}
                  className="text-sm font-medium px-3 py-1.5 rounded-lg border"
                  style={{ background: cfg.bg, color: cfg.text, borderColor: cfg.color + '30' }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: cfg.bg }}>
                <ChevronRight size={14} style={{ color: cfg.color }} />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Process & Approach</h2>
            </div>

            <div className="relative flex flex-col gap-0">
              {/* Vertical connector line */}
              <div
                className="absolute left-5 top-10 bottom-10 w-0.5 hidden sm:block"
                style={{ background: `linear-gradient(to bottom, ${cfg.color}, transparent)` }}
              />

              {cs.process.map((step, i) => (
                <div key={i} className="relative flex gap-5 sm:gap-7 pb-6 last:pb-0">
                  {/* Step number dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold border-2 mt-1"
                    style={{ background: cfg.bg, borderColor: cfg.color, color: cfg.color }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className="flex-1 p-5 rounded-2xl border transition-all duration-200 hover:border-opacity-60"
                    style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = cfg.color + '60'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
                  >
                    <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{step.step}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp size={15} style={{ color: cfg.color }} />
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Results & Outcomes</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {cs.results.map((r, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 p-4 rounded-2xl border text-center"
                  style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                >
                  <span className="text-xl sm:text-2xl font-extrabold leading-none" style={{ color: cfg.color }}>{r.value}</span>
                  <span className="text-xs font-bold mt-1" style={{ color: 'var(--color-text-primary)' }}>{r.metric}</span>
                  <span className="text-[11px] leading-snug" style={{ color: 'var(--color-text-muted)' }}>{r.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key achievements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={15} style={{ color: cfg.color }} />
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>Key Achievements</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border"
                  style={{ background: cfg.bg, borderColor: cfg.color + '30' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold mt-0.5"
                    style={{ background: cfg.color, color: '#fff' }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium" style={{ color: cfg.text }}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div
            className="flex gap-4 p-6 rounded-2xl border"
            style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cfg.bg }}>
              <Lightbulb size={18} style={{ color: cfg.color }} />
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-text-muted)' }}>Key Learnings</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{cs.learnings}</p>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            {prev ? (
              <Link
                to={`/case-study/${prev.slug}`}
                className="flex-1 flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <ArrowLeft size={16} style={{ color: 'var(--color-text-muted)' }} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Previous</p>
                  <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--color-text-primary)' }}>{prev.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {next ? (
              <Link
                to={`/case-study/${next.slug}`}
                className="flex-1 flex items-center justify-end gap-3 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 text-right group"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>Next</p>
                  <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--color-text-primary)' }}>{next.title}</p>
                </div>
                <ChevronRight size={16} style={{ color: 'var(--color-text-muted)' }} />
              </Link>
            ) : <div className="flex-1" />}
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
