import { Building2, Calendar, MapPin, ArrowUpRight } from 'lucide-react'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--color-accent)' }}>
              Career Journey
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
              Work Experience
            </h2>
            <p className="text-sm mt-1.5" style={{ color: 'var(--color-text-muted)' }}>
              6+ years across design, development &amp; web localisation
            </p>
          </div>
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl border self-start sm:self-auto"
            style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-accent-bg)' }}>
              <Building2 size={15} style={{ color: 'var(--color-accent)' }} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: 'var(--color-text-muted)' }}>Total Experience</p>
              <p className="text-sm font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>6+ Years · 3 Roles</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">

          {/* Vertical line */}
          <div
            className="absolute left-[19px] top-5 bottom-5 w-0.5 hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, var(--color-accent), var(--color-border) 80%, transparent)' }}
          />

          {experience.map((job, i) => (
            <div key={i} className="relative flex gap-0 sm:gap-7 group">

              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center flex-shrink-0 pt-5">
                <div
                  className="relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: job.current ? 'var(--color-accent)' : 'var(--color-bg-card)',
                    borderColor: 'var(--color-accent)',
                    color: job.current ? '#fff' : 'var(--color-accent)',
                  }}
                >
                  {job.company.charAt(0)}
                  {job.current && (
                    <>
                      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: 'var(--color-accent)' }} />
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2" style={{ borderColor: 'var(--color-bg-secondary)' }} />
                    </>
                  )}
                </div>
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl border overflow-hidden transition-all duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: job.current ? 'var(--color-border-accent)' : 'var(--color-border)',
                  boxShadow: job.current
                    ? '0 4px 32px color-mix(in srgb, var(--color-accent) 10%, transparent)'
                    : '0 1px 4px var(--color-shadow)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border-accent)'
                  e.currentTarget.style.boxShadow = '0 8px 32px color-mix(in srgb, var(--color-accent) 12%, transparent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = job.current ? 'var(--color-border-accent)' : 'var(--color-border)'
                  e.currentTarget.style.boxShadow = job.current
                    ? '0 4px 32px color-mix(in srgb, var(--color-accent) 10%, transparent)'
                    : '0 1px 4px var(--color-shadow)'
                }}
              >
                {/* Accent top bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: job.current
                      ? 'linear-gradient(to right, var(--color-accent), #06b6d4)'
                      : job.type === 'Internship'
                      ? 'linear-gradient(to right, #f59e0b, #fbbf24)'
                      : 'linear-gradient(to right, #64748b, #94a3b8)',
                  }}
                />

                <div className="p-5 sm:p-7">

                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex flex-col gap-1.5">
                      {/* Title + badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
                          {job.title}
                        </h3>
                        {job.current && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: '#dcfce7', color: '#16a34a' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                            Current
                          </span>
                        )}
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border"
                          style={
                            job.type === 'Internship'
                              ? { background: '#fef9c3', color: '#854d0e', borderColor: '#fde047' }
                              : { background: 'var(--color-accent-bg)', color: 'var(--color-accent-text)', borderColor: 'var(--color-border-accent)' }
                          }
                        >
                          {job.type}
                        </span>
                      </div>

                      {/* Company + location */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                          <Building2 size={13} />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                          <MapPin size={11} />
                          Noida, India
                        </span>
                      </div>
                    </div>

                    {/* Period pill */}
                    <div
                      className="flex flex-col items-end gap-1.5"
                    >
                      <div
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border"
                        style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)', borderColor: 'var(--color-border)' }}
                      >
                        <Calendar size={11} />
                        {job.period}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md" style={{ background: 'var(--color-tag-bg)', color: 'var(--color-text-muted)' }}>
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  {/* Summary callout */}
                  <div
                    className="flex gap-3 p-4 rounded-xl mb-5 border-l-4"
                    style={{
                      background: 'var(--color-accent-bg)',
                      borderLeftColor: 'var(--color-accent)',
                    }}
                  >
                    <ArrowUpRight size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-accent-text)' }}>
                      {job.summary}
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {job.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold mt-0.5"
                          style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                        >
                          {j + 1}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <span className="text-[10px] font-bold uppercase tracking-wider mr-1" style={{ color: 'var(--color-text-muted)' }}>Stack:</span>
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md border"
                        style={{ background: 'var(--color-tag-bg)', color: 'var(--color-tag-text)', borderColor: 'var(--color-tag-border)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
