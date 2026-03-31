import { useState } from 'react'

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_ID"

const EXPERIENCE = [
  { role: 'Product Design Lead (UX/UI)', place: 'Ladder Inc (formerly NextCoin) · Dec 2025 – Feb 2026' },
  { role: 'Product Design Lead (UX/UI)', place: 'MentorAll · Jul 2025 – Nov 2025' },
  { role: 'UX/UI Design Intern',         place: 'Rajang Digital Solutions · Dec 2024 – Feb 2025' },
  { role: 'Web Designer & Developer',    place: 'Muafakat · 2024' },
  { role: 'Industries Events Director',  place: 'SUEDE, University of Sydney · 2024–Present' },
]

const EDUCATION = [
  { role: 'Bachelor of Interaction Design', place: 'University of Sydney · 2023–2026' },
  { role: 'Front-End Engineering',           place: 'FrontEnd Simplified · 2024–2025' },
]

export default function ContactModal({ isOpen, onClose }) {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (data.ok) {
        setSuccess(true)
        setLoading(false)
      } else {
        throw new Error('Form error')
      }
    } catch {
      setLoading(false)
      setError('Something went wrong. Email me directly at natashapng.png@gmail.com')
    }
  }

  function handleClose() {
    setSuccess(false)
    setLoading(false)
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal">
      {/* LEFT — CV Panel */}
      <div className="modal__half modal__about">
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 700, fontSize: '1rem', margin: '0 0 0.2rem' }}>Natasha Png</p>
          <p style={{ color: '#0c9590', fontSize: '0.85rem', margin: '0 0 0.75rem' }}>UX/UI Designer & Frontend Developer</p>
          <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
            Final-semester Interaction Design student at the University of Sydney,
            with 3 internships and a love for building things that actually work for people.
          </p>
        </div>

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', margin: '0 0 0.75rem' }}>
          Experience
        </p>
        {EXPERIENCE.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
            borderBottom: i < EXPERIENCE.length - 1 ? '1px solid #f0f0f0' : 'none',
            paddingBottom: '0.6rem', marginBottom: '0.6rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0c9590', flexShrink: 0, marginTop: '0.45em' }} />
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#242424', margin: 0 }}>{item.role}</p>
              <p style={{ fontSize: '0.8rem', color: '#777', lineHeight: 1.5, margin: 0 }}>{item.place}</p>
            </div>
          </div>
        ))}

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', margin: '1rem 0 0.75rem' }}>
          Education
        </p>
        {EDUCATION.map((item, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
            borderBottom: i < EDUCATION.length - 1 ? '1px solid #f0f0f0' : 'none',
            paddingBottom: '0.6rem', marginBottom: '0.6rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0c9590', flexShrink: 0, marginTop: '0.45em' }} />
            <div>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#242424', margin: 0 }}>{item.role}</p>
              <p style={{ fontSize: '0.8rem', color: '#777', lineHeight: 1.5, margin: 0 }}>{item.place}</p>
            </div>
          </div>
        ))}

        <a
          href="/assets/home/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0c9590', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'underline', display: 'inline-block', marginTop: '1rem' }}
        >
          ↓ Download Resume
        </a>
      </div>

      {/* RIGHT — Contact Form */}
      <div className="modal__half modal__contact">
        <i className="fas fa-times modal__exit click" onClick={handleClose}></i>
        <h3 className="modal__title modal__title--contact">Let's have a chat</h3>
        <h3 className="modal__sub-title modal__sub-title--contact">I'm currently open to new opportunities.</h3>

        {success ? (
          <div className="modal__overlay modal__overlay--success modal__overlay--visible">
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea className="input" value={message} onChange={e => setMessage(e.target.value)} required />
            </div>
            <button id="contact__submit" className="form__submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send it my way'}
            </button>
            {error && (
              <p style={{ fontSize: '0.82rem', color: '#e74c3c', marginTop: '0.75rem' }}>{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
