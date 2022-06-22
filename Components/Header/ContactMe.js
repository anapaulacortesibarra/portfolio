import style from './Header.module.css'
import CV from '../../Assets/CV.pdf'
import perfil from '../../Assets/perfil.png'

const ContactMe = () => {
  return (
    <div>
      <div className={style.link}>
        <a href={CV} download className="btn">Download Resume</a>
        <a className="btn btn-primary" href="#contact">Contact Me</a>

        <div className={style.photo}>
          <img src={perfil} alt="Profile photo" />
        </div>
      </div>
    </div>
  )
}

export default ContactMe