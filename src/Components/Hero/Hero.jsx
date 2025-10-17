import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

 const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
        <p>Education is the most powerful weapon which you can use to change the world.</p>
        <button className='btn'>Get Started <img src={dark_arrow} alt="" /></button>

      </div>
    </div>
  )
}
export default Hero
