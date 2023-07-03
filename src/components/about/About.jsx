import React from 'react'
import "./About.css"
import Image from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox';

export default function About() {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__img' />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Pavani Nagam, Mobile Application developer from Chennai, India. 
              I have rich experience in Mobile app design and building and customization.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">UI Design</h3>
                <span className="skills__number uidesign">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">̉ vb     
              <div className="skills__title">
                <h3 className="skills__name">Hybrid Development</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage hybrid-dev"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <AboutBox/>

    </section>
  )
}
