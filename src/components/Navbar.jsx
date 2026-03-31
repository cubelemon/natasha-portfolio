import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar({ onContactClick }) {
  const navigate = useNavigate()
  const location = useLocation()

  // Handle "Projects" link — go to home and scroll to #projects
  function handleProjectsClick(e) {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav>
      <ul className="nav__link--list">
        <li>
          <figure>
            <Link to="/">
              <img id="personal-logo" src="/assets/home/personal--logo.png" alt="Natasha logo" />
            </Link>
          </figure>
        </li>
        <li className="nav__link">
          <Link to="/about" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            About
          </Link>
        </li>
        <li className="nav__link">
          <a href="#projects" onClick={handleProjectsClick} className="nav__link--anchor link__hover-effect link__hover-effect--black">
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a href="#" className="nav__link--anchor link__hover-effect link__hover-effect--black" onClick={(e) => { e.preventDefault(); onContactClick() }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
