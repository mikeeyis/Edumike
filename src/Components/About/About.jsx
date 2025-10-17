import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>nuturing tomorrows leader today </h2>
            <p>At our school, we believe education goes beyond textbooks—it is about nurturing the whole child. We are committed
                 to providing a balanced learning experience that combines academic excellence with personal growth, creativity,
                  and moral values. Our goal 
                is to create an environment where every student feels valued, supported, and inspired to reach their full potential.</p>
            <p>We take pride in our team of qualified and dedicated teachers who bring learning to life through innovative teaching methods,
                 practical experiences, and technology-driven instruction. Our modern facilities, well-equipped classrooms, and engaging 
                extracurricular activities ensure that students not only excel academically but also develop
                 leadership skills, teamwork, and confidence.</p>
           
        </div>

    </div>
  )
}

export default About