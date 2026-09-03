import { GraduationCap, CalendarDays, Award, CheckCircle2, BookOpen, Trophy, Star, ScrollText, Percent, BadgeCheck } from 'lucide-react'
import { education, certifications, awards } from '../data/portfolio'

const SubHeading = ({ icon: Icon, label, badge }) => (
  <div className="flex items-center gap-2.5 mb-6">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-accent-bg)' }}>
      <Icon size={15} style={{ color: 'var(--color-accent)' }} />
    </div>
    <h3 className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: 'var(--color-text-secondary)' }}>{label}</h3>
    {badge && (
      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full ml-1" style={{ background: '#fef9c3', color: '#854d0e' }}>
        {badge}
      </span>
    )}
  </div>
)

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--color-accent)' }}>
              Background
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
              Education, Certifications & Awards
            </h2>
            <p className="text-sm mt-1.5" style={{ color: 'var(--color-text-muted)' }}>
              Academic qualifications, professional diplomas, and recognition received
            </p>
          </div>

          {/* Stat strip */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {[
              { value: '3', label: 'Degrees' },
              { value: '2', label: 'Diplomas' },
              { value: '3', label: 'Awards' },
            ].map(s => (
              <div
                key={s.label}
                className="flex flex-col items-center px-4 py-2.5 rounded-xl border"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
              >
                <span className="text-lg font-extrabold leading-none" style={{ color: 'var(--color-accent)' }}>{s.value}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ACADEMIC EDUCATION ── */}
        <div className="mb-14">
          <SubHeading icon={GraduationCap} label="Academic Education" />

          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="group relative flex flex-col sm:flex-row gap-5 p-5 sm:p-6 rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'var(--color-bg-card)',
                  borderColor: i === 0 ? 'var(--color-border-accent)' : 'var(--color-border)',
                  boxShadow: i === 0 ? '0 4px 24px color-mix(in srgb, var(--color-accent) 8%, transparent)' : '0 1px 4px var(--color-shadow)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border-accent)'
                  e.currentTarget.style.boxShadow = '0 8px 28px color-mix(in srgb, var(--color-accent) 10%, transparent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = i === 0 ? 'var(--color-border-accent)' : 'var(--color-border)'
                  e.currentTarget.style.boxShadow = i === 0 ? '0 4px 24px color-mix(in srgb, var(--color-accent) 8%, transparent)' : '0 1px 4px var(--color-shadow)'
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                  style={{ background: i === 0 ? 'var(--color-accent)' : i === 1 ? '#64748b' : '#94a3b8' }}
                />

                {/* Icon */}
                <div className="flex-shrink-0 pl-2">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: i === 0 ? 'var(--color-accent)' : 'var(--color-tag-bg)',
                      color: i === 0 ? '#fff' : 'var(--color-text-secondary)',
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>{edu.degree}</h4>
                      <p className="text-xs mt-0.5 font-medium" style={{ color: 'var(--color-text-secondary)' }}>{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border" style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-muted)', borderColor: 'var(--color-border)' }}>
                        <CalendarDays size={10} /> {edu.year}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg"
                        style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                      >
                        <Percent size={10} /> {edu.percentage}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <BadgeCheck size={13} style={{ color: 'var(--color-accent)' }} />
                    <span className="text-xs font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{edu.grade}</span>
                  </div>

                  {edu.highlights.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {edu.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          <span
                            className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold mt-0.5"
                            style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}
                          >
                            {j + 1}
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DIPLOMAS & CERTIFICATIONS ── */}
        <div className="mb-14">
          <SubHeading icon={ScrollText} label="Diplomas & Certifications" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cert.type === 'diploma' ? '#f59e0b' : 'var(--color-border-accent)'
                  e.currentTarget.style.boxShadow = cert.type === 'diploma'
                    ? '0 8px 28px rgba(245,158,11,0.12)'
                    : '0 8px 28px color-mix(in srgb, var(--color-accent) 10%, transparent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: cert.type === 'diploma'
                      ? 'linear-gradient(to right, #f59e0b, #fbbf24)'
                      : 'linear-gradient(to right, var(--color-accent), #06b6d4)',
                  }}
                />

                <div className="flex gap-4 p-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: cert.type === 'diploma' ? '#fffbeb' : 'var(--color-accent-bg)',
                      color: cert.type === 'diploma' ? '#d97706' : 'var(--color-accent)',
                    }}
                  >
                    {cert.type === 'diploma' ? <BookOpen size={18} /> : <ScrollText size={18} />}
                  </div>

                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold leading-snug" style={{ color: 'var(--color-text-primary)' }}>{cert.title}</h4>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          background: cert.type === 'diploma' ? '#fffbeb' : 'var(--color-accent-bg)',
                          color: cert.type === 'diploma' ? '#d97706' : 'var(--color-accent)',
                        }}
                      >
                        {cert.type === 'diploma' ? 'Diploma' : 'Certificate'}
                      </span>
                    </div>
                    <p className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                      {cert.issuer}
                      <span className="mx-1.5" style={{ color: 'var(--color-border)' }}>·</span>
                      <span style={{ color: 'var(--color-text-muted)' }}>{cert.year}</span>
                    </p>
                    <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--color-text-muted)' }}>{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── AWARDS & RECOGNITION ── */}
        <div>
          <SubHeading icon={Trophy} label="Awards & Recognition" badge="3 Awards · Multiple Appreciations" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#f59e0b'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Amber top bar */}
                <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #f59e0b, #fbbf24)' }} />

                <div className="flex flex-col gap-3 p-5">
                  {/* Trophy + year */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: '#fffbeb', color: '#d97706' }}
                    >
                      <Trophy size={18} />
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-lg"
                      style={{ background: '#fef9c3', color: '#854d0e' }}
                    >
                      {award.year}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>{award.title}</h4>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--color-accent)' }}>{award.issuer}</p>
                    <p className="text-xs mt-2 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{award.desc}</p>
                  </div>

                  {/* Star row */}
                  <div className="flex items-center gap-0.5 mt-auto pt-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={11} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Appreciations banner */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5 rounded-2xl border"
            style={{
              background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
              borderColor: '#fbcfe8',
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: '#fce7f3', color: '#ec4899' }}
            >
              <Star size={18} fill="#ec4899" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold" style={{ color: '#9d174d' }}>
                Multiple Client & Team Appreciations
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: '#be185d' }}>
                Received numerous written and verbal appreciations from clients and internal teams for quality delivery, attention to detail, and consistent performance across localisation projects.
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={13} fill="#ec4899" style={{ color: '#ec4899' }} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
