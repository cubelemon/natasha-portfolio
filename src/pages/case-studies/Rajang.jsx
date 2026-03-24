import CaseStudyLayout from '../../components/CaseStudyLayout'

const META = [
  { label: 'Role', value: 'UX/UI Design Intern' },
  { label: 'Team', value: 'Rajang Digital Solutions' },
  { label: 'Year', value: '2024–2025' },
  { label: 'Tools', value: 'Figma, Wix Studio' },
]

function Placeholder({ label, tall }) {
  return (
    <div className={`cs-placeholder ${tall ? 'cs-placeholder--tall' : 'cs-placeholder--short'}`}>
      <div className="cs-placeholder__icon"><i className="fas fa-image"></i></div>
      <div className="cs-placeholder__label">{label}</div>
    </div>
  )
}

export default function Rajang() {
  return (
    <CaseStudyLayout
      heroTag="Web Design & Development — Internship"
      heroTitle="Rajang Website Revamp"
      heroSubtitle="A full redesign and rebuild of Rajang Digital Solutions' website, improving clarity, visual identity, and user experience."
      meta={META}
      coverImg="/assets/Rajang_cover.png"
      coverAlt="Rajang cover"
    >

      {/* Overview */}
      <section className="cs-section">
        <p className="cs-section__label">Overview</p>
        <h2 className="cs-section__title">Project Overview</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Brief intro to the Rajang internship and what the revamp involved */}
          [Describe the Rajang internship context — who they are, what the website was like before, and what you were asked to do.]
        </p>
      </section>

      <hr className="cs-divider" />

      {/* Problem */}
      <section className="cs-section">
        <p className="cs-section__label">The Challenge</p>
        <h2 className="cs-section__title">What needed to change?</h2>
        <div className="cs-problem">
          <p className="cs-problem__title">Problem Statement</p>
          <p className="cs-problem__text">
            {/* ✏️ REPLACE: The core problem with the existing site */}
            [Replace with the key usability or visual problems identified with the existing Rajang website.]
          </p>
        </div>
        <p className="cs-section__body" style={{ marginTop: '1.5rem' }}>
          {/* ✏️ REPLACE: Any additional context about the business goals */}
          [Any additional context about business goals, target audience, or constraints from the internship.]
        </p>
      </section>

      <hr className="cs-divider" />

      {/* Before / After */}
      <section className="cs-section--wide">
        <p className="cs-section__label">Before & After</p>
        <h2 className="cs-section__title">The Old vs The New</h2>
        <div className="cs-img-row">
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#777', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Before</p>
            <Placeholder label="Old website screenshot" tall />
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0c9590', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>After</p>
            <Placeholder label="New website design" tall />
          </div>
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Design Decisions */}
      <section className="cs-section">
        <p className="cs-section__label">Design Decisions</p>
        <h2 className="cs-section__title">Key Design Decisions</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: What design choices did you make and why? (typography, layout, colour, navigation, etc.) */}
          [Walk through the most important design decisions you made — layout changes, typography, colour palette, navigation restructure, etc. Explain the rationale.]
        </p>
        <Placeholder label="Design system / component library / style guide" tall />
      </section>

      <hr className="cs-divider" />

      {/* Development */}
      <section className="cs-section">
        <p className="cs-section__label">Development</p>
        <h2 className="cs-section__title">Building in Wix Studio</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: What was the dev/build process like in Wix Studio? Any challenges? */}
          [Describe the implementation process in Wix Studio — what you built, any technical challenges, how you translated the Figma designs to the live site.]
        </p>
        <Placeholder label="Wix Studio build / live site screenshot" />
      </section>

      <hr className="cs-divider" />

      {/* Reflection */}
      <section className="cs-section">
        <p className="cs-section__label">Reflection</p>
        <h2 className="cs-section__title">Outcomes & Learnings</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Outcomes, feedback from the team, what you learned */}
          [Reflect on what was achieved, any feedback from the Rajang team, and what skills or insights you gained from this internship project.]
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://www.behance.net/gallery/223392855/Rajang-Website-Revamp" target="_blank" rel="noreferrer" className="project__button--internal">
            View on Behance →
          </a>
        </div>
      </section>

    </CaseStudyLayout>
  )
}
