import { useState } from 'react'
import data from '../data/olympics.json'

function Panel({ label, title, children, note }) {
  return <div className="ov-panel"><p className="ov-eyebrow">{label}</p><h4>{title}</h4>{children}{note && <p className="ov-note">{note}</p>}</div>
}
function Switch({ options, value, onChange }) {
  return <div className="ov-switch" role="group" aria-label="Chart view">{options.map(([key,label]) => <button type="button" key={key} aria-pressed={key === value} onClick={() => onChange(key)}>{label}</button>)}</div>
}
const colours = { Malaysia: '#0085c7', Australia: '#f4c300', China: '#df0024', Jamaica: '#009f6b' }

export function ScatterVisual() {
  const [country, setCountry] = useState('Malaysia')
  const selected = data.scatter.find(d => d.Country === country)
  const maxX = Math.max(...data.scatter.map(d => d.GDP_Per_Capita))
  const maxY = Math.max(...data.scatter.map(d => d.Total_Medals))
  const x = v => 56 + v / maxX * 470
  const y = v => 250 - Math.log1p(v) / Math.log1p(maxY) * 218
  return <Panel label="The global pattern" title="Wealth, plotted against medals" note="Project dataset · All-time medal totals · Medal axis uses a logarithmic scale to reveal differences across the range.">
    <Switch options={Object.keys(colours).map(c => [c,c])} value={country} onChange={setCountry} />
    <svg className="ov-scatter" viewBox="0 0 560 295" role="img" aria-label={`GDP per capita versus medals. ${country}: ${selected?.Total_Medals} medals.`}>
      {[0,10,100,1000].map(v => <g key={v}><line x1="56" x2="530" y1={y(v)} y2={y(v)} stroke="#343434" /><text x="46" y={y(v)+4} textAnchor="end">{v.toLocaleString()}</text></g>)}
      {[0,50000,100000].filter(v => v <= maxX).map(v => <text key={v} x={x(v)} y="270" textAnchor="middle">${v/1000}k</text>)}
      <text x="290" y="291" textAnchor="middle">GDP per capita (USD)</text>
      <text x="56" y="17">All-time medals · log scale</text>
      {data.scatter.filter(d => d.Country !== country).map(d => <circle key={d.Country} cx={x(d.GDP_Per_Capita)} cy={y(d.Total_Medals)} r="4" fill={colours[d.Country] || '#b7b7b7'} opacity={colours[d.Country] ? 0.95 : 0.45}><title>{`${d.Country}: ${d.Total_Medals} medals; GDP per capita $${d.GDP_Per_Capita.toLocaleString()}`}</title></circle>)}
      {selected && <circle cx={x(selected.GDP_Per_Capita)} cy={y(selected.Total_Medals)} r="7" fill={colours[country]} stroke="white" strokeWidth="2" />}
    </svg>
    <div className="ov-detail" aria-live="polite"><strong style={{color:colours[country]}}>{country}</strong><span>{selected?.Total_Medals.toLocaleString()} medals</span><span>${selected?.GDP_Per_Capita.toLocaleString()} GDP per capita</span></div>
  </Panel>
}

export function FundingVisual() {
  const [mode,setMode] = useState('Funding_USD_M')
  const max = Math.max(...data.funding.map(d => d[mode]))
  return <Panel label="The investment comparison" title="Putting spending in context" note="Figures from the project’s funding dataset, in USD millions. The source budgets cover different programmes; this is contextual comparison.">
    <Switch value={mode} onChange={setMode} options={[[ 'Funding_USD_M', 'Investment' ],[ 'Cost_Per_Medal_USD_M','Cost per medal' ]]} />
    <div className="ov-bars">{data.funding.map(d => <div className="ov-bar-row" key={d.Country}><div><span>{d.Country}</span><strong>${d[mode].toFixed(mode === 'Funding_USD_M' ? 0 : 2)}M</strong></div><div className="ov-track"><div style={{width:`${d[mode]/max*100}%`,background:d.Country === 'Malaysia' ? '#0085c7' : '#f4c300'}} /></div></div>)}</div>
  </Panel>
}

