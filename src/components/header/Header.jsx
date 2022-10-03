import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá eu sou</h5>
        <h1>Davi Lopes</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img className='foto' src={ME} alt="me" />
        </div> */}

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header