import React from 'react'
import './style/header.css'
import illustration from '../images/illustration-working.svg'

const Header = () => {
  return (
    <div className='container'>
      <div className="illustration mobile">
        <img src={illustration} alt="" />
      </div>
      <div className="content">
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <div className="illustration desktop">
        <img src={illustration} alt="" />
      </div>
    </div>
  )
}

export default Header