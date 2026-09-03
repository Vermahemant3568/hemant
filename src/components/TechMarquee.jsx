import { Brain, Code2, Globe, Layers } from 'lucide-react'

const GROUPS = [
  {
    icon: Brain,
    label: 'Artificial Intelligence',
    desc: 'Building practical AI solutions using modern LLMs and GenAI tools.',
    color: '#6366f1',
    colorBg: '#1e1b4b',
    skills: ['GenAI', 'LLMs', 'AI Applications', 'Python', 'Prompt Engineering'],
  },
  {
    icon: Code2,
    label: 'Web Development',
    desc: 'Full-cycle web development from responsive UI to backend API integration.',
    color: '#0891b2',
    colorBg: '#0c2a3a',
    skills: ['HTML5 / CSS3', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'Laravel', 'MySQL', 'REST APIs'],
  },
  {
    icon: Globe,
    label: 'Web Localisation',
    desc: 'End-to-end multilingual delivery for websites, apps, and digital content.',
    color: '#10b981',
    colorBg: '#052e16',
    skills: ['Web Localisation', 'HTML/CSS Adjustments', 'Multilingual Delivery', 'Post-Localisation QA'],
  },
  {
    icon: Layers,
    label: 'Localisation DTP',
    desc: 'Adapting documents, banners, and assets into multiple languages for global markets.',
    color: '#f59e0b',
    colorBg: '#1c1003',
    skills: ['Multilingual DTP', 'Adobe InDesign', 'Banners & Images', 'Document Localisation', 'Adobe Photoshop'],
  },
]

export default function TechMarquee() {
  return (
    <section style={{ background: '#0a0f1e', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#0891b2' }}>
            What I Work With
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Core Expertise
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: '#64748b' }}>
            6+ years of hands-on experience across AI development, web engineering, localisation, and multilingual DTP production.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROUPS.map(({ icon: Icon, label, desc, color, colorBg, skills }) => (
            <div
              key={label}
              className="flex flex-col gap-4 p-5 rounded-2xl border transition-all duration-200 cursor-default"
              style={{ background: '#111827', borderColor: '#1e293b' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e293b'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon + label */}
              <div className="flex items-start gap-3">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ background: colorBg, color }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div className="flex flex-col gap-0.5 pt-0.5">
                  <span className="text-sm font-bold text-white leading-tight">{label}</span>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded w-fit" style={{ background: colorBg, color }}>
                    {skills.length} skills
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                {desc}
              </p>

              {/* Divider */}
              <div className="w-full h-px" style={{ background: '#1e293b' }} />

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg border"
                    style={{ background: '#0f172a', color: '#94a3b8', borderColor: '#1e293b' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
