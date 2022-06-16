import ContactMe from "./ContactMe";
import s from "./Header.module.css"
const Header = () => {

  return (

    <header>
      <div className="container header__container">
        <div className={s.header__container} >
          <h5 className={s.five}>Hello I'm</h5>
          <h1 className={s.one}>Ana Paula</h1>
          <h5 className={s.full}>Full Stack Developer</h5>
          <ContactMe />
        </div>
      </div>
    </header>
  )
}

export default Header;