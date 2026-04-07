import CaseStudyLayout from '../../components/CaseStudyLayout'

const TOOLS = ['Fusion 360', 'Rhino', 'Blender', 'Figma', 'Laser Cutting', 'Vacuum Forming']

export default function SatuJohan() {
  return (
    <CaseStudyLayout slug="satujohan" hideHero={true}>
      <style>{`
        .sj-concept-row {
          display: flex;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        .sj-workflow-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .sj-workflow-arrow {
          font-size: 2.5rem;
          color: rgba(255,255,255,0.4);
          flex-shrink: 0;
          align-self: center;
          padding-bottom: 2rem;
        }
        .sj-photos-row {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .sj-photos-row > div { flex: 1; }
        .sj-poster-row {
          display: flex;
          gap: 4rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        .sj-ai-row {
          display: flex;
          gap: 4rem;
          align-items: flex-start;
          max-width: 1100px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        @media (max-width: 768px) {
          .sj-cover { height: 50vh !important; }
          .sj-concept-row {
            flex-direction: column;
            gap: 2rem;
            padding: 3rem 1.5rem;
          }
          .sj-workflow-row { flex-direction: column; }
          .sj-workflow-arrow { display: none; }
          .sj-workflow-col img { max-height: 200px !important; }
          .sj-photos-row { flex-direction: column; }
          .sj-poster-row { flex-direction: column; padding: 3rem 1.5rem; }
          .sj-poster-img { width: 100% !important; }
          .sj-ai-row { flex-direction: column; padding: 3rem 1.5rem; }
          .sj-ai-img { width: 100% !important; }
        }
      `}</style>

      {/* ── HERO — Full bleed cover ───────────────────── */}
      <div className="sj-cover" style={{ width: '100%', height: '70vh', overflow: 'hidden', position: 'relative' }}>
        <img
          src="/assets/satujohan/cover.png"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          alt="Satu Johan cover"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#84ddda', marginBottom: '0.5rem' }}>
            DECO2018 — Physical Prototyping, USYD 2024
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: '0.5rem' }}>
            Satu Johan
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', maxWidth: 600 }}>
            A chocolate artefact celebrating Malaysia's ONE Championship Muay Thai fighter, Johan Ghazali.
          </p>
        </div>
      </div>

      {/* ── S1: The Concept (white) ───────────────────── */}
      <div style={{ background: 'white' }}>
        <div className="sj-concept-row">
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.75rem' }}>The Concept</p>
            <h2 style={{ fontWeight: 900, fontSize: '2.5rem', color: '#051616', marginBottom: '0.5rem', lineHeight: 1.1 }}>Satu Johan.</h2>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#0c9590', marginBottom: '1.5rem' }}>Satu = One. Johan = Champion.</p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Johan Ghazali is Malaysia's ONE Championship Muay Thai fighter and a national symbol. When I had to design a chocolate artefact for my physical prototyping class, the answer was obvious. Satu Johan ties directly to ONE Championship, the global martial arts organisation, while celebrating Johan as our champion.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              The chocolate takes the shape of the number 1 in Malaysia's silhouette, wrapped with the ONE Championship belt. The text was changed from World Champion to World Johan, combining brand, language, and identity to represent him as our champion, not just a fighter.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75 }}>
              The packaging becomes a mini boxing ring, a trophy stage and display case. Inside the lid reads:{' '}
              <em style={{ color: '#0c9590' }}>Satu Hati. Satu Semangat. Satu Johan.</em>
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src="/assets/satujohan/johan.png"
              alt="Johan Ghazali"
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover', height: '420px', display: 'block' }}
            />
            <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#777', textAlign: 'center', marginTop: '0.75rem' }}>
              Johan Ghazali, ONE Championship Muay Thai fighter
            </p>
          </div>
        </div>
      </div>

      {/* ── S2: Tools (white, centered) ───────────────── */}
      <div style={{ background: 'white', padding: '2rem 2rem 3rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '1.25rem' }}>Tools Used</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
            {TOOLS.map(tool => (
              <span key={tool} style={{ background: '#f5f5f5', color: '#444', border: '1px solid #e0e0e0', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: 600 }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── S3: Process (dark brown) ──────────────────── */}
      <div style={{ background: '#3d1f0d', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: 'white', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Design & 3D Modelling Strategy
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>Process Overview</p>
        </div>
        <div className="sj-workflow-row">
          <div className="sj-workflow-col" style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>3D Printing</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Chocolate Making</p>
            <img src="/assets/satujohan/chocolatemaking.png" alt="3D Modelling" style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'contain', maxHeight: '280px', display: 'block' }} />
          </div>
          <span className="sj-workflow-arrow">→</span>
          <div className="sj-workflow-col" style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>Laser Cutting</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Packaging Design</p>
            <img src="/assets/satujohan/lasercut.png" alt="Laser Cutting" style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'contain', maxHeight: '280px', display: 'block' }} />
          </div>
          <span className="sj-workflow-arrow">→</span>
          <div className="sj-workflow-col" style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>Blender</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Materials & Rendering</p>
            <img src="/assets/satujohan/blender.png" alt="Blender Rendering" style={{ width: '100%', borderRadius: '0.75rem', objectFit: 'contain', maxHeight: '280px', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* ── S4: Final Renders (white) ─────────────────── */}
      <div style={{ background: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.75rem' }}>Final Renders</p>
          <h2 style={{ fontWeight: 900, fontSize: '2rem', color: '#051616', marginBottom: '1rem' }}>The finished artefact</h2>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, maxWidth: '700px' }}>
            Rendered in Blender using 3-point lighting with warm Blackbody tones for an arena feel. The scratched plastic on the boxing ring represents fight history. The mirror interior lets the viewer become the champion.
          </p>
          <img
            src="/assets/satujohan/cover.png"
            alt="Final render"
            style={{ width: '100%', borderRadius: '1rem', maxHeight: '600px', objectFit: 'cover', display: 'block', marginTop: '1.5rem' }}
          />
        </div>
      </div>

      {/* ── S5: Poster (dark) ─────────────────────────── */}
      <div style={{ background: '#051616' }}>
        <div className="sj-poster-row">
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.75rem' }}>The Poster</p>
            <h2 style={{ fontWeight: 900, fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Championship moment</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75 }}>
              Designed in Figma with a full-bleed render as the hero element. The camera was lowered to make the object fill the frame, confetti was added for celebration, and the ONE Championship logo was integrated into the typography using Futura.
            </p>
          </div>
          <div className="sj-poster-img" style={{ flexShrink: 0, width: '380px' }}>
            <img
              src="/assets/satujohan/poster.png"
              alt="Satu Johan poster"
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ── S6: AI Note (cream) ───────────────────────── */}
      <div style={{ background: '#faf7f2' }}>
        <div className="sj-ai-row">
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.75rem' }}>AI in My Process</p>
            <h2 style={{ fontWeight: 900, fontSize: '2rem', color: '#051616', marginBottom: '1.25rem' }}>Using AI as a thinking tool, not a making tool</h2>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Before touching any software, I used AI during the early concept exploration stage to rapidly visualise and stress-test ideas. I would describe a concept, generate rough visuals, evaluate them, and discard them fast. This made ideas cheaper to explore and helped me arrive at the Satu Johan concept more deliberately rather than getting attached to the first thing I sketched.
            </p>
            <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75 }}>
              Once the concept was locked, AI was done. Every model, material, render, and poster was built by hand in Fusion 360, Rhino, and Blender. AI made the thinking faster. The craft was still entirely mine.
            </p>
            <div style={{ background: '#1a3d3a', borderRadius: '1.25rem', padding: '2rem', marginTop: '1.5rem' }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'white', lineHeight: 1.7, margin: 0 }}>
                "AI made ideas more disposable. That is its best use, not as a maker, but as a thinking accelerator."
              </p>
            </div>
          </div>
          <div className="sj-ai-img" style={{ flexShrink: 0, width: '320px' }}>
            <img
              src="/assets/satujohan/ai.png"
              alt="AI ideation process"
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ── S7: Full Circle (cream) ───────────────────── */}
      <div style={{ background: '#faf7f2' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0c9590', marginBottom: '0.75rem' }}>Full Circle</p>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#051616', marginBottom: '1.25rem' }}>I ended up training there.</h2>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            I started this project admiring Johan from afar. He was a national hero and the perfect symbol for what I wanted to create. What I did not expect was what happened after.
          </p>
          <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            By the time I submitted, I had started training Muay Thai seriously. That led me to Rentap Gym, Johan's own gym in Kuching. I trained there, fought representing the gym, and eventually got to meet Johan in person and show him the chocolate I made in his honour. He loved it.
          </p>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#0c9590', lineHeight: 1.75 }}>
            That is what happens when you design something you actually care about.
          </p>
          <div className="sj-photos-row">
            <div>
              <img src="/assets/satujohan/training@rentap.png" alt="Training at Rentap Gym" style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '1rem', display: 'block' }} />
              <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#777', textAlign: 'center', marginTop: '0.75rem' }}>Training at Rentap Gym</p>
            </div>
            <div>
              <img src="/assets/satujohan/me&johan.jpeg" alt="Meeting Johan Ghazali" style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '1rem', display: 'block' }} />
              <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '0.85rem', color: '#777', textAlign: 'center', marginTop: '0.75rem' }}>Meeting Johan Ghazali</p>
            </div>
          </div>
        </div>
      </div>

    </CaseStudyLayout>
  )
}
