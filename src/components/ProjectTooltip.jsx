export default function ProjectTooltip({ id, children }) {
  return (
    <div id={id} className="project-tooltip" role="tooltip">
      <p>{children}</p>
    </div>
  )
}
