import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import loc_icon from '../../Assets/location-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Contact Info <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quisquam, quod.frfidjwoowkdwe ejfedj feod fejdqew dejdwi 
               wdifefnfijnfi okefnd dedj</p>
            <ul>
              <li><img src={mail_icon} alt="" />eyimogaobochimichael@gmail.com</li>
              <li><img src={phone_icon} alt="" />+234 813 123 4567 </li>
                <li><img src={loc_icon} alt="" />123 Street, City, Country </li>
            </ul>
        </div>
        <div className="contact-col">
          <form >
            <label > Your name</label>
            <input type="text" name="name" placeholder='Enter your name'
            required />
            <label >Phone Number</label>
            <input type="text" name="phone" placeholder='Enter your phone number' required/>
            <label >Write your message here</label>
            <textarea name="message" rows="5" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn' >Send Message <img src={white_arrow} alt="" /></button>
          </form>
          <span></span>
        </div>

    </div>
  )
}

export default Contact