import s from './Portfolio.module.css'
import imag from '../../Assets/ej.png'
import arcane from '../../Assets/arcane.png'

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className={s.portfolio__container}>
        <article className={s.portfolio__item}>
          <div className={s.portfolio__item_image}>
            {/* <img src={imag} alt="" /> */}
          </div>
          <div className={s.title}>
            <h3>Videogames</h3>
          </div>
          <div className={s.portfolio__cta}>
            <a href="https://github.com/anapaulacortesibarra/project" className="btn" target='_blank'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className={s.portfolio__item}>
          <div className={s.portfolio__item_image}>
            <img src={arcane} alt="" />
          </div>
          <div className={s.title}>
            <h3>Arcane Ecommerce</h3>
          </div>
          <div className={s.portfolio__cta}>
            <a href="https://github.com/anapaulacortesibarra/FrontArcane" className="btn" >Github</a>
            <a href="https://www.youtube.com/watch?v=zboQLdkvfoY&ab_channel=JuanRiquero" className="btn btn-primary" >Live Demo</a>
          </div>
        </article>






      </div>
    </section>
  )
}

export default Portfolio;