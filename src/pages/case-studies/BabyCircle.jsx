import { useState } from 'react'
import CaseStudyLayout from '../../components/CaseStudyLayout'

/* ── Custom hero ─────────────────────────────────────── */
function BcHero() {
  return (
    <div className="bc-hero-content">
      <p className="bc-hero-tagline">For every parent learning to ask, and every village learning to care ♡</p>
      <p className="bc-hero-tag">Final Studio Project · University of Sydney · 2025</p>
      <p className="bc-hero-team">Team Freddoes</p>
    </div>
  )
}

/* ── Data ────────────────────────────────────────────── */
const TEAM = [
  { name: 'Nghi Ngo',        role: 'Project Manager',          badge: null },
  { name: 'Jason Eng',       role: 'UI Designer',               badge: null },
  { name: 'Natasha Png',     role: 'Design Systems',            badge: "That's me ✦" },
  { name: 'Angelina Nguyen', role: 'UX Researcher',             badge: null },
  { name: 'Vivienne Han',    role: 'Secretary & Documentation', badge: null },
]

const TIMELINE_PHASES = [
  {
    phase: 'Phase 1', title: 'Problem Discovery', weeks: 'Week 1 to 3',
    tasks: ['User research and interviews', 'Problem framing'],
  },
  {
    phase: 'Phase 2', title: 'Concept Ideation and Testing', weeks: 'Week 4 to 7',
    tasks: ['Ideating and evaluating concepts', 'Concept testing at user testing fair'],
  },
  {
    phase: 'Phase 3', title: 'Branding and User Testing', weeks: 'Week 7 to 10',
    tasks: ['Branding creation for BabyCircle', 'User test wireframes'],
  },
  {
    phase: 'Phase 4', title: 'Final Fixes and Delivery', weeks: 'Week 11 to 13',
    tasks: ['Final prototype', 'BabyCircle promo video'],
  },
]

const TESTING_STEPS = [
  { num: '1', title: 'Introduction', body: 'Consent form via Google Form, rapport building, set up for open responses.' },
  { num: '2', title: 'Scenario-based Testing', body: 'Participants responded to a scenario based on their own stress profile. We introduced the concept only after they had reflected on their own experience of asking for help.' },
  { num: '3', title: 'Concept Introduction', body: 'We walked participants through BabyCircle using a storyboard, not a prototype. Visualisations helped them understand without UI distraction.' },
  { num: '4', title: 'Likert Scale Survey', body: 'Quantitative measure of efficacy and propensity. "How useful would this system be for parents managing unpredictable routines and fatigue?"' },
  { num: '5', title: 'Feature Prioritisation Board', body: 'A physical A3 board with velcro cards. Participants ranked features from most to least useful. Tactile, visual, engaging.' },
  { num: '6', title: 'Semi-structured Interview', body: 'Open-ended questions: "What barriers would stop you from using BabyCircle?" and "If you could change or add one thing, what would it be?"' },
  { num: '7', title: 'JEQ and NPS', body: 'Measured satisfaction and likelihood to recommend.' },
]

const PIVOT_INSIGHTS = [
  'Mass Help Request was consistently ranked well by participants, confirming expectations.',
  'Shared To-Do Lists also, unexpectedly, received high ratings.',
  'Practical features were valued more than emotional ones.',
  'Participants suggested adding advice (previously dismissed), as well as proximity and urgency (not yet considered).',
  'There were mixed opinions around adoption and automation.',
]

