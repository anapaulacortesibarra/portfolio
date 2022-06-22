import style from './Experience.module.css'
import { BsCheckCircle } from 'react-icons/bs'

const Experience = () => {

  return (
    <section id="experience">
      <h2>Skills</h2>
      <div className={style.experience__container}>
        <div className={style.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={style.experience__contents}>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>React-Redux</h4>
              </div>
            </article>

          </div>
        </div>

        <div>
          <h3>Backend Development</h3>

          <div className={style.experience__contents}>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>Sequelize</h4>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>PostgreSQL</h4>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsCheckCircle className={style.experience__details_icon} />
              <div>
                <h4>Express</h4>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )

}

export default Experience;