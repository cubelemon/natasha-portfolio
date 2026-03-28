import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactModal from '../../components/ContactModal'

const META = [
  { label: 'Role', value: 'Website Designer & Developer' },
  { label: 'Team', value: 'Muafakat' },
  { label: 'Year', value: '2024' },
  { label: 'Tools', value: 'Figma, HTML, CSS, JavaScript' },
]

export default function Muafakat() {
  const [modalOpen, setModalOpen] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal--open')
    } else {
      document.body.classList.remove('modal--open')
    }
    return () => document.body.classList.remove('modal--open')
  }, [modalOpen])

  return (
    <>
      <Navbar onContactClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <main className="web-project">
        <div className="web-project__hero">
          <div className="cs-container">
            <p className="cs-hero__tag">Website Design & Development</p>
            <h1 className="cs-hero__title">Muafakat Games 2024</h1>
            <p className="cs-hero__subtitle">
              A full website for the Malaysian Sport Competition, designed and developed from scratch.
            </p>
            <div className="cs-hero__meta">
              {META.map(({ label, value }) => (
                <div key={label} className="cs-hero__meta-item">
                  <span className="cs-hero__meta-label">{label}</span>
                  <span className="cs-hero__meta-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cs-container web-project__body">
          <section className="cs-section">
            <p className="cs-section__label">Overview</p>
            <h2 className="cs-section__title">My Role</h2>
            <p className="cs-section__body">
              {/* ✏️ REPLACE: Describe your role and what you did for the Muafakat Games 2024 website */}
              [Describe your role here — what you were responsible for, who you worked with, and the goals of the project.]
            </p>
          </section>

          <hr className="cs-divider" />

          <section className="cs-section">
            <p className="cs-section__label">What I Did</p>
            <h2 className="cs-section__title">Design & Development</h2>
            <p className="cs-section__body">
              {/* ✏️ REPLACE: Walk through what you designed and built */}
              [Walk through what you designed and built — the pages, features, and any technical decisions you made along the way.]
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <a href="https://www.muafakatgames2024.com/" target="_blank" rel="noreferrer" className="project__button--internal">
                Visit Live Site →
              </a>
              <a href="https://github.com/cubelemon/Muafakat" target="_blank" rel="noreferrer" className="project__button--internal">
                View on GitHub →
              </a>
            </div>
          </section>

          <hr className="cs-divider" />
        </div>

        <div className="web-project__embed-section">
          <div className="cs-container">
            <p className="cs-section__label">Live Website</p>
            <h2 className="cs-section__title">Muafakat Games 2024</h2>
          </div>
          {iframeError ? (
            <div className="web-project__embed-fallback">
              <p>This site can't be embedded directly.</p>
              <a href="https://www.muafakatgames2024.com/" target="_blank" rel="noreferrer" className="project__button--internal">
                Open Website →
              </a>
            </div>
          ) : (
            <div className="web-project__iframe-wrapper">
              <iframe
                src="https://www.muafakatgames2024.com/"
                title="Muafakat Games 2024 Website"
                className="web-project__iframe"
                onError={() => setIframeError(true)}
              />
              <div className="web-project__iframe-overlay">
                <a href="https://www.muafakatgames2024.com/" target="_blank" rel="noreferrer" className="project__button--internal">
                  Open in New Tab →
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="web-project__back">
          <Link to="/#projects" className="project__button--internal">← Back to Projects</Link>
        </div>
      </main>

      <Footer onContactClick={() => setModalOpen(true)} />
    </>
  )
}