const FEATURES = [
  {
    circle: 'Support Circle',
    title: 'Mass Help Request',
    scenario: "There's so much emotional friction... so I just don't reach out. We didn't know you needed help until now.",
    description: "This help flow lets parents select what kind of help they need regarding baby care. Instead of making one uncomfortable phone call, BabyCircle sends a coordinated request to the people they choose, so help can find them.",
    gif: '/assets/babycircle/gifs/mass-help.gif',
    gifAlt: 'Mass Help Request flow',
  },
  {
    circle: 'Partner Circle',
    title: 'Shared To-Do',
    scenario: "Where's all the baby formula?! What? You said YOU were going to pick it up today!",
    description: "Coordinate baby care tasks with your partner in a shared to-do list. Both partners can see, assign, and complete tasks, reducing the invisible mental load of tracking who is doing what.",
    gif: '/assets/babycircle/gifs/shared-to-do.gif',
    gifAlt: 'Shared To-Do flow',
  },
  {
    circle: 'Parent-Baby Circle',
    title: 'Baby ID',
    scenario: "Mum said she wishes she took more photos... she didn't realise how fast I'd grow.",
    description: "Log your baby's milestones and share them instantly with your partner. Baby ID creates a living record of your child's growth that both parents contribute to and treasure.",
    gif: '/assets/babycircle/gifs/babyid.gif',
    gifAlt: 'Baby ID flow',
  },
]

