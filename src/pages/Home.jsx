import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

const PROJECTS = [
  {
    id: 'herculabs',
    title: 'Herculabs',
    subtitle: 'UX Design, Product Design, Interaction Design',
    para: 'An Olympics Simulation Booth | University of Sydney | 2024',
    img: '/assets/Herculabs_cover.png',
    internal: true,
    href: '/projects/herculabs',
  },
  {
    id: 'rajang',
    title: 'Rajang',
    subtitle: 'Web Design & Development - Figma, Wix',
    para: 'A Website Redesign | Rajang Internship | 2024',
    img: '/assets/Rajang_cover.png',
    internal: true,
    href: '/projects/rajang',
  },
  {
    id: 'babycircle',
    title: 'BabyCircle',
    subtitle: 'UX/UI Design, Product Design',
    para: 'A Parental Support App | University of Sydney | 2025',
    img: '/assets/babycircle_cover.png',
    internal: true,
    href: '/projects/babycircle',
  },
  {
    id: 'muafakat',
    title: 'Muafakat Website',
    subtitle: 'Website Designer & Developer - Figma, HTML, CSS, JavaScript',
    para: 'Malaysian Sport Competition Website | Muafakat | 2024',
    img: '/assets/Muafakat.png',
    internal: false,
    href: 'https://www.muafakatgames2024.com/',
    links: [
      { icon: 'fas fa-link', href: 'https://www.muafakatgames2024.com/' },
      { icon: 'fab fa-github', href: 'https://github.com/cubelemon/Muafakat' },
    ],
  },
  {
    id: 'movieplug',
    title: 'Movie Plug Website',
    subtitle: 'Frontend Developer - Figma, HTML, CSS, JavaScript, API',
    para: 'Movie Finder Website | FrontEnd Simplified | 2024',
    img: '/assets/Movie_plug.png',
    internal: false,
    href: 'https://cubelemon.github.io/JavaScript-Final-Project/',
    links: [
      { icon: 'fas fa-link', href: 'https://cubelemon.github.io/JavaScript-Final-Project/' },
      { icon: 'fab fa-github', href: 'https://github.com/cubelemon/JavaScript-Final-Project' },
    ],
  },
]

const DESIGNS = [
  { img: '/assets/scoop-for-justice.png', caption: 'Social Media Campaign - Adobe XD, Adobe Photoshop', subtitle: 'University of Sydney | 2024' },
  { img: '/assets/semporna.png', caption: 'Destination Website - Figma, HTML, CSS, JavaScript', subtitle: 'University of Sydney | 2023' },
  { img: '/assets/Kavaguava.png', caption: 'Instagram Story Campaign - Figma, Adobe XD, Adobe Photoshop', subtitle: 'University of Sydney | 2023' },
]

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const backgroundRef = useRef(null)

  // Apply dark theme class to body
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
    return () => document.body.classList.remove('dark-theme')
  }, [darkTheme])

  // Modal open/close body class
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
        <Navbar
          onContactClick={() => setModalOpen(true)}
          onContrastToggle={() => setDarkTheme(p => !p)}
        />

        <header className="header">
          <div className="header__content">
            <div className="header__container">
              <h1 className="title">Hey, I'm Natasha Png</h1>
              <div className="header__img--wrapper">
                <img src="/assets/Lemon.png" className="header__img" alt="Lemon graphic" />
              </div>
            </div>
            <h2 className="header__para">
              A User Experience Designer based in Sydney, Australia.
              And yes that is my surname (no jpeg please!)
            </h2>
            <div className="social__list">
              <a href="https://www.linkedin.com/in/natasha-p-ng-9a0a41269/" target="_blank" rel="noreferrer" className="social__link click">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/cubelemon" target="_blank" rel="noreferrer" className="social__link click">
                <i className="fab fa-github"></i>
              </a>
              <a href="/assets/Natasha_Resume_February_2025.pdf" target="_blank" rel="noreferrer" className="social__link click">
                <i className="fas fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </header>

        <button className="mail__btn click" onClick={() => setModalOpen(true)}>
          <i className="fa-solid fa-envelope"></i>
        </button>

        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>

        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </section>

      {/* Design philosophy */}
      <section id="design-philosophy">
        <div className="container callout__container">
          <h2 className="callout__title">
            I treat every design as unfinished: <span className="italics">never perfect, always evolving.</span> The next step in innovation happens when we build with users, not just for them.
          </h2>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Here are some of my <span className="text--orange">Projects</span>
            </h1>
            <ul className="project__list">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          </div>
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

      {/* Other designs */}
      <section id="designs">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Here are some of my <span className="text--orange">other designs</span>
            </h1>
            <ul className="design__list">
              {DESIGNS.map((d, i) => (
                <li className="design" key={i}>
                  <div className="design__img--wrapper">
                    <img src={d.img} className="design__img" alt={d.caption} />
                  </div>
                  <div className="design__description">
                    <h3 className="design__caption">{d.caption}</h3>
                    <h3 className="design__subtitle grey">{d.subtitle}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer onContactClick={() => setModalOpen(true)} />
    </>
  )
}

function ProjectCard({ project }) {
  const { title, subtitle, para, img, internal, href, links } = project

  const inner = (
    <li className="project">
      <div className="project__wrapper">
        <img src={img} className="project__img" alt={title} />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--sub-title">{subtitle}</h4>
          <p className="project__description--para">{para}</p>
          <div className="project__description--links">
            {internal ? (
              <span className="project__button">View Project</span>
            ) : links ? (
              links.map((l, i) => (
                <a key={i} href={l.href} className="project__description--links" target="_blank" rel="noreferrer"
                  onClick={e => e.stopPropagation()}>
                  <i className={l.icon}></i>
                </a>
              ))
            ) : null}
          </div>
        </div>
      </div>
    </li>
  )

  if (internal) {
    return (
      <Link to={href} className="project__link">
        {inner}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="project__link">
      {inner}
    </a>
  )
}
