import { AiOutlineUser } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { MdContactMail, MdWork } from 'react-icons/md'
import style from './Nav.module.css'


const Nav = () => {


  return (

    <nav className={style.Navbar}>
      <div className={style.menu}>
        {/* <a href="#"><AiOutlineHome className={style.icon} /></a> */}
        <a href="#about"><AiOutlineUser className={style.icon} /></a>
        <a href="#experience" ><FaTools className={style.icon} /></a>
        <a href="#contact" ><MdContactMail className={style.icon} /></a>
        <a href="#portfolio" ><MdWork className={style.icon} /></a>
      </div>
    </nav>

  )
}

export default Nav;