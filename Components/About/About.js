import s from './About.module.css'


const About = () => {

  return (

    <section id="about">
      <h2>About Me</h2>
      <div className={s.about_container}>
        <div className={s.content}>
          <div className={s.cards}>
            <article className={s.art}>
              <h5>Experience</h5>
            </article>
            <article className={s.art}>
              <h5>Projects</h5>
            </article>
          </div>
          <p>Hi! I'm Ana Paula. I'm a Full Stack Web Developer who is really looking forward learning new technologies and working collaboratively.

          </p>
          <div className={s.btnn}>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>

        </div>

      </div>

    </section>

  )
}

export default About;