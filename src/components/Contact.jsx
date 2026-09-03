import { useState } from 'react'
import { Mail, MapPin, GitFork, Link, Send, MessageSquare, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const socials = [
  { icon: GitFork, href: 'https://github.com',                   label: 'GitHub' },
  { icon: Link,    href: 'https://linkedin.com',                 label: 'LinkedIn' },
  { icon: Mail,    href: 'mailto:vermahemant3568@gmail.com',    label: 'Email' },
]

const INIT = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(INIT)
  const [sent, setSent]     = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())                               e.name    = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = 'Valid email required'
    if (!form.message.trim())                            e.message = 'Message is required'
    return e
  }

  const handleSubmit = e => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }

    const subject = encodeURIComponent(form.subject?.trim() ? `Portfolio enquiry: ${form.subject.trim()}` : 'Portfolio enquiry')
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`
    )

    window.location.href = `mailto:vermahemant3568@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setForm(INIT)
    setErrors({})
  }

  const field = (key, label, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>{label}</label>
      <input
        type={type}
        value={form[key]}
        placeholder={placeholder}
        onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: '' })) }}
        className="px-4 py-2.5 rounded-lg text-sm outline-none transition-colors"
        style={{
          background: 'var(--color-bg-primary)',
          border: `1px solid ${errors[key] ? '#ef4444' : 'var(--color-border)'}`,
          color: 'var(--color-text-primary)',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
        onBlur={e => e.target.style.borderColor = errors[key] ? '#ef4444' : 'var(--color-border)'}
      />
      {errors[key] && <span className="text-xs text-red-500">{errors[key]}</span>}
    </div>
  )

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-14">
          <span className="p-2 rounded-lg" style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}>
            <MessageSquare size={20} />
          </span>
          <div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Contact</h2>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-text-muted)' }}>Let's work together</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I’m open to freelance projects, product collaborations, and full-time opportunities. Share a few details and I’ll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:vermahemant3568@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl border transition-colors"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--color-border-accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
              >
                <span className="p-2 rounded-lg" style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}>
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Email</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>vermahemant3568@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl border" style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}>
                <span className="p-2 rounded-lg" style={{ background: 'var(--color-accent-bg)', color: 'var(--color-accent)' }}>
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Location</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-primary)' }}>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-text-muted)' }}>Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-colors"
                    style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-border-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-xl border text-center"
                style={{ background: 'var(--color-accent-bg)', borderColor: 'var(--color-border-accent)' }}>
                <CheckCircle2 size={40} style={{ color: 'var(--color-accent)' }} />
                <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-5 py-2 rounded-lg text-white text-sm font-medium transition-colors"
                  style={{ background: 'var(--color-accent)' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4 p-6 rounded-xl border"
                style={{ background: 'var(--color-bg-card)', borderColor: 'var(--color-border)' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {field('name',    'Your Name',     'text',  'Hemant Kumar')}
                  {field('email',   'Email Address', 'email', 'you@example.com')}
                </div>
                {field('subject', 'Subject', 'text', 'Project enquiry...')}

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    placeholder="Tell me about your project or opportunity..."
                    onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })) }}
                    className="px-4 py-2.5 rounded-lg text-sm outline-none transition-colors resize-none"
                    style={{
                      background: 'var(--color-bg-primary)',
                      border: `1px solid ${errors.message ? '#ef4444' : 'var(--color-border)'}`,
                      color: 'var(--color-text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--color-border)'}
                  />
                  {errors.message && <span className="text-xs text-red-500">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium text-sm transition-colors"
                  style={{ background: 'var(--color-accent)' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--color-accent-hover)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--color-accent)'}
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
