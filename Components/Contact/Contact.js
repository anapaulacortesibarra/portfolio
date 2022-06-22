import style from './Contact.module.css'

const Contact = () => {

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className={style.contact__container}>
        <a href="www.linkedin.com/in/anapaulacortes" className="btn" target='_blank'>Linkedin</a>
        <a href="mailto:anapaulacortesibarra@gmail.com" className="btn btn-primary" target='_blank'>Email</a>
      </div>
    </section>
  )

}

export default Contact;