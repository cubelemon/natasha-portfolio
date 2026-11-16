import CaseStudyLayout from '../../components/CaseStudyLayout'
import { ScatterVisual, FundingVisual, TimelineVisual, RegionalVisual, NarrativeVisual, DirectionVisual } from '../../components/OlympicsVisuals'

const LIVE_URL = 'https://is-the-olympics-fair.vercel.app/'

// Replace null with an asset path when images are ready, e.g.
// hero: '/assets/olympics-fair/hero.png'. GIFs work here too.
const IMAGES = {
  hero: '/assets/olympics-fair/1st-hero.gif',
  data: '/assets/olympics-fair/datasheet.jpeg',
}

function ImageSpace({ name, label, caption, wide = false }) {
  return (
    <figure className={`of-figure${wide ? ' of-figure--wide' : ''}`}>
      {IMAGES[name] ? (
        <a className="of-asset-link" href={IMAGES[name]} target="_blank" rel="noreferrer" aria-label={`View ${label} at full size (opens in a new tab)`}><img src={IMAGES[name]} alt={label} loading={name === 'hero' ? 'eager' : 'lazy'} /><span className="of-asset-link__hint">View full size ↗</span></a>
      ) : (
        <div className="of-image-space">
          <span className="of-image-space__icon" aria-hidden="true">＋</span>
          <span className="of-image-space__label">{label}</span>
          <span className="of-image-space__hint">Image space · {wide ? 'landscape image or GIF' : 'image or GIF'}</span>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function LiveLink() {
  return <a className="of-live-link" href={LIVE_URL} target="_blank" rel="noreferrer">Explore the live project <span aria-hidden="true">↗</span></a>
}

const CHARTS = [
  { num: '01', title: 'Is there a bigger pattern?', body: 'The scatterplot brings 132 countries together, comparing wealth with medal totals. Equal-sized dots keep attention on the relationship between the variables, while named outliers give readers a reason to look closer.' },
  { num: '02', title: 'What does investment make possible?', body: 'The funding section explores the opportunities behind the numbers. Showing the range of sports supported makes an abstract budget comparison easier to connect to an athlete’s chances.' },
  { num: '03', title: 'Who is behind each medal?', body: 'Malaysia’s timeline gives individual athletes a place in the story. Gold, silver, and bronze sit on separate rows. Keeping the gold row visible, even when empty, makes absence part of the visualisation.' },
  { num: '04', title: 'Does this go beyond Malaysia?', body: 'The Southeast Asian comparison widens the story at the end. Horizontal bars make differences in medal totals easy to compare, while Total, Gold, and Per Million controls offer different ways to read the gap.' },
]

export default function OlympicsFair() {
  return (
    <CaseStudyLayout
      slug="olympics-fair"
      pageClass="of-page"
      heroTag="Data Visualisation · University of Sydney · 2026"
      heroTitle="Is the Olympics Actually Fair?"
      heroSubtitle="Turning Olympic data into a story about wealth, opportunity, and who gets a chance to win."
      meta={[
        { label: 'Project', value: 'DECO3100 · Individual project' },
        { label: 'Focus', value: 'Data storytelling & visualisation' },
        { label: 'Tools', value: 'Google Sheets, D3.js, Claude' },
      ]}
    >
      <div className="of-intro">
        <LiveLink />
        <ImageSpace name="hero" label="Final website on desktop" wide />
        <dl className="of-summary">
          <div><dt>132</dt><dd>countries in the scatter dataset</dd></div>
          <div><dt>9</dt><dd>usability testing participants</dd></div>
          <div><dt>2</dt><dd>rounds of design iteration</dd></div>
        </dl>
      </div>

      <section className="cs-section of-section">
        <p className="cs-section__label">The starting point</p>
        <h2 className="cs-section__title">It started with a question close to home</h2>
        <p className="cs-section__body">I’m Malaysian, so this question felt personal. Malaysia has a larger population than Australia, yet a much smaller all-time Olympic medal count. I wanted to understand what sat behind that difference.</p>
        <p className="cs-section__body">That curiosity became an interactive data story about wealth, sports investment, and the opportunities athletes have long before they reach the starting line. I wanted a curious reader to follow the argument without needing a background in sport or data.</p>
        <aside className="of-callout">The design challenge: turn a collection of numbers into a story someone could understand, explore, and question.</aside>
      </section>

      <div className="of-band of-band--soft">
        <section className="cs-section of-section">
          <p className="cs-section__label">Working with the data</p>
          <h2 className="cs-section__title">Before I could tell the story, I had to bring the data together</h2>
          <p className="cs-section__body">There wasn’t one dataset that answered my question. I brought together Olympic medal records from Kaggle, GDP per capita from Our World in Data and the World Bank, and population figures from World Population Review.</p>
          <ol className="of-process">
            <li><strong>Join the sources.</strong><p>I used VLOOKUP in Google Sheets to match countries across the medal, GDP, and population datasets.</p></li>
            <li><strong>Prepare the comparisons.</strong><p>I removed defunct nations and added medals per million as a derived column. The final scatter dataset contained 132 countries and seven columns.</p></li>
            <li><strong>Build the missing context.</strong><p>I compiled Malaysia’s medal timeline from Olympedia and Wikipedia, cross-referencing the records. I also built the Southeast Asian comparison and sourced funding figures individually from official documents.</p></li>
          </ol>
          <ImageSpace name="data" label="Google Sheets dataset combining Olympic medal totals, GDP, and population, with the VLOOKUP formula visible" caption="Joining medal, GDP, and population data in Google Sheets using VLOOKUP to match countries across sources." wide />
          <p className="of-note">The sources cover different periods: medal history, 2024 economic data, and 2026 population estimates. The comparison offers context for a relationship; it cannot isolate the cause of medal success.</p>
        </section>
      </div>

      <section className="cs-section--wide of-section of-chart-section">
        <div className="of-reading-width"><p className="cs-section__label">From data to insight</p>
        <h2 className="cs-section__title">Every chart needed to answer a question</h2>
        <p className="cs-section__body">The data suggested a relationship between national wealth and Olympic success. The next challenge was deciding how to make that relationship understandable. Each visualisation needed a clear role in the argument.</p><p className="of-note">These interactive explanations build on the chart ideas in my A1 presentation, using the project’s datasets. They show how each visual form supports a different part of the story.</p></div>
        <div className="of-chart-list">
          {CHARTS.map((chart, index) => {
            const Visual = [ScatterVisual, FundingVisual, TimelineVisual, RegionalVisual][index]
            return <article className="of-chart of-chart--visual" key={chart.num}>
              <div className="of-chart__copy"><span className="of-number">Chart / {chart.num}</span><h3>{chart.title}</h3><p>{chart.body}</p></div>
              <Visual />
            </article>
          })}
        </div>
      </section>

      <div className="of-band of-band--dark">
        <section className="cs-section of-section">
          <p className="cs-section__label">Designing the narrative</p>
          <h2 className="cs-section__title">I built the story backwards</h2>
          <p className="cs-section__body">I started with the takeaway I wanted readers to consider, then asked what they needed to understand before reaching it. That helped me decide which evidence belonged in the story and what each section needed to explain.</p>
          <p className="cs-section__body">But an outline only took me so far. The order changed as I received feedback and watched people read. In the final version, Malaysia’s story gives readers a personal connection before the regional comparison widens the frame.</p>
          <NarrativeVisual />
          <ol className="of-story-flow" aria-label="Final narrative sequence"><li>A personal question</li><li>The global pattern</li><li>Investment & opportunity</li><li>The athletes behind it</li><li>Malaysia is not alone</li></ol>
        </section>
      </div>

      <section className="cs-section of-section">
        <p className="cs-section__label">Usability testing</p>
        <h2 className="cs-section__title">What changed, and what I learned</h2>
        <p className="cs-section__body">I tested with nine participants, mainly design students, and made two rounds of changes.</p>
        <h3 className="of-subheading">What changed</h3>
        <ol className="of-process">
          <li><strong>A clearer story.</strong><p>I replaced funding bars with a sports grid, broke Lee Chong Wei’s story into three visual beats, and moved the regional comparison to the ending.</p></li>
          <li><strong>Easier exploration.</strong><p>I fixed chart toggles, added clickability cues, increased text contrast, and clarified unfamiliar sports language.</p></li>
        </ol>
        <h3 className="of-subheading">What I learned</h3>
        <p className="cs-section__body">Readable numbers don’t guarantee a clear insight. Watching people explain the story back to me showed where the sequence, wording, and interactions needed work. I also learned to weigh feedback against its purpose: I kept the map because it helped other readers understand the geography.</p>
      </section>

      <section className="cs-section--wide of-section">
        <div className="of-reading-width">
          <p className="cs-section__label">Visual direction</p>
          <h2 className="cs-section__title">An editorial look for an investigative story</h2>
          <p className="cs-section__body">My concept presentation set the direction: dark backgrounds, Olympic colours, condensed headlines, and quieter body text. I wanted the story to feel investigative and accessible to young sports fans and readers who saw their own experience in it.</p>
        </div>
        <DirectionVisual />
      </section>

      <div className="of-band of-band--dark">
        <section className="cs-section--wide of-section">
          <div className="of-reading-width">
            <p className="cs-section__label">The final experience</p>
            <h2 className="cs-section__title">Your turn to play with the data</h2>
            <p className="cs-section__body">Scroll through the story, explore a country, and try the chart controls. What changes when you look beyond the medal table?</p>
            <a className="of-live-link" href="#olympics-live-site">Play with the site <span aria-hidden="true">↓</span></a>
          </div>
          <div className="of-site-embed">
            <div className="of-site-embed__bar"><span>Is the Olympics Actually Fair?</span><a href={LIVE_URL} target="_blank" rel="noreferrer">Open full screen ↗</a></div>
            <iframe id="olympics-live-site" src={LIVE_URL} title="Explore Is the Olympics Actually Fair? — interactive live project" loading="lazy" allow="clipboard-write" />
          </div>
          <p className="of-note of-ai-note of-reading-width">AI assistance: I used Claude and Claude Code for data preparation guidance, chart planning, research support, code generation, and D3 rebuilds. D3’s Observable examples also informed the implementation.</p>
        </section>
      </div>

      <section className="cs-section of-section">
        <p className="cs-section__label">Looking back</p>
        <h2 className="cs-section__title">What I learned about turning data into insights</h2>
        <div className="of-reflections">
          <article><h3>A chart can be readable and still miss the point.</h3><p>The funding comparison showed the figures, but the sports grid better expressed the idea I wanted readers to consider. Choosing a visual form meant thinking about the question it answered.</p></article>
          <article><h3>The order is part of the design.</h3><p>Moving the regional comparison changed its role in the story. The same evidence made more sense once readers had connected with the Malaysian perspective.</p></article>
          <article><h3>Understanding needs to be tested.</h3><p>Watching people read exposed assumptions I couldn’t see on my own, from unfamiliar sports language to interactions that didn’t look clickable. Asking readers to explain the story back to me became one of the most useful parts of the process.</p></article>
        </div>
        <aside className="of-callout">I started with a question about medal counts. I came away thinking much more carefully about how design shapes the meaning people take from data.</aside>
      </section>
    </CaseStudyLayout>
  )
}
