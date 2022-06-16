import style from './Header.module.css'
//import CV from ''assets'
import perfil from '../../Assets/perfil.png'

const ContactMe = () => {
  return (
    <div className={style.link}>
      <a className="btn">Download CV</a>
      {/* <a href={CV} download>Download CV</a> */}
      <a className="btn btn-primary">Contact Me</a>

      <div className={style.photo}>
        <img src={perfil} alt="Profile photo" />
      </div>
    </div>
  )
}

export default ContactMe