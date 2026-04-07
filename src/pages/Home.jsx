
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

const META_ROWS = [
  { label: 'Kind',     value: 'UX Designer' },
  { label: 'Size',     value: '3 internships, 1 degree' },
  { label: 'Created',  value: 'Sarawak, Malaysia' },
  { label: 'Modified', value: 'Sydney, Australia' },
]

const CHECKER_BG = {
  backgroundImage: `
    linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
    linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)
  `,
  backgroundSize: '12px 12px',
  backgroundPosition: '0 0, 0 6px, 6px -6px, -6px 0px',
  backgroundColor: '#f5f5f5',
}

function FileCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function check() { setIsMobile(window.innerWidth <= 768) }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const hintStyle = { fontSize: '12px', color: '#aaa', textAlign: 'center', marginTop: '0.75rem', display: 'block', cursor: isOpen ? 'pointer' : 'default' }

  if (isMobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          onClick={() => setIsOpen(o => !o)}
          style={{
            width: '300px',
            minHeight: '420px',
            height: isOpen ? '580px' : 'auto',
            background: 'white',
            borderRadius: '1.25rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            padding: '1.25rem 1.25rem 1.5rem',
            cursor: 'pointer',
            transition: 'height 400ms ease',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
              <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
            ))}
          </div>
          <div style={{ height: isOpen ? '360px' : '200px', width: '100%', borderRadius: '0.75rem', overflow: 'hidden', marginTop: '2rem', transition: 'height 400ms ease', ...CHECKER_BG }}>
            <img src="/assets/home/me_cutout.png" alt="Natasha" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
          <p style={{ fontSize: '1rem', fontWeight: 700, color: isOpen ? '#0c9590' : '#051616', marginTop: '1rem', transition: 'color 300ms ease' }}>
            {isOpen ? 'Now open ✓' : 'Natasha.png'}
          </p>
          <div style={{ opacity: isOpen ? 0 : 1, height: isOpen ? 0 : 'auto', overflow: 'hidden', transition: 'opacity 300ms ease' }}>
            {META_ROWS.map(({ label, value }) => (
              <p key={label} style={{ fontSize: '12px', color: '#777', lineHeight: 1.8, margin: 0 }}>
                <span style={{ fontFamily: 'monospace', color: '#aaa', display: 'inline-block', width: '70px' }}>{label}</span>
                {value}
              </p>
            ))}
            <span style={{ background: '#fff0f0', color: '#e74c3c', border: '1px solid #ffcccc', borderRadius: '999px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>⚠ no jpeg please</span>
          </div>
        </div>
        <span
          style={hintStyle}
          onClick={isOpen ? (e) => { e.stopPropagation(); setIsOpen(false) } : undefined}
        >
          {isOpen ? '✕ close' : 'tap to expand ↕'}
        </span>
      </div>
    )
  }

  // Desktop — 3D flip
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ perspective: '1000px', width: '300px', height: '460px' }}>
        <div
          onClick={() => setIsOpen(o => !o)}
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s ease',
            transform: isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: 'relative', width: '100%', height: '100%', cursor: 'pointer',
          }}
        >
          {/* FRONT */}
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', background: 'white', borderRadius: '1.25rem', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', padding: '1.25rem 1.25rem 2rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ height: '200px', width: '100%', borderRadius: '0.75rem', overflow: 'hidden', marginTop: '2rem', ...CHECKER_BG }}>
              <img src="/assets/home/me_cutout.png" alt="Natasha" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: '#051616', marginTop: '1rem' }}>Natasha.png</p>
            <div>
              {META_ROWS.map(({ label, value }) => (
                <p key={label} style={{ fontSize: '12px', color: '#777', lineHeight: 1.8, margin: 0 }}>
                  <span style={{ fontFamily: 'monospace', color: '#aaa', display: 'inline-block', width: '70px' }}>{label}</span>
                  {value}
                </p>
              ))}
            </div>
            <span style={{ background: '#fff0f0', color: '#e74c3c', border: '1px solid #ffcccc', borderRadius: '999px', padding: '3px 10px', fontSize: '11px', fontWeight: 600, marginTop: '1rem', marginBottom: '0.5rem', display: 'inline-block' }}>⚠ no jpeg please</span>
          </div>
          {/* BACK — transparent cutout only */}
          <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', background: 'transparent', boxShadow: 'none', overflow: 'hidden' }}>
            <img src="/assets/home/me_cutout.png" alt="Natasha" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: 'transparent' }} />
          </div>
        </div>
      </div>
      <span
        style={hintStyle}
        onClick={isOpen ? (e) => { e.stopPropagation(); setIsOpen(false) } : undefined}
      >
        {isOpen ? '✕ close' : 'click to open ↩'}
      </span>
    </div>
  )
}


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)


  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add('modal--open')
    } else {
      document.body.classList.remove('modal--open')
    }
    return () => document.body.classList.remove('modal--open')
  }, [modalOpen])

  function updateGradient(e) {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const bg = document.getElementById('background')
    if (bg) {
      bg.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #fceabb, transparent 50%),
        radial-gradient(circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, #84ddda, transparent 50%)`
    }
  }

  return (
    <>
      <canvas id="background"></canvas>

      <section id="landing-page" onMouseMove={updateGradient}>
        <Navbar onContactClick={() => setModalOpen(true)} />

        <header className="header">
          <div className="home-hero hero-wrapper">
            {/* LEFT */}
            <div className="home-hero__left hero-left">
              <p className="home-hero__label">UX Designer · Sydney, Australia</p>
              <h1 className="home-hero__title">Hey, I'm Natasha Png</h1>
              <p className="home-hero__para">
                A User Experience Designer based in Sydney, Australia.
                And yes that is my surname (no jpeg please!)
              </p>
              <div className="social__list">
                <a href="https://www.linkedin.com/in/natasha-p-ng-9a0a41269/" target="_blank" rel="noreferrer" className="social__link click">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/cubelemon" target="_blank" rel="noreferrer" className="social__link click">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/assets/home/resume.pdf" target="_blank" rel="noreferrer" className="social__link click">
                  <i className="fas fa-file-pdf"></i>
                </a>
              </div>
              <a href="#projects" className="scroll">
                <div className="scroll__icon click"></div>
              </a>
            </div>

            {/* RIGHT */}
            <div className="home-hero__right hero-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <FileCard />
            </div>
          </div>
        </header>

        <button className="mail__btn click" onClick={() => setModalOpen(true)}>
          <i className="fa-solid fa-envelope"></i>
        </button>

        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </section>

      {/* Design philosophy */}
      <section id="design-philosophy">
        <p className="callout__title">
          I treat every design as unfinished: <span className="callout__accent">never perfect, always evolving.</span> The next step in innovation happens when we build with users, not just for them.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="row">
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.5rem' }}>Selected Work</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#051616', marginBottom: '0.75rem', lineHeight: 1.1 }}>Product & UX/UI Design</h2>
              <p style={{ fontSize: '1rem', color: '#777', maxWidth: 600, lineHeight: 1.7, marginBottom: 0 }}>
                These are my main product and UX/UI design projects, where I led end-to-end design from research through to prototype.
              </p>
            </div>
            <div className="projects__grid">
              {/* Featured — BabyCircle */}
              <Link
                to="/projects/babycircle"
                className="pg-card pg-card--featured project-card"
                style={{ backgroundImage: "url('/assets/home/babycircle_cover.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#e8f4f3' }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(12,149,144,0.3) 0%, transparent 60%), linear-gradient(to top, #e8f4f3 40%, rgba(232,244,243,0.7) 100%)', zIndex: 0 }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center', opacity: 0, pointerEvents: 'none', zIndex: 2, transition: 'opacity 300ms ease' }} className="pg-card__hover-overlay">
                  <p style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, color: '#051616', margin: 0 }}>For when you need someone who thinks in systems</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {['UX Research', 'Design Systems', 'Mobile App'].map(t => (
                      <span key={t} style={{ borderRadius: '999px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', background: 'rgba(5,22,22,0.1)', color: '#051616', border: '1px solid rgba(5,22,22,0.25)' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pg-card__content" style={{ position: 'relative', zIndex: 1 }}>
                  <div className="pg-pills card-pills">
                    {['UX Design', 'Design Systems', 'Figma', 'User Research'].map(t => (
                      <span key={t} style={{ background: 'rgba(5,22,22,0.08)', color: '#051616', border: '1px solid rgba(5,22,22,0.2)' }} className="pg-pill">{t}</span>
                    ))}
                  </div>
                  <h2 className="pg-title pg-title--featured" style={{ color: '#051616' }}>BabyCircle</h2>
                  <p className="pg-desc" style={{ color: 'rgba(5,22,22,0.7)' }}>A parental support app built around a trusted circle</p>
                  <p className="pg-meta" style={{ color: 'rgba(5,22,22,0.5)' }}>Design Systems&nbsp;&nbsp;·&nbsp;&nbsp;University of Sydney · 2025</p>
                </div>
              </Link>

              {/* Bottom row */}
              <div className="projects__bottom-row">
                <Link
                  to="/projects/herculabs"
                  className="pg-card pg-card--light project-card"
                  style={{ backgroundImage: "url('/assets/home/Herculabs_cover.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f5f5f0 40%, rgba(245,245,240,0.6) 100%)', zIndex: 0 }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center', opacity: 0, pointerEvents: 'none', zIndex: 2, transition: 'opacity 300ms ease' }} className="pg-card__hover-overlay">
                    <p style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, color: 'white', margin: 0 }}>For when you need a researcher who goes beyond the screen</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {['UX Research', 'Interaction Design', 'Prototyping'].map(t => (
                        <span key={t} style={{ borderRadius: '999px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pg-card__content" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="pg-pills card-pills">
                      {['UX Design', 'Interaction Design', 'Figma'].map(t => (
                        <span key={t} className="pg-pill pg-pill--light">{t}</span>
                      ))}
                    </div>
                    <h2 className="pg-title pg-title--half">Herculabs</h2>
                    <p className="pg-desc pg-desc--light">A VR Olympic athlete simulation booth</p>
                    <p className="pg-meta pg-meta--light">UX Designer&nbsp;&nbsp;·&nbsp;&nbsp;University of Sydney · 2024</p>
                  </div>
                </Link>

                <Link
                  to="/projects/rajang"
                  className="pg-card pg-card--dark project-card"
                  style={{ backgroundImage: "url('/assets/home/Rajang_cover.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 40%, rgba(10,10,10,0.7) 100%)', zIndex: 0 }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '85%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center', opacity: 0, pointerEvents: 'none', zIndex: 2, transition: 'opacity 300ms ease' }} className="pg-card__hover-overlay">
                    <p style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, color: 'white', margin: 0 }}>For when you need a designer who gets content strategy</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {['Content Design', 'Web Design', 'SEO'].map(t => (
                        <span key={t} style={{ borderRadius: '999px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pg-card__content" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="pg-pills card-pills">
                      {['Web Design', 'Content Design', 'SEO', 'Wix'].map(t => (
                        <span key={t} className="pg-pill pg-pill--dark">{t}</span>
                      ))}
                    </div>
                    <h2 className="pg-title pg-title--half">Rajang</h2>
                    <p className="pg-desc pg-desc--dark">A website revamp with a content design twist</p>
                    <p className="pg-meta pg-meta--dark">UX/UI Design Intern&nbsp;&nbsp;·&nbsp;&nbsp;Rajang Digital · 2024</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond UX */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.5rem' }}>Beyond UX</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#051616', marginBottom: '0.75rem' }}>Other work I am proud of</h2>
            <p style={{ fontSize: '1rem', color: '#777', maxWidth: 600, lineHeight: 1.7 }}>
              Not everything I make is a UX project. This is where I get to show the rest: 3D design, physical prototyping, and the projects that remind me why I love making things.
            </p>
          </div>

          <a href="/projects/satujohan" style={{ textDecoration: 'none' }}>
            <div
              style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', background: '#faf7f2', borderRadius: '1.5rem', padding: '2rem', cursor: 'pointer', transition: 'transform 300ms ease, box-shadow 300ms ease', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div style={{ width: 200, height: 160, borderRadius: '1rem', overflow: 'hidden', flexShrink: 0, background: '#e0e0e0' }}>
                <img src="/assets/satujohan/cover.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Satu Johan" />
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.5rem' }}>3D Design & Physical Prototyping</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#051616', marginBottom: '0.5rem' }}>Satu Johan</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                  A chocolate artefact celebrating Malaysia's ONE Championship Muay Thai fighter, Johan Ghazali. Built in Fusion 360, laser cut, and rendered in Blender.
                </p>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0c9590' }}>View project →</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* About teaser */}
      <section className="about-teaser">
        <h2 className="about-teaser__title">Who is Natasha?</h2>
        <p className="about-teaser__text">
          Curious to learn more about me, my journey, and what drives my design work?
        </p>
        <Link to="/about" className="about-teaser__link">Check out my About page →</Link>
      </section>

      <Footer onContactClick={() => setModalOpen(true)} />
    </>
  )
}
