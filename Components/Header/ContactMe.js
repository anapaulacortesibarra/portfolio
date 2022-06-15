import style from './Header.module.css'
//import CV from ''assets'

const ContactMe = () => {
  return (
    <div className={style.link}>
      <a className="btn">Download CV</a>
      {/* <a href={CV} download>Download CV</a> */}
      <a className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default ContactMe