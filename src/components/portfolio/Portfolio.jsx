import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/DSmeta.jpg'
import IMG2 from '../../assets/Sigap.png'
import IMG3 from '../../assets/Sigap.png'
import IMG4 from '../../assets/Cartola.png'
import IMG5 from '../../assets/Ecoleta.png'
import IMG6 from '../../assets/ONG.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfolio</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
           <h3> Vendas | Spring Boot e React</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/davilopess/dsmeta-spring" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://phenomenal-starburst-a5a769.netlify.app" className='btn btn-primary' target={'_blank'}>Page</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
           <h3>SIGAP | Spring Boot e React</h3>
           <div className="portfolio__item-cta">
           <a href="http://consulta.al.ma.leg.br:8082" className='btn btn-primary' target={'_blank'}>Page</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
           <h3>Relógio | JavaScript</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/AlmirJrDev/Relogio" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="https://almirjrdev.github.io/Relogio/" className='btn btn-primary' target={'_blank'}>GitPages</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
           <h3> Cartola4Noobs | Laravel</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Danielopes7/Cartola" className='btn' target={'_blank'}>Git Repositories</a>
           <a href="http://cartola4noobs.herokuapp.com" className='btn btn-primary' target={'_blank'}>Page</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
           <h3>Ecoleta | API</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/davilopess/nlw-ts" className='btn' target={'_blank'}>Git Repositories</a>
           </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
           <h3>ONGs | Node + React + React Native</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/davilopess/ONG-js" className='btn btn-primary' target={'_blank'}>Git Repositories</a>
         
          </div>
        </article>
      </div>
      </section>
  )
}

export default Portfolio