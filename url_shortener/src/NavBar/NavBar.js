import React from 'react'
import "./style/nav-bar.css"
import hamburger from '../images/hamburger.png';

const NavBar = (props) => {

  return (
    <div className='nav-container'>
      <div className="logo">
        <img src={props.img} alt="" />
        <img src={hamburger} alt="" className={`hambuger ${props.navShow ? '' : 'active'}`} onClick={props.onShow} ref={props.btnRef}/>
      </div>
      
      <div navShow={props.navShow} className={`nav-bar ${props.navShow ? '' : 'show'}`}>
      <nav className="nav-item">
        <ul>
          <li><a href= "#features">Features</a></li>
          <li><a href="#contact">Pricing</a></li>
          <li><a href="#resources">Resousres</a></li>
        </ul>
      </nav>

      <div className="auth">
        <a href='./login' className="login"><span>Login</span></a>
        <a href='./signup'><button className="signup">
          Sign Up
        </button></a>
      </div>
      </div>
    </div>
  )
}

export default NavBar