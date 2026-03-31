import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactModal from './ContactModal'

const NEXT_PROJECTS = {
  herculabs: { slug: 'rajang',      title: 'Rajang',      subtitle: 'A Website Revamp with a Twist',    path: '/projects/rajang' },
  rajang:    { slug: 'babycircle',  title: 'BabyCircle',  subtitle: 'A Parental Support App',           path: '/projects/babycircle' },
  babycircle:{ slug: 'herculabs',   title: 'Herculabs',   subtitle: 'A VR Olympic Simulator Booth',     path: '/projects/herculabs' },
}

export default function CaseStudyLayout({ children, heroTag, heroTitle, heroSubtitle, meta, coverImg, coverAlt, customHero, pageClass, slug, heroLogo }) {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.background = 'white'
    return () => { document.body.style.background = '' }
  }, [])

  useEffect(() => {
    if (modalOpen) document.body.classList.add('modal--open')
    else document.body.classList.remove('modal--open')
    return () => document.body.classList.remove('modal--open')
  }, [modalOpen])

  const next = slug ? NEXT_PROJECTS[slug] : null

  return (
    <>
      <canvas id="background"></canvas>

      {/* Sticky nav */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Navbar
          onContactClick={() => setModalOpen(true)}
        />
      </div>

      <div style={{ background: 'white', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div className={`case-study-page${pageClass ? ` ${pageClass}` : ''}`}>
          {/* Hero */}
          <div className="case-study-hero">
            <Link to="/" className="case-study-hero__back">
              ← Back to Projects
            </Link>
            {heroLogo && (
              <>
                <img
                  src={heroLogo}
                  alt="Project logo"
                  style={{
                    width: '180px',
                    marginBottom: '0',
                    filter: 'brightness(0) saturate(100%) invert(30%) sepia(50%) saturate(600%) hue-rotate(130deg) brightness(80%)',
                    display: 'block',
                  }}
                />
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: '#2d6e6a', margin: '0.5rem 0 0.25rem', letterSpacing: '-0.02em', lineHeight: 1 }}>babycircle</h1>
              </>
            )}
            {customHero || (
              <>
                {heroTag && <p className="case-study-hero__tag">{heroTag}</p>}
                {heroTitle && <h1 className="case-study-hero__title">{heroTitle}</h1>}
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
              </>
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

        {/* Read Next */}
        {next && (
          <section className="cs-read-next">
            <div className="cs-read-next__inner">
              <p className="cs-read-next__label">Next Case Study</p>
              <h2 className="cs-read-next__title">{next.title}</h2>
              <p className="cs-read-next__subtitle">{next.subtitle}</p>
              <Link to={next.path} className="cs-read-next__btn">
                Read Case Study →
              </Link>
            </div>
          </section>
        )}
      </div>

      <Footer onContactClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
