import CaseStudyLayout from '../../components/CaseStudyLayout'

const META = [
  { label: 'Role', value: 'Product & Visual Designer' },
  { label: 'Team', value: 'Natasha Png, Nico Napoli, Vivienne Han' },
  { label: 'Year', value: '2024' },
  { label: 'Tools', value: 'Figma, Adobe Suite' },
]

const CONTRIBUTIONS = [
  {
    num: '01',
    title: 'Defining the Problem',
    body: "Understanding that behaviour doesn't always match reported data, I led contextual observations to capture genuine fan experiences during Olympic screenings.",
    color: '#3444D5',
  },
  {
    num: '02',
    title: 'Visualising the Problem & Solution',
    body: 'To support clear and compelling pitches, I visualised the problem through storyboards and used annotated sketches to bring our concept to life.',
    color: '#3444D5',
  },
  {
    num: '03',
    title: 'UI Redesign & Visual Lead',
    body: "I took charge of a visual redesign to make sure every element stayed true to Herculabs' branding.",
    color: '#3444D5',
  },
]

const CONCEPTS = [
  {
    rank: 1,
    title: 'Athlete Experience Simulator Booth',
    desc: 'VR gameplay as an Olympian',
    winner: true,
    reasons: [
      'Immersive & interactive, fans feel like athletes and loved the multiple aspects of the booth.',
      'Bridges digital & physical engagement, offering a deeper connection than social media.',
      'Validated through user testing, and despite initial doubts about VR, users loved the experience.',
    ],
  },
  {
    rank: 2,
    title: 'Olympic Village App',
    desc: 'A central hub for Olympic content & challenges',
    winner: false,
  },
  {
    rank: 3,
    title: 'Fan-Athlete Connector App',
    desc: 'AI-driven personality-based fan-athlete interactions',
    winner: false,
  },
]

const TIMELINE = [
  { week: 'Week 6', label: 'Initial Sketches' },
  { week: 'Week 6', label: 'Tutor Discussion' },
  { week: 'Week 7', label: 'Detailed Sketches' },
  { week: 'Week 7', label: 'Team Discussion' },
  { week: 'Week 8', label: 'Wireframes' },
  { week: 'Week 8', label: 'Usability Testing' },
  { week: 'Week 9', label: 'Mockups' },
  { week: 'Week 9', label: 'Usability Testing' },
  { week: 'Week 10', label: '1st Prototype' },
  { week: 'Week 10', label: 'Usability Testing' },
  { week: 'Week 11', label: '2nd Prototype' },
  { week: 'Week 11', label: 'Usability & AB Testing' },
  { week: 'Week 12', label: 'Final Prototype' },
]

const NOTABLE_CHANGES = [
  {
    num: '01',
    title: 'Progress Bar Update',
    body: 'Improved system feedback made the process feel faster and more intuitive.',
    single: '/assets/herculabs/notable-changes-1.png',
  },
  {
    num: '02',
    title: 'Photo Booth Redesign',
    body: 'Refined after visiting a real booth to match industry standards, including camera preview visibility before photo taking.',
    before: '/assets/herculabs/notable-changes-photobooth-dated.gif',
    after:  '/assets/herculabs/step3.gif',
  },
  {
    num: '03',
    title: 'VR Tutorial Added',
    body: 'Introduced a short onboarding to help users unfamiliar with VR feel comfortable.',
    single: '/assets/herculabs/notable-changes-VR.gif',
  },
  {
    num: '04',
    title: 'Visual Design Refresh',
    body: 'Final design shifted to a modern, minimal look with Herculabs branding and a 3-colour scheme after feedback on the dated original.',
    before: '/assets/herculabs/notable-changes-exit-dated.png',
    after:  '/assets/herculabs/notable-changes-exit-new.png',
  },
]

const BOOTH_STEPS = [
  {
    icon: 'fas fa-tablet-alt',
    label: 'Entry Kiosk',
    desc: 'Quick, easy interactions to gain the necessary user input to start the experience.',
  },
  {
    icon: 'fas fa-vr-cardboard',
    label: 'VR Headset',
    desc: 'The experience itself, featuring both visual and auditory interactions.',
  },
  {
    icon: 'fas fa-camera',
    label: 'Photo Booth',
    desc: 'A photo with the athlete in a setting that feels large and realistic.',
  },
  {
    icon: 'fas fa-sign-out-alt',
    label: 'Exit Kiosk',
    desc: 'Quick and easy feedback from the user before they leave.',
  },
  {
    icon: 'fas fa-mobile-alt',
    label: 'Mobile Phone',
    desc: 'Scan a QR code to transfer all media from the experience beyond the booth.',
  },
]

