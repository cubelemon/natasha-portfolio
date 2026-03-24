import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

const EXPERIENCE = [
  { title: 'Rajang Digital Solution - IT & Services', subtitle: 'UX/UI Design Intern', date: '2024–2025' },
  { title: 'Muafakat - IT & Services', subtitle: 'Web Designer & Developer', date: '2024' },
  { title: 'USU - Retail', subtitle: 'Retail Team Member', date: '2024–2025' },
]

const EDUCATION = [
  { title: 'University of Sydney', subtitle: 'Bachelor of Interaction Design', date: '2023–2026' },
  { title: 'FrontEnd Simplified', subtitle: 'Front-End Engineering', date: '2024–2025' },
  { title: 'Chung Hua Middle School No.1', subtitle: 'Science Stream UEC', date: '2017–2022' },
]

const TOOLS = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png", name: "HTML" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png", name: "CSS" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png", name: "JavaScript" },
  { src: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png", name: "React" },
  { src: "https://www.figma.com/community/resource/b2593c93-dcd3-4eab-942a-b7703505d1eb/thumbnail", name: "Figma" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png", name: "Illustrator" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png", name: "Photoshop" },
]

const LANGUAGES = [
  { src: '/assets/language/Language=English.svg', alt: 'English' },
  { src: '/assets/language/Language=Chinese.svg', alt: 'Chinese' },
  { src: '/assets/language/Language=Hokkien.svg', alt: 'Hokkien' },
  { src: '/assets/language/Language=Malay.png', alt: 'Malay' },
]

export default function About() {
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

      <section id="landing-page" className="about--landing" onMouseMove={updateGradient}>
        <Navbar
          onContactClick={() => setModalOpen(true)}
          onContrastToggle={() => setDarkTheme(p => !p)}
        />

        <header className="header">
          <div className="header__content--wrapper">
            <figure className="me__img--wrapper">
              <img src="/assets/about/me.PNG" alt="Natasha" />
            </figure>
            <div className="header__content">
              <h1 className="about--title text--blue">Hey I'm Natasha,</h1>
              <h1 className="about--title">
                a UX Designer based in <span className="text--blue">Sydney</span>
              </h1>
              <p className="about--subtitle">
                These are some words my friends describe me as :) Continue to read to learn more about me &lt;3
              </p>
              <div className="social__list">
                <a href="https://www.linkedin.com/in/natasha-p-ng-9a0a41269/" target="_blank" rel="noreferrer" className="social__link bg--blue click">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/cubelemon" target="_blank" rel="noreferrer" className="social__link bg--blue click">
                  <i className="fab fa-github"></i>
                </a>
                <a href="/assets/Natasha_Resume_February_2025.pdf" target="_blank" rel="noreferrer" className="social__link bg--blue click">
                  <i className="fas fa-file-pdf"></i>
                </a>
              </div>
            </div>
          </div>
        </header>

        <button className="mail__btn click" onClick={() => setModalOpen(true)}>
          <i className="fa-solid fa-envelope"></i>
        </button>

        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </section>

      {/* Experience & Education */}
      <section id="about__experience">
        <div className="container">
          <div className="row">
            <div className="direction__column">
              <div className="row__half row__left">
                <h2 className="casestudy__title">Experience</h2>
                <ul className="exp__list">
                  {EXPERIENCE.map((item) => (
                    <li className="exp__list--item" key={item.title}>
                      <div className="list__left">
                        <h3 className="list__title">{item.title}</h3>
                        <h3 className="list__subtitle">{item.subtitle}</h3>
                      </div>
                      <div className="list__right">
                        <h3 className="list__date">{item.date}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="row__half work">
                <h2 className="casestudy__title">Education</h2>
                <ul className="exp__list">
                  {EDUCATION.map((item) => (
                    <li className="exp__list--item" key={item.title}>
                      <div className="list__left">
                        <h3 className="list__title">{item.title}</h3>
                        <h3 className="list__subtitle">{item.subtitle}</h3>
                      </div>
                      <div className="list__right">
                        <h3 className="list__date">{item.date}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Tools */}
      <section id="about__me">
        <div className="row">
          <div className="container direction__row">
            <h2 className="about--subtitle">These are the languages I speak:</h2>
            <ul className="language__list">
              {LANGUAGES.map((lang) => (
                <figure className="language__wrapper" key={lang.alt}>
                  <img src={lang.src} alt={lang.alt} className="bahasa" />
                </figure>
              ))}
            </ul>

            <h2 className="about--subtitle">Oh and these too!</h2>
            <div className="modal__languages language__row">
              {TOOLS.map(({ src, name }) => (
                <figure className="modal__language" key={name}>
                  <img className="modal__language--img" src={src} alt={name} />
                  <span className="language__name">{name}</span>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer onContactClick={() => setModalOpen(true)} />
    </>
  )
}
