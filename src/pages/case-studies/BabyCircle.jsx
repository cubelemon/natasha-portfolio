import CaseStudyLayout from '../../components/CaseStudyLayout'

const META = [
  { label: 'Role', value: 'UX Designer' },
  { label: 'Context', value: 'Final Studio Project' },
  { label: 'Year', value: '2025' },
  { label: 'Tools', value: 'Figma' },
]

const FEATURES = [
  {
    num: '01',
    title: 'Mass Help Request',
    circle: 'Support Circle',
    color: '#0c9590',
    scenario: 'It's 2am. Your baby won't stop crying, you haven't slept in 36 hours, and you feel completely alone. You need help — but asking feels like admitting defeat.',
    description: 'This help flow allows parents to select what kind of help they need regarding baby care. Rather than making one uncomfortable phone call, BabyCircle lets you send a coordinated request to your trusted circle — so help can find you.',
    gifLabel: 'GIF: Mass Help Request flow — selecting help type → choosing people → sending',
  },
  {
    num: '02',
    title: 'Shared To-Do',
    circle: 'Partner Circle',
    color: '#f59bbb',
    scenario: 'You've both been running on empty. Tasks pile up invisibly. One partner carries more without realising it — resentment builds quietly.',
    description: 'Coordinate baby care tasks with your partner in a shared to-do list. Both partners can see, assign, and tick off tasks, reducing the mental load of tracking who is doing what.',
    gifLabel: 'GIF: Shared To-Do flow — creating a task → assigning partner → completing',
  },
  {
    num: '03',
    title: 'BabyID',
    circle: 'Parent-Baby Circle',
    color: '#fceabb',
    accentDark: true,
    scenario: 'Milestones happen fast — a first smile, a first word. Without a shared record, moments slip away, and one parent often misses them entirely.',
    description: "Log your baby's milestones and share them instantly with your partner. BabyID creates a living record of your child's growth that both parents contribute to and treasure.",
    gifLabel: 'GIF: BabyID flow — logging milestone → adding photo → sharing with partner',
  },
]

function Placeholder({ label, tall }) {
  return (
    <div className={`cs-placeholder ${tall ? 'cs-placeholder--tall' : 'cs-placeholder--short'}`}>
      <div className="cs-placeholder__icon"><i className="fas fa-film"></i></div>
      <div className="cs-placeholder__label">{label}</div>
    </div>
  )
}

function ImagePlaceholder({ label, tall }) {
  return (
    <div className={`cs-placeholder ${tall ? 'cs-placeholder--tall' : 'cs-placeholder--short'}`}>
      <div className="cs-placeholder__icon"><i className="fas fa-image"></i></div>
      <div className="cs-placeholder__label">{label}</div>
    </div>
  )
}

