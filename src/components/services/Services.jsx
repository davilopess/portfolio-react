import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Gostaria de</h5>
      <h2>Aprender mais sobre</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Serviços</h3>
          </div>  

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AWS</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CI/CD</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Melhor ambiente</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intepretação e Clareza</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mercado em Alta</p> 
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Backend Developer</h3>
          </div>  

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Microsservices</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>TDD</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performance</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Clean Code</p> 
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SOLID</p> 
            </li>
          </ul>
        </article>

     
      </div>
    </section>
  )
}

export default Services