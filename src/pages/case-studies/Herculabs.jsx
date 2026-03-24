import CaseStudyLayout from '../../components/CaseStudyLayout'

const META = [
  { label: 'Role', value: 'UX Designer' },
  { label: 'Team', value: 'Group Project' },
  { label: 'Year', value: '2024' },
  { label: 'Tools', value: 'Figma, Adobe Suite' },
]

// Reusable placeholder
function Placeholder({ label, tall }) {
  return (
    <div className={`cs-placeholder ${tall ? 'cs-placeholder--tall' : 'cs-placeholder--short'}`}>
      <div className="cs-placeholder__icon"><i className="fas fa-image"></i></div>
      <div className="cs-placeholder__label">{label}</div>
    </div>
  )
}

export default function Herculabs() {
  return (
    <CaseStudyLayout
      heroTag="UX Design Case Study"
      heroTitle="Herculabs"
      heroSubtitle="An Olympic athlete simulation booth designed to immerse fans in the physical and mental experience of elite competition."
      meta={META}
      coverImg="/assets/Herculabs_cover.png"
      coverAlt="Herculabs cover"
    >

      {/* Overview */}
      <section className="cs-section">
        <p className="cs-section__label">Overview</p>
        <h2 className="cs-section__title">Project Overview</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Write a 2–3 sentence overview of the Herculabs project here. What is it, who is it for, and what problem does it solve? */}
          [Replace this with your project overview — what Herculabs is, who it's for, and the core problem it addresses.]
        </p>
      </section>

      <hr className="cs-divider" />

      {/* Problem */}
      <section className="cs-section">
        <p className="cs-section__label">The Problem</p>
        <h2 className="cs-section__title">Problem Statement</h2>
        <div className="cs-problem">
          <p className="cs-problem__title">Problem Statement</p>
          <p className="cs-problem__text">
            {/* ✏️ REPLACE: Add your problem statement here */}
            [Replace with your problem statement from the Herculabs case study.]
          </p>
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Research */}
      <section className="cs-section">
        <p className="cs-section__label">Research</p>
        <h2 className="cs-section__title">Research & Insights</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Describe your research methods and key insights */}
          [Describe your research approach — user interviews, observation, secondary research, etc. and the key insights that shaped your design decisions.]
        </p>
        <Placeholder label="Research findings / affinity diagram / user quotes" tall />
      </section>

      <hr className="cs-divider" />

      {/* Design Process */}
      <section className="cs-section--wide">
        <p className="cs-section__label">Design Process</p>
        <h2 className="cs-section__title">Ideation & Concept Development</h2>
        <p className="cs-section__body" style={{ maxWidth: 800 }}>
          {/* ✏️ REPLACE: Describe your ideation process */}
          [Describe how you went from research insights to design concepts. What were the early ideas? What did you explore and discard?]
        </p>
        <div className="cs-img-row">
          <Placeholder label="Sketches / wireframes" tall />
          <Placeholder label="Concept exploration" tall />
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Final Design */}
      <section className="cs-section--wide">
        <p className="cs-section__label">Final Design</p>
        <h2 className="cs-section__title">The Simulation Experience</h2>
        <p className="cs-section__body" style={{ maxWidth: 800 }}>
          {/* ✏️ REPLACE: Describe the final booth design and experience */}
          [Describe the final Herculabs booth experience — what it looks like, how users interact with it, and what they go through.]
        </p>
        <Placeholder label="Final booth design / prototype screens" tall />
        <div className="cs-img-row" style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Detail view 1" tall />
          <Placeholder label="Detail view 2" tall />
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Reflection */}
      <section className="cs-section">
        <p className="cs-section__label">Reflection</p>
        <h2 className="cs-section__title">Outcomes & Learnings</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: What did you learn? What went well? What would you do differently? */}
          [Reflect on the project outcomes, what you personally contributed, what you learned, and what you'd do differently given more time.]
        </p>
        <Placeholder label="User testing / feedback / outcome photos" />
      </section>

    </CaseStudyLayout>
  )
}