export function TimelineVisual() {
  const [year,setYear] = useState(2016)
  const current = data.timeline.find(d => d.Year === year)
  return <Panel label="The human story" title="An empty row says something too" note="Malaysia’s medal counts by Games, 1992–2024 · Project timeline dataset. Choose a year to explore.">
    <div className="ov-timeline-wrap"><div className="ov-timeline"><div />{data.timeline.map(d => <button type="button" key={d.Year} className={year === d.Year ? 'is-selected' : ''} onClick={() => setYear(d.Year)} aria-pressed={year === d.Year}>{d.Year}</button>)}
    {['Gold','Silver','Bronze'].map((medal,i) => <div className="ov-medal-row" key={medal}><span>{medal}</span>{data.timeline.map(d => <div key={d.Year} aria-label={`${d.Year}: ${d[medal]} ${medal.toLowerCase()} medals`}>{Array.from({length:d[medal]},(_,n) => <i key={n} style={{background:['#f4c300','#c0c5cd','#ce8e57'][i]}} />)}</div>)}</div>)}
    </div></div>
    <div className="ov-detail" aria-live="polite"><strong>{current.City} {year}</strong><span>{current.Silver} silver · {current.Bronze} bronze · {current.Gold} gold</span></div>
  </Panel>
}

export function RegionalVisual() {
  const [mode,setMode] = useState('total')
  const rows = data.regional.map(d => ({...d,value:mode === 'total' ? d.Total_Medals : d.Total_Medals/d.Population_M})).sort((a,b) => b.value-a.value)
  const max = rows[0].value
  return <Panel label="The regional picture" title="A different way to read the gap" note="Selected Southeast Asian countries with Australia and Great Britain as references · Project comparison dataset.">
    <Switch value={mode} onChange={setMode} options={[[ 'total','Total medals' ],[ 'perMillion','Per million people' ]]} />
    <div className="ov-bars">{rows.map(d => <div className="ov-bar-row" key={d.Country}><div><span>{d.Country}</span><strong>{mode === 'total' ? d.value : d.value.toFixed(1)}</strong></div><div className="ov-track"><div style={{width:`${d.value/max*100}%`,background:d.Region === 'Wealthy' ? '#f4c300' : '#0085c7'}} /></div></div>)}</div>
  </Panel>
}

export function NarrativeVisual() {
  const steps=[['Start with the takeaway','What should readers leave thinking about?'],['Explain the mechanism','Connect investment with the opportunities it supports.'],['Look at the bigger picture','Place Malaysia in regional and global context.'],['Make it personal','Give readers a reason to care before asking them to analyse.']]
  return <Panel label="From the concept presentation" title="What do readers need to know before this?" note="A reconstruction of the backwards-planning method from A1. The final reading order evolved through testing."><ol className="ov-narrative">{steps.map(([title,body],i) => <li key={title}><span>0{i+1}</span><div><h5>{title}</h5><p>{body}</p></div>{i<steps.length-1 && <b aria-hidden="true">↓</b>}</li>)}</ol></Panel>
}

export function DirectionVisual() {
  return <div className="ov-direction"><Panel label="Visual direction" title="Investigative. Data-led. Human.">
    <div className="ov-audience"><div><span>Primary audience</span><p>Sports fans aged 18–35, curious about what sits behind the medal table.</p></div><div><span>Secondary audience</span><p>Young people from developing countries who recognise their own story.</p></div></div>
    <div className="ov-palette">{[['Black','#000000'],['Red','#DF0024'],['Gold','#F4C300'],['Blue','#0085C7'],['Green','#009F6B']].map(([name,hex]) => <div key={name}><i style={{background:hex}} /><strong>{name}</strong><code>{hex}</code></div>)}</div>
    <div className="ov-type"><div><span>Headline direction / Condensed & bold</span><p>BEHIND<br />THE MEDALS.</p></div><div><span>Body / Inter</span><p>One question. A global pattern.<br />A story told through data.</p><small>Clear labels. Short explanations. Room to explore.</small></div></div>
  </Panel></div>
}