/* ── Main component ──────────────────────────────────── */
export default function BabyCircle() {
  const [cardFlipped, setCardFlipped] = useState(false)

  return (
    <CaseStudyLayout
      slug="babycircle"
      pageClass="bc-page"
      customHero={<BcHero />}
      heroLogo="/assets/babycircle/babycircle_logo.svg"
    >

      {/* ── S1: The Brief (cream) ─────────────────────── */}
      <div className="bc-bg-cream">
        <div className="container cs-section">
          <p className="cs-section__label">The Brief</p>
          <h2 className="cs-section__title">Designing for Transitions</h2>
          <p className="cs-section__body">
            Our brief was broad on purpose. We were asked to design for transitions, exploring everything from adapting to AI, to moving cities, to major life shifts. Among all the transitions we considered, first-time parenthood stood out as the most human and the most underserved. It presented a clear opportunity to design for sustained, human-centred support that evolves alongside the user's changing needs.
          </p>
        </div>
      </div>

      {/* ── S2: The Problem (white) ───────────────────── */}
      <div className="bc-bg-white">
        <div className="container cs-section">
          <p className="cs-section__label">The Problem</p>
          <div className="bc-problem-stat-row">
            <span className="bc-stat-number">90%</span>
            <h2 className="bc-problem-title">of parents don't ask for help.</h2>
          </div>

          <div className="bc-quote-card">
            <p className="bc-quote-card__text">"If you're stressed, so is your child."</p>
            <span className="bc-quote-card__attr">Dr. Gabor Maté</span>
          </div>

          <p className="cs-section__body" style={{ marginTop: '1.5rem' }}>
            After childbirth, first-time parents face a steep learning curve while managing unpredictable routines and persistent fatigue. Their own wellbeing gets pushed aside. But as Dr. Maté warns, a parent's compromised wellbeing directly affects their quality of care and connection with their child.
          </p>

          <div className="bc-chips-section">
            <div className="bc-chips-row">
              <span className="bc-chips-label bc-chips-label--before">Before</span>
              {['Parent stress ↑', 'Wellbeing ↓', 'Quality of Care ↓', 'Child vulnerable'].map(t => (
                <span key={t} className="bc-chip bc-chip--before">{t}</span>
              ))}
            </div>
            <div className="bc-chips-row">
              <span className="bc-chips-label bc-chips-label--after">After (with Baby Circle)</span>
              {['Parent stress ↓', 'Wellbeing ↑', 'Quality of Care ↑', 'Child supported', 'Support mobilised ⭐'].map(t => (
                <span key={t} className="bc-chip bc-chip--after">{t}</span>
              ))}
            </div>
          </div>

          <p className="cs-section__body">
            Baby Circle aims to intervene at a critical but under-addressed pain point. Parents struggle to ask for help under fatigue and unpredictable routines. By normalising and lowering the barrier to request for support, Baby Circle has the potential to protect both parent and child wellbeing.
          </p>
        </div>
      </div>

      {/* ── S3: The Team (cream) ─────────────────────── */}
      <div className="bc-bg-cream">
        <div className="container cs-section">
          <p className="cs-section__label">The Team</p>
          <h2 className="cs-section__title">We worked like a real design team</h2>
          <p className="cs-section__body">
            Five of us, five roles, one project. What made this different from every other studio unit was that we set our own timeline and targets, ran our own meetings, and held each other accountable. No coordinator telling us where to be each week.
          </p>

          <div className="bc-team-grid">
            {TEAM.map((member) => (
              <div key={member.name} className="bc-team-card">
                <div className="bc-team-card__avatar">{member.name.charAt(0)}</div>
                <strong className="bc-team-card__name">{member.name}</strong>
                <span className="bc-team-card__role">{member.role}</span>
                {member.badge && <span className="bc-team-card__badge">{member.badge}</span>}
              </div>
            ))}
          </div>

          <h3 className="bc-subheading" style={{ marginTop: '2.5rem' }}>How we worked</h3>
          <p className="cs-section__body">
            We planned everything on a shared FigJam, one workspace for research findings, solution ideas, weekly tasks and testing data. Every week had its own section with tasks to complete. We worked async on our individual tasks, then came together in structured meetings with a set agenda every time. In those meetings we would review what had been done, identify issues, plan iterations, then go away and do the work. It kept us efficient and always ahead.
          </p>
          <img src="/assets/babycircle/figjam_workspace.png" style={{ width: '100%', borderRadius: '1rem', marginTop: '1rem' }} alt="FigJam workspace" />
        </div>
      </div>

      {/* ── S4: Timeline (white) ─────────────────────── */}
      <div className="bc-bg-white">
        <div className="container cs-section">
          <p className="cs-section__label">Our Process</p>
          <h2 className="cs-section__title">13 weeks, self-directed</h2>
          <div className="bc-timeline">
            {TIMELINE_PHASES.map((phase) => (
              <div key={phase.phase} className="bc-timeline-phase">
                <div className="bc-timeline-phase__dot-row">
                  <div className="bc-timeline-phase__dot" />
                </div>
                <span className="bc-timeline-phase__week">{phase.weeks}</span>
                <strong className="bc-timeline-phase__label">{phase.title}</strong>
                <ul className="bc-timeline-phase__task-list">
                  {phase.tasks.map(t => (
                    <li key={t} className="bc-timeline-phase__task">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── S5: My Role (cream) ──────────────────────── */}
      <div className="bc-bg-cream">
        <div className="container cs-section">
          <p className="cs-section__label">My Role</p>
          <h2 className="cs-section__title">Design Systems, the foundation everyone builds on</h2>
          <p className="cs-section__body">
            I was the first one in Figma. Before anyone else could start designing their flows, I needed to set up the base: colour tokens, typography, spacing, components, and auto layout rules. I also handled the visual design of our presentations and reports, keeping everything cohesive as a brand.
          </p>

          <div className="bc-dark-quote" style={{ fontStyle: 'normal' }}>
            The hardest part wasn't building the system. It was making sure five people actually used it correctly.
          </div>

          <p className="cs-section__body" style={{ marginTop: '1.5rem' }}>
            Quality control was constant. I had to check that teammates were using components rather than copy-pasting, that auto layout was applied correctly, and that new components they created followed the guidelines I had set. I left comments, gave feedback, and checked work before it went into the final prototype. It taught me that a design system is only as good as the communication around it.
          </p>

          <div className="bc-role-images">
            <img src="/assets/babycircle/component-lib.png" style={{ width: '100%', borderRadius: '1rem', marginTop: '1rem' }} alt="Component library" />
            <img src="/assets/babycircle/figma_workspace.png" style={{ width: '100%', borderRadius: '1rem', marginTop: '1rem' }} alt="Figma workspace" />
          </div>
        </div>
      </div>

      {/* ── S6: The Concept (white) ───────────────────── */}
      <div className="bc-bg-white">
        <div className="container cs-section">
          <p className="cs-section__label">The Concept</p>
          <h2 className="cs-section__title">What is BabyCircle?</h2>
          <p className="cs-section__body">
            BabyCircle is a support system designed for first-time parents facing unpredictable routines, fatigue, and the difficulty of asking for help. Instead of waiting for a volatile moment before reaching out, BabyCircle lets parents pre-organise their trusted circle of support, making it easier and more normalised to ask for assistance.
          </p>

          <div className="bc-concept-cards">
            <div className="bc-concept-card">
              <span className="bc-concept-card__num">1</span>
              <strong className="bc-concept-card__title">Center</strong>
              <p className="bc-concept-card__body">A shared hub for both parents, hosting synced to-do lists, reminders, and ambient wellbeing prompts that help distribute responsibilities and reduce mental load.</p>
            </div>
            <div className="bc-concept-card">
              <span className="bc-concept-card__num">2</span>
              <strong className="bc-concept-card__title">Inner Circle</strong>
              <p className="bc-concept-card__body">A mass request function that lets parents quickly reach out to their closest network when they need support, whether immediate or preemptive, ensuring parent peace of mind and safe, timely care for the baby.</p>
            </div>
          </div>

          <p className="cs-section__body" style={{ marginTop: '1.5rem' }}>
            Together, these features aim to create a calmer, more connected parenting experience by tackling the real barrier of not just having support available, but feeling able and reassured to reach out for it.
          </p>
        </div>
      </div>

      {/* ── S7: The Pivot (cream) ────────────────────── */}
      <div className="bc-bg-cream">
        <div className="container cs-section">
          <p className="cs-section__label">The Process Pivot</p>
          <h2 className="bc-pivot-title">We tested the concept. Not the screens.</h2>
          <p className="cs-section__body">
            In every other studio class, we tested interfaces. We asked users to navigate screens and measured how well the UX worked. But early on, we realised something: the screens weren't the unfamiliar part. The concept itself was. If people didn't believe in the idea, no amount of good UI would save it.
          </p>

          <div className="bc-pivot-card">
            <p>So we designed a testing protocol that put the concept in front of real parents, using physical artefacts and scenarios, before a single polished screen existed.</p>
          </div>

          <h3 className="bc-subheading" style={{ marginTop: '2rem' }}>How the testing session worked</h3>

          <div className="bc-process-steps">
            {TESTING_STEPS.map((step) => (
              <div key={step.num} className="bc-process-step">
                <span className="bc-process-step__num">{step.num}</span>
                <div>
                  <strong className="bc-process-step__title">{step.title}</strong>
                  <p className="bc-process-step__body">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <img src="/assets/babycircle/feature-board.png" style={{ width: '100%', borderRadius: '1rem', marginTop: '1rem' }} alt="Feature prioritisation board" />

          <h3 className="bc-subheading" style={{ marginTop: '2.5rem' }}>What we learned</h3>

          <div className="bc-insights-grid" style={{ marginTop: '1rem' }}>
            {PIVOT_INSIGHTS.map((insight) => (
              <div key={insight} className="bc-insight-card">
                <p className="bc-insight-card__body" style={{ margin: 0 }}>{insight}</p>
              </div>
            ))}
          </div>

          <p className="cs-section__body" style={{ marginTop: '1.5rem' }}>
            Testing with actual parents gave us insights we could never have generated ourselves. They had lived through this experience. Their feedback shifted the direction of our concept and validated what we thought would work, while surprising us in others.
          </p>
        </div>
      </div>

      {/* ── S8: Final Design (white) ─────────────────── */}
      <div className="bc-bg-white">
        <div className="container cs-section">
          <p className="cs-section__label">The Final Design</p>
          <h2 className="cs-section__title">Three features. Three circles.</h2>

          <div className="bc-yt-wrapper">
            <iframe
              className="bc-yt-iframe"
              src="https://www.youtube.com/embed/YB1lPxK9M1c"
              title="BabyCircle promo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {FEATURES.map((feature, i) => {
            const gifOnRight = i !== 1
            const textCol = (
              <div style={{ flex: 1 }}>
                <div className="bc-feature__scenario">
                  <p className="bc-feature__scenario-text">"{feature.scenario}"</p>
                </div>
                <p className="cs-section__body" style={{ margin: '1rem 0 0' }}>{feature.description}</p>
              </div>
            )
            const gifCol = (
              <div style={{ flex: 1 }}>
                <img src={feature.gif} style={{ width: '100%', borderRadius: '1rem', display: 'block' }} alt={feature.gifAlt} />
              </div>
            )
            return (
              <div key={feature.title} className={`bc-feature${i < FEATURES.length - 1 ? ' bc-feature--bordered' : ''}`}>
                <span className="bc-feature-circle">{feature.circle}</span>
                <h3 className="bc-feature__title">{feature.title}</h3>
                <div className="feature-row" style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'flex-start', marginTop: '2rem' }}>
                  {gifOnRight ? textCol : gifCol}
                  {gifOnRight ? gifCol : textCol}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── S9: Graduation Show (cream) ──────────────── */}
      <div className="bc-bg-cream">
        <div className="container cs-section">
          <p className="cs-section__label">The Outcome</p>
          <h2 className="cs-section__title">Chosen for the Graduation Show</h2>
          <p className="cs-section__body">
            Out of all the projects in our cohort, BabyCircle was selected to be showcased at the University of Sydney graduation show, where members of the public, industry guests, and academics came to see the work.
          </p>

          <div className="bc-grad-photos" style={{ margin: '1.5rem 0' }}>
            <img src="/assets/babycircle/gradshow_001.jpg" style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', height: '280px' }} alt="Graduation show" />
            <img src="/assets/babycircle/gradshow_002.JPG" style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', height: '280px' }} alt="Graduation show" />
            <img src="/assets/babycircle/gradshow_003.JPG" style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', height: '280px' }} alt="Graduation show" />
          </div>

          <div className="bc-pivot-card">
            <p>"One of my research participants came to see the project. She said she would definitely use it."</p>
          </div>

          <p className="cs-section__body" style={{ marginTop: '1.5rem' }}>
            That moment, more than any grade or feedback, confirmed that we had designed something real.
          </p>
        </div>
      </div>

      {/* ── S10: Postcard flip (white) ───────────────── */}
      <div className="bc-bg-white">
        <div className="container cs-section">
          <p className="cs-section__label">That's a wrap</p>
          <h2 className="cs-section__title">Thanks for reading ♡</h2>

          <div className="bc-postcard-section">
            <div
              className={`bc-postcard-scene${cardFlipped ? ' bc-postcard-scene--flipped' : ''}`}
              onClick={() => setCardFlipped(f => !f)}
            >
              <div className="bc-postcard-card">
                {/* Front */}
                <div className="bc-postcard-front" style={{ backgroundImage: "url('/assets/babycircle/postcard_front.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
                {/* Back */}
                <div className="bc-postcard-back" style={{ background: '#faf7f2', borderRadius: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', width: '100%', height: '100%' }}>
                  <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#2d6e6a', marginBottom: '1rem', textAlign: 'center' }}>Freddoes</span>
                  <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.5rem', textAlign: 'center' }}>Thanks for reading this case study.</p>
                  <p style={{ fontSize: '1rem', color: '#2d6e6a', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>Love, Freddoes ♡</p>
                  <p style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center', margin: 0 }}>Angelina · Jason · Natasha · Nghi · Vivienne</p>
                </div>
              </div>
            </div>
            <p className="bc-postcard-hint">Hover to flip</p>
          </div>
        </div>
      </div>

    </CaseStudyLayout>
  )
}
