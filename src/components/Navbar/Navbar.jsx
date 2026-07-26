import React, { useRef, useState } from 'react'
import "./Navbar.css"
import logo2 from "../../assets/logo2.svg"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import underline from "../../assets/nav_underline.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const navigate = useNavigate()
  const notify = () => toast("This feature is currently under development.");
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = "0"
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
      <img className='logo' style={{cursor : "pointer"}} onClick={()=> navigate("/")} src={logo2} alt="Logo"/>
      <img src={menu_open} alt="menu open" className='nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="menu close" className="nav-mob-close" onClick={closeMenu}/>
        <li><p onClick={()=> {setMenu("home"); navigate("/")}}>Home</p>{menu==="home"? <img src={underline} alt='Active menu underline'/> : <></>}</li>
        <li><a href="#about"><p onClick={()=> setMenu("about")}>About Me</p></a>{menu==="about"? <img src={underline} alt='Active menu underline'/> : <></>}</li>
        <li><a href="#services"><p onClick={()=> setMenu("services")}>Services</p></a>{menu==="services"? <img src={underline} alt='Active menu underline'/> : <></>}</li>
        <li><a href="#projects"><p onClick={()=> setMenu("projects")}>Projects</p></a>{menu==="projects"? <img src={underline} alt='Active menu underline'/> : <></>}</li>
        <li><a href="#contact"><p onClick={()=> setMenu("contact")}>Contact</p></a>{menu==="contact"? <img src={underline} alt='Active menu underline'/> : <></>}</li>

        {/* Mobile-only login button, same nav-menu ke andar */}
        <li className="nav-login-mobile">
          <button className='login-btn' onClick={() => notify()}>Login</button>
        </li>
      </ul>
      <div className="nav-connect">
        <button className='login-btn' onClick={() => notify()}>Login</button>
      </div>
    </div>
  )
}

export default Navbar