const WALKTHROUGH = [
  {
    step: '01',
    title: 'Onboarding, choosing the sport, athlete & game mode',
    body: [
      'Users are taken through a series of questions to customise their simulation experience. They are required to answer all questions, so the next button is disabled until they do so.',
      'The yellow accent colour is used to indicate call-to-actions and other important information such as progress and feedback.',
      'There are different ways users can go about choosing options: from a list, using the search bar, or randomising.',
    ],
    imgLabel: 'Onboarding screens, sport & athlete selection',
    gifSrc: '/assets/herculabs/step1.gif',
  },
  {
    step: '02',
    title: 'Virtual Reality Experience, watching the tutorial & playing the simulation',
    body: [
      'An onboarding screen describes the game that will take place after the tutorial. This experience is viewed through the Meta Quest VR headset.',
      "The experience begins with an instruction screen and follows with a tutorial that aligns with most games' layout. A countdown plays, then a video of a table tennis match mimics a real VR experience.",
      'The final screen confirms the results of the match. Glass morphism is used throughout the VR experience for readability.',
    ],
    imgLabel: 'VR experience screens, tutorial, gameplay, results',
    gifSrc: '/assets/herculabs/step2.gif',
  },
  {
    step: '03',
    title: 'Photo Booth, taking a photo with the athlete',
    body: [
      'A countdown begins when the user selects "yes" to photo taking. The camera preview lets them get ready to pose.',
      'After taking photos, users choose which images to keep for the photo strip. Selected images are enlarged in the central rectangle for review.',
      'After confirming the strip, the last screen shows the final photo strip and a call to action to move to the next kiosk.',
    ],
    imgLabel: 'Photo booth screens, countdown, selection, confirmation',
    gifSrc: '/assets/herculabs/step3.gif',
  },
  {
    step: '04',
    title: 'Exit, leaving a rating & collecting your media',
    body: [
      'The final kiosk informs users about the incentive for leaving a review, where a rating and feedback earns them the printed photo strip.',
      'Users then scan a QR code to retrieve all media from the booth. Social media details and a hashtag are shown as a call to action, increasing awareness and visibility for Herculabs.',
    ],
    imgLabel: 'Exit kiosk screens, rating, QR code, social media CTA',
    gifSrc: '/assets/herculabs/step4.gif',
  },
]

const TAKEAWAYS = [
  {
    title: 'User testing is everything',
    body: 'Iteration after iteration, user feedback guided every design change, proving just how critical testing is for creating meaningful experiences.',
  },
  {
    title: 'Team communication drives progress',
    body: 'Regular check-ins ensured accountability and helped maintain a steady workflow where everyone contributed.',
  },
  {
    title: 'Visual design should evolve with context',
    body: 'Feedback from expert testing pushed us to rethink our entire visual direction, highlighting how design must stay relevant and brand-aligned.',
  },
  {
    title: 'Empathy improves immersion',
    body: 'Watching users interact with unfamiliar tech like VR reminded me how important it is to design with empathy and anticipate user needs.',
  },
]

