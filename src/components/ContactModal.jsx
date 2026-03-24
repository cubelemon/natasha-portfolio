import { useState, useRef } from 'react'

export default function ContactModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await window.emailjs.sendForm(
        'service_ev3p7ko',
        'template_95u5byw',
        formRef.current,
        'CjztJaVfCr5f5FXRR'
      )
      setLoading(false)
      setSuccess(true)
    } catch {
      setLoading(false)
      alert("The email service is temporarily unavailable. Please contact me directly at natashapng.png@email.com")
    }
  }

  function handleClose() {
    setSuccess(false)
    setLoading(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">Here's a bit about me</h3>
        <h4 className="modal__sub-title modal__sub-title--about">UX Designer / Frontend Engineer</h4>
        <p className="modal__para">
          I'm an interaction designer who sees every design as a work in progress — imperfect but full of potential.
          I thrive in fast-moving environments, adapting quickly, shipping often, and using each iteration as a launchpad for innovation.
        </p>
        <div className="modal__languages">
          <div className="modal__languages">
            {[
              { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png", name: "HTML" },
              { src: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png", name: "CSS" },
              { src: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png", name: "JavaScript" },
              { src: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png", name: "React" },
              { src: "https://www.figma.com/community/resource/b2593c93-dcd3-4eab-942a-b7703505d1eb/thumbnail", name: "Figma" },
              { src: "https://seeklogo.com/images/A/adobe-illustrator-logo-775FAF240B-seeklogo.com.png", name: "Illustrator" },
              { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png", name: "Photoshop" },
            ].map(({ src, name }) => (
              <figure className="modal__language" key={name}>
                <img className="modal__language--img" src={src} alt={name} />
                <span className="language__name">{name}</span>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="modal__half modal__contact">
        <i className="fas fa-times modal__exit click" onClick={handleClose}></i>
        <h3 className="modal__title modal__title--contact">Let's have a chat</h3>
        <h3 className="modal__sub-title modal__sub-title--contact">I'm currently open to new opportunities.</h3>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input className="input" type="text" name="user_name" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input className="input" type="email" name="user_email" required />
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea className="input" name="message" required></textarea>
          </div>
          <button id="contact__submit" className="form__submit">Send it my way</button>
        </form>

        {loading && (
          <div className="modal__overlay modal__overlay--loading modal__overlay--visible">
            <i className="fas fa-spinner"></i>
          </div>
        )}
        {success && (
          <div className="modal__overlay modal__overlay--success modal__overlay--visible">
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        )}
      </div>
    </div>
  )
}
