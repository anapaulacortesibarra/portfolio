import style from './Contact.module.css'

const Contact = () => {

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className={style.contact__container}>
        <a href="www.linkedin.com/in/anapaulacortes" className="btn" target='_blank'>Linkedin</a>
        <a href=" https://wa.me/573855988952" className="btn btn-primary" target='_blank'>Whatsapp</a>
      </div>
    </section>
  )

}

export default Contact;