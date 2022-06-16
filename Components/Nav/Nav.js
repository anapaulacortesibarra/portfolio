import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { MdContactMail, MdWork } from 'react-icons/md'
import { useState } from 'react'
import s from './Nav.module.css'
const Nav = () => {

  const [activeN, setActiveN] = useState('#')

  return (

    <nav>

      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience" ><FaTools /></a>
      <a href="#contact" ><MdContactMail /></a>
      <a href="#portfolio" ><MdWork /></a>


    </nav>

  )
}

export default Nav;