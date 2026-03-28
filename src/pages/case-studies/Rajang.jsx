import CaseStudyLayout from '../../components/CaseStudyLayout'

function GifSlot({ label }) {
  return (
    <div className="rj-gif-slot">
      <i className="fas fa-film" />
      <span>{label}</span>
    </div>
  )
}

export default function Rajang() {
  return (
    <CaseStudyLayout
      heroTag="Web Design & Development, Internship"
      heroTitle="A Website Revamp with a Twist"
      heroSubtitle="Where I Realised the Importance of Content Design for Businesses"
      coverImg="/assets/rajang/rajang-cover.png"
      coverAlt="Rajang cover"
    >

      {/* ── 1. Project info bar ──────────────────────────── */}
      <div className="rj-info-bar">
        <div className="rj-info-col">
          <span className="rj-info-col__label">Project Info</span>
          <span className="rj-info-col__value">Solo Project</span>
        </div>
        <div className="rj-info-divider" />
        <div className="rj-info-col">
          <span className="rj-info-col__label">Role</span>
          <span className="rj-info-col__value">UX/UI Designer &amp; Developer</span>
        </div>
        <div className="rj-info-divider" />
        <div className="rj-info-col">
          <span className="rj-info-col__label">Duration</span>
          <span className="rj-info-col__value">December 2024 - January 2025</span>
        </div>
      </div>

      {/* ── 2. Moodboard ─────────────────────────────────── */}
      <section className="cs-section">
        <div className="rj-moodboard-card">
          <h2 className="rj-moodboard-card__title">The mood board ☆</h2>
          <p className="rj-moodboard-card__subtitle">
            Rajang first approached me to refresh their dated website, it wasn't getting the visibility or traction they hoped for.
          </p>
          <img
            src="/assets/rajang/moodboard.png"
            alt="Rajang moodboard"
            className="rj-moodboard-card__img"
          />
          <p className="rj-moodboard-card__body">
            The first thing I did was create a moodboard to set the aesthetic tone. I looked into companies in similar industries for inspiration and used their existing brand colours, orange, red, and yellow, as the foundation for a new look that felt bold and tech-driven.
          </p>
        </div>
      </section>

      <hr className="cs-divider" />

      {/* ── 3. Crucial finding ───────────────────────────── */}
      <section className="cs-section">
        <h2 className="rj-large-title">This is where I found something crucial</h2>
        <p className="cs-section__body">
          While researching competitor websites, I saw a huge gap between Rajang's old site and others in the digital space.
        </p>

        <div className="rj-highlight-bar">
          It wasn't just about visuals, it was about <strong>how content was designed.</strong>
        </div>

        <p className="cs-section__body">
          Other websites had a clear flow. The way they structured information, what goes where and how it's phrased, kept users engaged. It guided visitors to act, to click, to explore.
        </p>
        <p className="cs-section__body">
          <strong><em>Rajang's original site didn't have that.</em></strong>
        </p>

        <div className="rj-sticky-notes">
          {['No Call To Actions', 'No direction', 'No clear content hierarchy'].map((text) => (
            <div key={text} className="rj-sticky-note">
              <span className="rj-sticky-note__pin">📌</span>
              <p className="rj-sticky-note__text">{text}</p>
            </div>
          ))}
        </div>

        <p className="cs-section__body">
          That's when I realised: the way content is written and placed directly affects engagement, and <strong>SEO (Search Engine Optimisation)</strong>.
        </p>
      </section>

      <hr className="cs-divider" />

      {/* ── 4. Content smarter ───────────────────────────── */}
      <section className="cs-section">
        <div className="rj-smart-card">
          <div className="rj-smart-card__header">
            <h2 className="rj-smart-card__title">Here's what I did to make the content work smarter</h2>
            <span className="rj-smart-card__emoji">⚡</span>
          </div>
          <p className="rj-smart-card__body">
            To give Rajang's site more visibility and usability, I started applying content design principles with SEO in mind:
          </p>
          <ul className="rj-smart-list">
            {[
              {
                icon: '🖊️',
                title: 'Sprinkling in Keywords Naturally',
                body: 'Phrases like data solutions, digital transformation, and Malaysia-based tech company were carefully placed to boost search visibility.',
              },
              {
                icon: '☕',
                title: 'Making Headlines Do More Work',
                body: 'I rewrote section titles like How We Operate and Careers at Rajang to help with both user scanning and keyword ranking.',
              },
              {
                icon: '🗂️',
                title: 'Breaking Content Into Snackable Sections',
                body: 'Content was chunked out for better readability, for both people and search engines.',
              },
              {
                icon: '⭐',
                title: 'Using CTAs with Purpose',
                body: 'Buttons like Learn More About Our Process or Kickstart Your Career at Rajang were crafted to feel actionable and relevant.',
              },
            ].map((item) => (
              <li key={item.title} className="rj-smart-list-item">
                <span className="rj-smart-list-item__icon">{item.icon}</span>
                <div>
                  <strong className="rj-smart-list-item__title">{item.title}</strong>
                  <p className="rj-smart-list-item__body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr className="cs-divider" />

      {/* ── 5. Mistake ───────────────────────────────────── */}
      <section className="cs-section">
        <h2 className="cs-section__title">
          <span className="rj-mistake-icon">👤✕</span> But I made a mistake
        </h2>
        <p className="cs-section__body">
          At the wireframing stage, I was still thinking like I was designing for a B2C corporate site, full of bold visuals, big taglines, and glowing client testimonials.
        </p>

        <div className="rj-mistake-inner-card">
          <strong className="rj-mistake-inner-card__title">One of my first pitches? Add a testimonials section.</strong>
          <p className="rj-mistake-inner-card__body">
            It worked on the sites I researched, so I figured it would build trust here too.
          </p>
          <div className="rj-mistake-inner-card__images">
            <div className="rj-mistake-img-slot">
              <i className="fas fa-image" />
              <span>Testimonial reference 1</span>
            </div>
            <div className="rj-mistake-img-slot">
              <i className="fas fa-image" />
              <span>Testimonial reference 2</span>
            </div>
          </div>
        </div>

        <div className="rj-highlight-bar">
          🐒 But I overlooked something important: <strong>Rajang is a B2B agency in a niche sector.</strong>
        </div>

        <p className="cs-section__body">
          In industries like oil &amp; gas, discretion is key. Publicly showcasing client names or partnerships can raise red flags, competitors could use that info to their advantage.
        </p>
        <p className="cs-section__body">
          <strong>So... that idea got turned down immediately.</strong>
        </p>
        <p className="cs-section__body">
          Instead of seeing it as a failure, I saw it as a moment to adapt, refining the design to respect client privacy, while still conveying credibility through other means.
        </p>
      </section>

      {/* ── 6. Changed approach (black bg) ───────────────── */}
      <div className="rj-dark-section">
        <div className="rj-dark-section__inner">
          <span className="rj-dark-section__emoji">🧩</span>
          <h2 className="rj-dark-section__title">This Is where I changed my approach</h2>
          <p className="rj-dark-section__body">
            I went back to the drawing board with a clearer picture of who Rajang really was, and who they were speaking to.
          </p>
          <ul className="rj-dark-list">
            {[
              { icon: '✏️', text: 'I rewrote the copy to focus on enterprise-level clients, while still appealing to potential hires like developers and interns.' },
              { icon: '👨‍💻', text: 'I introduced a dark theme to give the site a more developer-friendly feel, something that aligned with their goal of scaling their dev team.' },
              { icon: '🔗', text: 'I removed unnecessary B2C-style elements and instead highlighted their expertise, culture, and professionalism in a more understated, B2B-appropriate tone.' },
            ].map((item) => (
              <li key={item.text} className="rj-dark-list-item">
                <span className="rj-dark-list-item__icon">{item.icon}</span>
                <p className="rj-dark-list-item__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── 7. Final website ─────────────────────────────── */}
      <section className="cs-section--wide">
        <h2 className="cs-section__title" style={{ textAlign: 'center' }}>
          What the Final Website Looks Like
        </h2>
        <p className="cs-section__body" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3rem' }}>
          Here's how the final deliverables came together:
        </p>

        {/* Row 1: card left, GIF right */}
        <div className="rj-final-row" style={{ marginBottom: '2rem' }}>
          <div className="rj-rajang-card">
            <span className="rj-rajang-card__emoji">🏠</span>
            <strong className="rj-rajang-card__title">The Home Page: A Confident First Impression</strong>
            <ul className="rj-rajang-card__bullets">
              <li>Clear messaging that communicates who Rajang is</li>
              <li>Strong CTAs that guide users through the site</li>
              <li>Simple, intuitive navigation to reduce friction</li>
            </ul>
          </div>
          <div className="rj-final-row__gif">
            <GifSlot label="Home page GIF" />
          </div>
        </div>

        {/* Row 2: GIF left, card right */}
        <div className="rj-final-row rj-final-row--reverse" style={{ marginBottom: '2rem' }}>
          <div className="rj-rajang-card">
            <span className="rj-rajang-card__emoji">🔗</span>
            <strong className="rj-rajang-card__title">The About Page: Keeping It Simple, Yet Credible</strong>
            <ul className="rj-rajang-card__bullets">
              <li>Straight-to-the-point content: mission, values, location, capabilities</li>
              <li>Builds trust without overwhelming users with unnecessary info</li>
            </ul>
          </div>
          <div className="rj-final-row__gif">
            <GifSlot label="About page GIF" />
          </div>
        </div>

        {/* Row 3: card left, GIF right */}
        <div className="rj-final-row">
          <div className="rj-rajang-card">
            <span className="rj-rajang-card__emoji">💌</span>
            <strong className="rj-rajang-card__title">The Careers Page: Built to Attract Talent</strong>
            <ul className="rj-rajang-card__bullets">
              <li>Roles separated by level, each with concise job descriptions</li>
              <li>'Life at Rajang' section gives a peek into the company culture and perks</li>
              <li>Balanced tone, friendly and professional, without overhyping</li>
            </ul>
          </div>
          <div className="rj-final-row__gif">
            <GifSlot label="Careers page GIF" />
          </div>
        </div>
      </section>

      {/* ── 8. Reflection (black bg) ─────────────────────── */}
      <div className="rj-dark-section">
        <div className="rj-dark-section__inner">
          <span className="rj-dark-section__emoji">🔭</span>
          <h2 className="rj-dark-section__title">Looking back - What I learned</h2>
          <ul className="rj-dark-list">
            {[
              {
                title: 'Content design matters. A lot.',
                body: "It's not just about filling space, it's about guiding users, helping SEO, and aligning with business goals.",
              },
              {
                title: 'B2B and B2C are totally different beasts.',
                body: 'And understanding the difference will make or break your design decisions.',
              },
              {
                title: "Feedback isn't rejection, it's redirection.",
                body: 'Every change brought me closer to a solution that worked for everyone.',
              },
            ].map((item) => (
              <li key={item.title} className="rj-dark-list-item">
                <div>
                  <strong className="rj-dark-list-item__title">{item.title}</strong>
                  <p className="rj-dark-list-item__text">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <hr className="rj-reflection-divider" />

          <p className="rj-reflection-closing-italic">I started with a website redesign.</p>
          <p className="rj-reflection-closing-bold">I ended with a deeper understanding of how design and strategy meet.</p>
        </div>
      </div>

    </CaseStudyLayout>
  )
}
