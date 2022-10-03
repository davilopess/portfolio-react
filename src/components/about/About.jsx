import React from 'react'
import './about.css'
import ME from '../../assets/perfil.jpeg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Vem me</h5>
      <h2>Conhecer</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>2+ anos</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Buscando Experiencias</h5>
              <small> Backend
              </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>20+</small>
            </article>
          </div>

          <p>Olá, sou Davi Lopes, atualmente trabalho como Desenvolvedor
          Backend Java. Aqui está alguns dos meus conhecimentos, projetos e ambições
          ao longo da carreira. Para mais informações <a href='https://www.linkedin.com/in/davi-lopes-amorim/' target="_blank">Linkedin</a>
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default about