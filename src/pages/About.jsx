import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

const LANGUAGES = [
  { src: '/assets/about/Language=English.svg', alt: 'English' },
  { src: '/assets/about/Language=Chinese.svg', alt: 'Chinese' },
  { src: '/assets/about/Language=Hokkien.svg', alt: 'Hokkien' },
  { src: '/assets/about/Language=Malay.png', alt: 'Malay' },
]

const TOOLS = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', name: 'HTML' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', name: 'CSS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', name: 'Illustrator' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', name: 'Photoshop' },
]

const SIDE_QUESTS = [
  {
    img: '/assets/about/muaythai.png',
    caption: "I train to reset. There's something about hitting things that clears the mind. 🥊",
    rotate: '-2deg',
  },
  {
    img: '/assets/about/bouldering.png',
    caption: 'Problem solving, but make it vertical. 🧗',
    rotate: '1deg',
  },
  {
    img: '/assets/about/hiking.png',
    caption: 'Best thinking happens on a trail. 🥾',
    rotate: '-1deg',
  },
]

export default function About() {
  const [modalOpen, setModalOpen] = useState(false)
  const [galleryOffset, setGalleryOffset] = useState(0)
  const galleryRef = useRef(null)
  const stickyRef = useRef(null)

  useEffect(() => {
    if (modalOpen) document.body.classList.add('modal--open')
    else document.body.classList.remove('modal--open')
    return () => document.body.classList.remove('modal--open')
  }, [modalOpen])

  // Polaroid scroll parallax
  useEffect(() => {
    function handleScroll() {
      if (!galleryRef.current) return
      const rect = galleryRef.current.getBoundingClientRect()
      const distanceFromBottom = window.innerHeight - rect.top
      if (distanceFromBottom > 0) {
        setGalleryOffset(distanceFromBottom * 0.3)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mobile sticky horizontal scroll
  useEffect(() => {
    const wrapper = stickyRef.current
    if (!wrapper) return
    function handleStickyScroll() {
      if (window.innerWidth > 768) return
      const wrapperTop = wrapper.offsetTop
      const scrolled = window.scrollY - wrapperTop
      const maxScroll = wrapper.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, scrolled / maxScroll))
      const track = wrapper.querySelector('.polaroid-track')
      if (!track) return
      const maxTranslate = track.scrollWidth - window.innerWidth
      track.style.transform = `translateX(-${progress * maxTranslate}px)`
    }
    window.addEventListener('scroll', handleStickyScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleStickyScroll)
  }, [])

  // Scroll reveal observer
  useEffect(() => {
    const els = document.querySelectorAll('[data-scroll-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed')
        })
      },
      { threshold: 0.15 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ab-hero__left  { animation: fadeInLeft  800ms ease both; }
        .ab-hero__right { animation: fadeInRight 800ms ease both; }

        [data-scroll-reveal] {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        [data-scroll-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Side quest card stagger via nth-child */
        [data-scroll-reveal].revealed .sq-card:nth-child(1) { transition-delay: 0ms; }
        [data-scroll-reveal].revealed .sq-card:nth-child(2) { transition-delay: 150ms; }
        [data-scroll-reveal].revealed .sq-card:nth-child(3) { transition-delay: 300ms; }
        .sq-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        [data-scroll-reveal].revealed .sq-card {
          opacity: 1;
          transform: translateY(0);
        }

        /* Override global reveal for rows that use child-level stagger */
        .ab-stamps-row, .ab-tools-row {
          opacity: 1 !important;
          transform: none !important;
        }

        /* Language stamps stagger */
        .ab-stamps-row .ab-stamp-wrap {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .ab-stamps-row.revealed .ab-stamp-wrap:nth-child(1) { transition-delay: 0ms; }
        .ab-stamps-row.revealed .ab-stamp-wrap:nth-child(2) { transition-delay: 100ms; }
        .ab-stamps-row.revealed .ab-stamp-wrap:nth-child(3) { transition-delay: 200ms; }
        .ab-stamps-row.revealed .ab-stamp-wrap:nth-child(4) { transition-delay: 300ms; }
        .ab-stamps-row.revealed .ab-stamp-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tools stagger */
        .ab-tools-row .ab-tool {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 600ms ease, transform 600ms ease;
        }
        .ab-tools-row.revealed .ab-tool:nth-child(1) { transition-delay: 0ms; }
        .ab-tools-row.revealed .ab-tool:nth-child(2) { transition-delay: 80ms; }
        .ab-tools-row.revealed .ab-tool:nth-child(3) { transition-delay: 160ms; }
        .ab-tools-row.revealed .ab-tool:nth-child(4) { transition-delay: 240ms; }
        .ab-tools-row.revealed .ab-tool:nth-child(5) { transition-delay: 320ms; }
        .ab-tools-row.revealed .ab-tool:nth-child(6) { transition-delay: 400ms; }
        .ab-tools-row.revealed .ab-tool:nth-child(7) { transition-delay: 480ms; }
        .ab-tools-row.revealed .ab-tool {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="ab-page-wrapper">
        <Navbar onContactClick={() => setModalOpen(true)} />

        {/* ── SECTION 1: HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero__left">
            <p className="ab-label">About me</p>
            <h1 className="ab-hero__name">Hey I'm Natasha,</h1>
            <h1 className="ab-hero__sub">a UX Designer based in Sydney</h1>
            <p className="ab-hero__para">
              These are some words my friends describe me as :) Continue to read to learn more about me &lt;3
            </p>
            <div className="social__list">
              <a href="https://www.linkedin.com/in/natasha-p-ng-9a0a41269/" target="_blank" rel="noreferrer" className="social__link bg--blue click">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/cubelemon" target="_blank" rel="noreferrer" className="social__link bg--blue click">
                <i className="fab fa-github"></i>
              </a>
              <a href="/assets/home/resume.pdf" target="_blank" rel="noreferrer" className="social__link bg--blue click">
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>
          </div>
          <div className="ab-hero__right">
            <figure className="me__img--wrapper">
              <img src="/assets/about/me_cover-img.PNG" alt="Natasha" />
            </figure>
          </div>
        </section>

        {/* ── SECTION 2: SIDE QUESTS ── */}
        <section className="ab-section ab-side-quests" data-scroll-reveal>
          <div className="ab-card-container">
            <p className="ab-label">Side Quests</p>
            <h2 className="ab-section__title">I'm a major side quester.</h2>
            <p className="ab-section__para">
              Design resets when I move. Whether I'm throwing punches, scaling walls, or finding a new trail, moving is what brings me back to my best creative self.
            </p>
            <div className="sq-row">
              {SIDE_QUESTS.map((card, i) => (
                <div
                  key={i}
                  className="sq-card"
                  style={{ transform: `rotate(${card.rotate})` }}
                >
                  <div className="sq-card__img-wrap">
                    <img src={card.img} alt={card.caption} className="sq-card__img" />
                  </div>
                  <p className="sq-card__caption">{card.caption}</p>
                  {card.img === '/assets/about/muaythai.png' && (
                    <div style={{ padding: '0 1rem 1rem' }}>
                      <a href="/projects/satujohan" style={{ display: 'block', textAlign: 'center', background: '#0c9590', color: 'white', fontWeight: 700, fontSize: 12, textDecoration: 'none', padding: '8px 14px', borderRadius: '999px', letterSpacing: '0.03em', transition: 'background 300ms ease' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#097a75'}
                        onMouseLeave={e => e.currentTarget.style.background = '#0c9590'}
                      >
                        See how this inspired a project →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: POLAROID SCROLL GALLERY ── */}
        <div className="polaroid-scroll-wrapper" ref={stickyRef}>
          {/* Mobile sticky layer */}
          <div className="polaroid-sticky">
            <div className="polaroid-track">
              <div className="polaroid-card-mobile">
                <img src="/assets/about/suede1.png" alt="SUEDE event" />
                <p>Running industry events with SUEDE 🎪</p>
              </div>
              <div className="polaroid-card-mobile">
                <img src="/assets/about/suede2.png" alt="SUEDE event" />
                <p>Connecting designers with the industry ✨</p>
              </div>
              <div className="polaroid-card-mobile">
                <img src="/assets/about/life-outside.png" alt="Life outside the screen" />
                <p>Life outside the screen 🌿</p>
              </div>
            </div>
          </div>
          {/* Desktop translateX animation (hidden on mobile via CSS) */}
          <section className="polaroid-desktop" style={{ width: '100%', overflow: 'hidden', height: '420px', position: 'relative', margin: '2rem 0' }}>
            <div
              ref={galleryRef}
              style={{
                display: 'flex',
                gap: '2rem',
                padding: '2rem 4rem',
                width: 'max-content',
                transform: `translateX(calc(60vw - ${galleryOffset}px))`,
                transition: 'transform 0.1s linear',
              }}
            >
              <div style={{ width: '260px', background: 'white', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', padding: '1rem 1rem 2.5rem 1rem', borderRadius: '4px', transform: 'rotate(2deg)', flexShrink: 0 }}>
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src="/assets/about/suede1.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="SUEDE event" />
                </div>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#555', textAlign: 'center', marginTop: '0.75rem' }}>Running industry events with SUEDE 🎪</p>
              </div>
              <div style={{ width: '260px', background: 'white', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', padding: '1rem 1rem 2.5rem 1rem', borderRadius: '4px', transform: 'rotate(-1.5deg)', flexShrink: 0 }}>
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src="/assets/about/suede2.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="SUEDE event" />
                </div>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#555', textAlign: 'center', marginTop: '0.75rem' }}>Connecting designers with the industry ✨</p>
              </div>
              <div style={{ width: '260px', background: 'white', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', padding: '1rem 1rem 2.5rem 1rem', borderRadius: '4px', transform: 'rotate(3deg)', flexShrink: 0 }}>
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src="/assets/about/life-outside.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Life outside the screen" />
                </div>
                <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#555', textAlign: 'center', marginTop: '0.75rem' }}>Life outside the screen 🌿</p>
              </div>
            </div>
          </section>
        </div>

        {/* ── SECTION 4: SUEDE ── */}
        <section className="ab-section" data-scroll-reveal>
          <div className="ab-suede-container">
            <div className="ab-suede__left">
              <p className="ab-label">Leadership</p>
              <h2 className="ab-section__title ab-suede__title">Industries Events Director, SUEDE</h2>
              <p className="ab-section__para">
                SUEDE is the Sydney University Experience Design Society. As Industries Events Director, I manage relationships with industry partners, coordinate events from planning to delivery, and connect design students with real-world opportunities. It's where my design thinking meets stakeholder management.
              </p>
              <p className="ab-suede__date">Sydney University Experience Design Society · 2024–Present</p>
              <a
                href="https://www.linkedin.com/posts/natasha-png_inside-hatch-how-design-shapes-recruitment-ugcPost-7439941890772246528-kpMu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHT2EgBPWnadIC2WYZIFNaE0yG91BGWweU"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', background: '#0A66C2', color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', padding: '0.6rem 1.25rem', borderRadius: '999px', transition: 'background 300ms ease' }}
                onMouseEnter={e => e.currentTarget.style.background = '#084e96'}
                onMouseLeave={e => e.currentTarget.style.background = '#0A66C2'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                See our latest event recap
              </a>
            </div>
            <div className="ab-suede__right">
              {[
                'Managing industry partner relationships',
                'Writing and sending professional outreach',
                'Coordinating events end-to-end',
              ].map((item, i) => (
                <div key={i} className="ab-suede__bullet">
                  <span className="ab-suede__dot"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: LANGUAGES & TOOLS ── */}
        <section className="ab-section">
          <div className="ab-langs-container">
            <h2 className="ab-langs__heading">These are the languages I speak:</h2>
            <ul className="language__list ab-stamps-row" data-scroll-reveal>
              {LANGUAGES.map((lang, i) => (
                <div
                  key={lang.alt}
                  className="ab-stamp-wrap"
                  style={{ transitionDelay: `${i * 100}ms`, display: 'inline-block', transition: 'transform 300ms ease' }}
                >
                  <figure
                    className="language__wrapper ab-stamp"
                    onMouseEnter={e => e.currentTarget.style.transform = 'rotate(5deg) scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = ''}
                    style={{ transition: 'transform 300ms ease', cursor: 'default' }}
                  >
                    <img src={lang.src} alt={lang.alt} className="bahasa" />
                  </figure>
                </div>
              ))}
            </ul>

            <h2 className="ab-langs__heading" style={{ marginTop: '2rem' }}>Oh and these too!</h2>
            <div className="modal__languages language__row ab-tools-row" data-scroll-reveal>
              {TOOLS.map(({ src, name }, i) => (
                <figure
                  className="modal__language ab-tool"
                  key={name}
                  style={{ transitionDelay: `${i * 80}ms`, transition: 'transform 300ms ease', cursor: 'default' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px) scale(1.1)'}
                  onMouseLeave={e => e.currentTarget.style.transform = ''}
                >
                  <img
                    className="modal__language--img"
                    src={src}
                    alt={name}
                    style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                  />
                  <span className="language__name">{name}</span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Footer onContactClick={() => setModalOpen(true)} />
      </div>

      <button className="mail__btn click" onClick={() => setModalOpen(true)}>
        <i className="fa-solid fa-envelope"></i>
      </button>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