export default function Herculabs() {
  return (
    <CaseStudyLayout
      slug="herculabs"
      pageClass="hl-page"
      heroTag="UX Design, Product Design, University of Sydney"
      heroTitle="HercuLabs"
      heroSubtitle="A VR Olympic Athlete Experience Simulator Booth, bridging the gap between fans and the athletes they love."
      meta={META}
      coverImg="/assets/herculabs/herculabs-cover.png"
      coverAlt="Herculabs cover"
    >

      {/* Overview */}
      <section className="cs-section">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>Overview</p>
        <h2 className="cs-section__title">Bringing Fans Closer to Olympians</h2>
        <p className="cs-section__body">
          HercuLabs transforms the way fans experience the Olympics, letting them step into the shoes of their favourite athletes.
          Through immersive VR technology, users can feel the intensity of competition firsthand, bridging the gap between
          spectators and the sports they love, long after the Games end.
        </p>
      </section>

      <hr className="cs-divider" />

      {/* My Role */}
      <section className="cs-section--wide hl-section--alt">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>My Role</p>
        <h2 className="cs-section__title" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
          My Key Contributions
        </h2>
        <div className="cs-feature-grid">
          {CONTRIBUTIONS.map((c) => (
            <div className="cs-feature-card hl-feature-card" key={c.num} style={{ borderTop: `4px solid ${c.color}` }}>
              <span className="cs-feature-card__num" style={{ color: c.color }}>{c.num}</span>
              <h3 className="cs-feature-card__title">{c.title}</h3>
              <p className="cs-feature-card__body">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="cs-section__body" style={{ maxWidth: 800, margin: '2rem auto 0', textAlign: 'center', fontStyle: 'italic', color: '#888' }}>
          Now you know more about my role, read on to see what we ended up building.
        </p>
      </section>

      <hr className="cs-divider" />

      {/* The Problem */}
      <section className="cs-section">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>The Problem</p>
        <h2 className="cs-section__title">Why Do Fans Lose Interest After the Olympics?</h2>
        <div className="cs-problem">
          <p className="cs-problem__title">Problem Statement</p>
          <p className="cs-problem__text">
            Once the games end, the hype dies. Fans want to stay engaged, but existing platforms aren't built for that.
          </p>
        </div>
        <ul className="cs-bullet-list">
          <li>Remote fan support feels invisible to athletes.</li>
          <li>Social media doesn't provide meaningful interactions between fans and athletes.</li>
          <li>Fans focus on specific athletes, not the whole national team.</li>
        </ul>
        <blockquote className="cs-quote">
          "I post about my favourite athlete, but I know they'll never see it."
        </blockquote>
      </section>

      <hr className="cs-divider" />

      {/* Research */}
      <section className="cs-section hl-section--alt">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>Research</p>
        <h2 className="cs-section__title">Research & Insights</h2>
        <p className="cs-section__body">
          To get real insights, we used two research methods: <strong>Interviews & Questionnaires</strong> (what
          people say they do) and <strong>Contextual Observations</strong> (what people actually do).
        </p>
        <div className="cs-stat-row">
          <div className="cs-stat">
            <span className="cs-stat__num" style={{ color: '#3444D5' }}>73%</span>
            <span className="cs-stat__label">of fans engage with athletes online</span>
          </div>
          <div className="cs-stat cs-stat--muted">
            <span className="cs-stat__num">37%</span>
            <span className="cs-stat__label">actually watch sports frequently</span>
          </div>
        </div>
        <p className="cs-section__body">
          Engagement drops drastically post-Olympics, leaving fans disconnected. I then created a storyboard to map out
          the pain points users were feeling.
        </p>
        <img src="/assets/herculabs/storyboard.png" alt="Storyboard, mapping fan pain points" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 10, marginTop: '1.5rem' }} />
      </section>

      <hr className="cs-divider" />

      {/* Ideation */}
      <section className="cs-section">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>Ideation</p>
        <h2 className="cs-section__title">From Insights to Ideas</h2>
        <p className="cs-section__body">
          We brainstormed 24 solutions and narrowed it down to 3 strong concepts. A decision matrix and informal user
          testing were used to rank them.
        </p>
        <div className="cs-concepts">
          {CONCEPTS.map((c) => (
            <div key={c.rank} className={`cs-concept-card${c.winner ? ' cs-concept-card--winner' : ''}`}>
              <span className="cs-concept-card__medal">
                {c.rank === 1 ? '🥇' : c.rank === 2 ? '🥈' : '🥉'}
              </span>
              <h3 className="cs-concept-card__title">{c.title}</h3>
              <p className="cs-concept-card__desc">{c.desc}</p>
              {c.winner && c.reasons && (
                <ul className="cs-concept-card__reasons">
                  {c.reasons.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Design Process Timeline */}
      <section className="cs-section--wide hl-section--alt">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>Design Process</p>
        <h2 className="cs-section__title">Iteration Timeline</h2>

        <div className="cs-timeline-scroll">
          <div className="cs-timeline-track">
            {TIMELINE.map((item, i) => (
              <div key={i} className="cs-timeline-step" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="cs-timeline-step__week">{item.week}</span>
                <div className="cs-timeline-step__dot"></div>
                <span className="cs-timeline-step__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="cs-section__body" style={{ maxWidth: 800, margin: '2.5rem auto 1.5rem' }}>
          We went from rough sketches in Week 6 to a polished final prototype by Week 12. Here's a snapshot of that evolution.
        </p>

        <div className="cs-img-row">
          <div>
            <p className="cs-img-label">Detailed Sketches, Week 7</p>
            <img src="/assets/herculabs/Detailed%20sketches.png" alt="Detailed concept sketches" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 10 }} />
          </div>
          <div>
            <p className="cs-img-label" style={{ color: '#3444D5' }}>2nd Prototype, Week 11</p>
            <img src="/assets/herculabs/2nd%20Prototype.png" alt="Redesigned UI, Herculabs branding" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 10 }} />
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '1.5rem', color: '#051616' }}>Notable Changes</h3>
          <div className="cs-notable-changes">
            {NOTABLE_CHANGES.map((c) => (
              <div key={c.num} className="cs-notable-change hl-notable-change">
                <div className="cs-notable-change__header">
                  <span className="cs-notable-change__num">{c.num}</span>
                  <div>
                    <strong className="cs-notable-change__title">{c.title}</strong>
                    <p className="cs-notable-change__body">{c.body}</p>
                  </div>
                </div>

                {c.single ? (
                  <div className="cs-notable-change__single-wrap">
                    <img src={c.single} alt={c.title} className="cs-notable-change__plain-img" />
                  </div>
                ) : (
                  <div className="cs-notable-change__images">
                    <div className="cs-notable-change__img-wrap">
                      <span className="cs-notable-change__img-tag cs-notable-change__img-tag--before">Before</span>
                      <div className="cs-notable-change__white-wrap">
                        <img src={c.before} alt={`${c.title}, before`} className="cs-notable-change__plain-img" />
                      </div>
                    </div>
                    <span className="cs-notable-change__arrow hl-arrow">→</span>
                    <div className="cs-notable-change__img-wrap">
                      <span className="cs-notable-change__img-tag cs-notable-change__img-tag--after">After</span>
                      <div className="cs-notable-change__white-wrap">
                        <img src={c.after} alt={`${c.title}, after`} className="cs-notable-change__plain-img" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Final Product — Booth Flow */}
      <section className="cs-section--wide">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>Final Design</p>
        <h2 className="cs-section__title">The Booth Experience</h2>
        <p className="cs-section__body" style={{ maxWidth: 800, margin: '0 auto 2.5rem' }}>
          The experience flows through five physical stations, each designed for a specific moment of interaction.
        </p>
        <div className="cs-booth-flow">
          {BOOTH_STEPS.map((s, i) => (
            <>
              {i > 0 && <span key={`arrow-${i}`} className="cs-booth-step__arrow hl-arrow">→</span>}
              <div key={i} className="cs-booth-step">
                <div className="cs-booth-step__icon hl-booth-icon">
                  <i className={s.icon}></i>
                </div>
                <span className="cs-booth-step__label">{s.label}</span>
                <p className="cs-booth-step__desc">{s.desc}</p>
              </div>
            </>
          ))}
        </div>
      </section>

      <hr className="cs-divider" />

      {/* Walk Through */}
      {WALKTHROUGH.map((w, wi) => (
        <div key={w.step}>
          <section className={`cs-section--wide${wi % 2 === 0 ? ' hl-section--alt' : ''}`}>
            <p className="cs-section__label" style={{ color: '#3444D5' }}>Step {w.step}</p>
            <h2 className="cs-section__title" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
              {w.title}
            </h2>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              {w.body.map((para, i) => (
                <p key={i} className="cs-section__body">{para}</p>
              ))}
            </div>
            <div style={{ maxWidth: 800, margin: '1.5rem auto 0' }}>
              <p className="hl-gif-label">Step {w.step}</p>
              <div className="hl-gif-wrap">
                <img src={w.gifSrc} alt={w.imgLabel} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 6 }} />
              </div>
            </div>
          </section>
          <hr className="cs-divider" />
        </div>
      ))}

      {/* Key Takeaways */}
      <section className="cs-section--wide hl-section--alt">
        <p className="cs-section__label" style={{ color: '#3444D5' }}>Reflection</p>
        <h2 className="cs-section__title">Key Takeaways</h2>
        <div className="cs-feature-grid">
          {TAKEAWAYS.map((t, i) => (
            <div key={i} className="cs-feature-card hl-feature-card" style={{ borderTop: '4px solid #3444D5' }}>
              <h3 className="cs-feature-card__title">{t.title}</h3>
              <p className="cs-feature-card__body">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

    </CaseStudyLayout>
  )
}