export default function BabyCircle() {
  return (
    <CaseStudyLayout
      heroTag="Final Studio Project — UX/UI Design"
      heroTitle="BabyCircle"
      heroSubtitle="A support app built around parents' trusted circle, designed to reduce the guilt of asking for help."
      meta={META}
      coverImg="/assets/babycircle_cover.png"
      coverAlt="BabyCircle cover"
    >

      {/* Overview */}
      <section className="cs-section">
        <p className="cs-section__label">Overview</p>
        <h2 className="cs-section__title">The Project</h2>
        <p className="cs-section__body">
          BabyCircle is a mobile app designed for first-time parents navigating the overwhelming early months of parenthood. 
          It centres on the idea of a "circle" — a trusted group of people a parent can lean on — and makes asking for help 
          feel safe, easy, and guilt-free.
        </p>
        <p className="cs-section__body">
          This was my final studio project at the University of Sydney, completed in 2025. The project involved end-to-end 
          UX design: research, problem framing, ideation, prototyping, and iteration.
        </p>
      </section>

      <hr className="cs-divider" />

      {/* Problem Statement */}
      <section className="cs-section">
        <p className="cs-section__label">The Problem</p>
        <h2 className="cs-section__title">Problem Statement</h2>
        <div className="cs-problem">
          <p className="cs-problem__title">Problem Statement</p>
          <p className="cs-problem__text">
            First-time parents often neglect their wellbeing due to persistent fatigue and unpredictable routines, 
            leaving children vulnerable to lasting developmental harm.
          </p>
        </div>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Add more context about how you arrived at this problem — research, interviews, etc. */}
          [Add context about your research process — how did you discover and validate this problem? Who did you speak to? What did you observe?]
        </p>
      </section>

      <hr className="cs-divider" />

      {/* Research */}
      <section className="cs-section">
        <p className="cs-section__label">Research</p>
        <h2 className="cs-section__title">Understanding First-Time Parents</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Describe your research approach */}
          [Describe your research methods — interviews, observations, secondary research. What were the key themes and insights that emerged?]
        </p>
        <ImagePlaceholder label="Research insights — affinity map / key themes / user quotes" tall />
      </section>

      <hr className="cs-divider" />

      {/* Design Concept */}
      <section className="cs-section">
        <p className="cs-section__label">The Concept</p>
        <h2 className="cs-section__title">The "Circle" Metaphor</h2>
        <p className="cs-section__body">
          The core concept is the circle — a parent's personal support network, divided into three rings based on relationship and need: 
          the Support Circle (broader network), Partner Circle (co-parent coordination), and Parent-Baby Circle (milestone tracking).
        </p>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Expand on your design rationale */}
          [Add more about how the circle metaphor shaped your design decisions — why this structure, how it maps to real parental needs.]
        </p>
        <ImagePlaceholder label="Concept diagram — the three circles explained" tall />
      </section>

      <hr className="cs-divider" />

      {/* The Three Features */}
      <section className="cs-section--wide">
        <p className="cs-section__label">Core Features</p>
        <h2 className="cs-section__title" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
          Three functions, three circles
        </h2>
        <p className="cs-section__body" style={{ maxWidth: 800, margin: '0 auto 3rem' }}>
          BabyCircle's three core features each address a distinct pain point of early parenthood, 
          mapped to a different layer of a parent's trusted network.
        </p>

        {/* Feature overview cards */}
        <div className="cs-feature-grid">
          {FEATURES.map((f) => (
            <div className="cs-feature-card" key={f.num} style={{ borderTop: `4px solid ${f.color}` }}>
              <span className="cs-feature-card__num" style={{ color: f.color }}>{f.num} — {f.circle}</span>
              <h3 className="cs-feature-card__title">{f.title}</h3>
              <p className="cs-feature-card__body">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Feature deep-dives */}
      {FEATURES.map((f) => (
        <div key={f.num}>
          <section className="cs-section--wide">
            <p className="cs-section__label" style={{ color: f.color }}>{f.num} — {f.circle}</p>
            <h2 className="cs-section__title" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
              {f.title}
            </h2>

            {/* Pain point scenario */}
            <div className="cs-scenario" style={{ maxWidth: 800, margin: '0 auto 2rem' }}>
              <p className="cs-scenario__label" style={{ color: f.color }}>Pain Point Scenario</p>
              <p className="cs-scenario__text">{f.scenario}</p>
            </div>

            {/* Description */}
            <p className="cs-section__body" style={{ maxWidth: 800, margin: '0 auto 2rem' }}>
              {f.description}
            </p>

            {/* GIF placeholder */}
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <Placeholder label={f.gifLabel} tall />
            </div>
          </section>
          <hr className="cs-divider" />
        </div>
      ))}

      {/* Prototyping & Testing */}
      <section className="cs-section">
        <p className="cs-section__label">Iteration</p>
        <h2 className="cs-section__title">Prototyping & Testing</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Describe your prototyping and user testing process */}
          [Describe how you prototyped the app and what user testing revealed. What did you change based on feedback? What worked straight away?]
        </p>
        <ImagePlaceholder label="Prototype iterations / testing notes / feedback" tall />
      </section>

      <hr className="cs-divider" />

      {/* Reflection */}
      <section className="cs-section">
        <p className="cs-section__label">Reflection</p>
        <h2 className="cs-section__title">What I Learned</h2>
        <p className="cs-section__body">
          {/* ✏️ REPLACE: Honest reflection on the project */}
          [Reflect on the project — what you're proud of, what you struggled with, what you'd push further if you had more time. Be personal and specific.]
        </p>
      </section>

    </CaseStudyLayout>
  )
}
