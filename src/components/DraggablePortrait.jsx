import { useRef, useState } from 'react'

export default function DraggablePortrait({ children }) {
  const frame = useRef(null)
  const gesture = useRef(null)
  const position = useRef({ x: 0, y: 0 })
  const suppressClick = useRef(false)
  const [dragging, setDragging] = useState(false)

  function start(event) {
    if (event.button !== 0 || event.pointerType === 'touch') return
    suppressClick.current = false
    gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY, origin: { ...position.current } }
  }

  function move(event) {
    const element = frame.current
    const active = gesture.current
    if (active && active.id === event.pointerId) {
      const dx = event.clientX - active.x
      const dy = event.clientY - active.y
      if (!suppressClick.current && Math.hypot(dx, dy) < 6) return
      suppressClick.current = true
      if (!element.hasPointerCapture(event.pointerId)) element.setPointerCapture(event.pointerId)
      setDragging(true)
      const limit = Math.min(70, Math.max(0, (window.innerWidth - 340) / 2))
      position.current = { x: Math.max(-limit, Math.min(limit, active.origin.x + dx)), y: Math.max(-55, Math.min(55, active.origin.y + dy)) }
      element.style.setProperty('--portrait-x', `${position.current.x}px`)
      element.style.setProperty('--portrait-y', `${position.current.y}px`)
      element.style.setProperty('--portrait-tilt', '0deg')
    } else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && event.pointerType !== 'touch') {
      const bounds = element.getBoundingClientRect()
      element.style.setProperty('--portrait-tilt', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 5}deg`)
    }
  }

  function finish(event) {
    gesture.current = null
    setDragging(false)
    if (frame.current.hasPointerCapture(event.pointerId)) frame.current.releasePointerCapture(event.pointerId)
  }

  return (
    <div ref={frame} className={`portrait-drag${dragging ? ' portrait-drag--active' : ''}`}
      onPointerDown={start} onPointerMove={move} onPointerUp={finish} onPointerCancel={finish}
      onLostPointerCapture={() => { gesture.current = null; setDragging(false) }}
      onPointerLeave={() => frame.current.style.setProperty('--portrait-tilt', '0deg')}
      onDragStart={event => event.preventDefault()}
      onClickCapture={event => { if (suppressClick.current && event.detail !== 0) { event.stopPropagation(); event.preventDefault() } }}>
      {children}
      <span className="portrait-drag__hint" aria-hidden="true">↔ drag me</span>
    </div>
  )
}
