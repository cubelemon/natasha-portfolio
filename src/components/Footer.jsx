export default function Footer({ onContactClick }) {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <img className="footer__logo--img" src="/assets/personal--logo.svg" alt="Natasha logo" />
          </figure>
          <div className="footer__social--list">
            <a href="https://github.com/cubelemon" target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/natasha-p-ng-9a0a41269/" target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white">
              LinkedIn
            </a>
            <a href="#" className="footer__social--link link__hover-effect link__hover-effect--white"
              onClick={(e) => { e.preventDefault(); onContactClick() }}>
              Contact
            </a>
            <a href="/assets/Natasha_s_Resume_Sep_2025.pdf" target="_blank" rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white">
              Resume
            </a>
          </div>
          <div className="footer__copyright">Designed & Developed by Natasha Png</div>
        </div>
      </div>
    </footer>
  )
}
