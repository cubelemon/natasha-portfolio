import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactModal from './ContactModal'

export default function CaseStudyLayout({ children, heroTag, heroTitle, heroSubtitle, meta, coverImg, coverAlt }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (darkTheme) document.body.classList.add('dark-theme')
    else document.body.classList.remove('dark-theme')
    return () => document.body.classList.remove('dark-theme')
  }, [darkTheme])

  useEffect(() => {
    if (modalOpen) document.body.classList.add('modal--open')
    else document.body.classList.remove('modal--open')
    return () => document.body.classList.remove('modal--open')
  }, [modalOpen])

  return (
    <>
      <canvas id="background"></canvas>

      {/* Sticky nav */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Navbar
          onContactClick={() => setModalOpen(true)}
          onContrastToggle={() => setDarkTheme(p => !p)}
        />
      </div>

      <div className="case-study-page">
        {/* Hero */}
        <div className="case-study-hero">
          <Link to="/" className="case-study-hero__back">
            ← Back to Projects
          </Link>
          <p className="case-study-hero__tag">{heroTag}</p>
          <h1 className="case-study-hero__title">{heroTitle}</h1>
          {heroSubtitle && <p className="case-study-hero__subtitle">{heroSubtitle}</p>}
          {meta && (
            <div className="case-study-hero__meta">
              {meta.map(({ label, value }) => (
                <div className="meta-item" key={label}>
                  <span className="meta-item__label">{label}</span>
                  <span className="meta-item__value">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cover image */}
        {coverImg && (
          <div className="case-study-cover">
            <img src={coverImg} alt={coverAlt || heroTitle} />
          </div>
        )}

        {/* Page content */}
        {children}
      </div>

      <Footer onContactClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
