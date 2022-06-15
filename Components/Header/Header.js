import ContactMe from "./ContactMe";

const Header = () => {

  return (

    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ana Paula</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <ContactMe />
      </div>
    </header>
  )
}

export default Header;