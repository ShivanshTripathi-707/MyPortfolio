import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import { toast } from 'react-toastify';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("This feature is currently under development.");
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Decoration Underline" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Open to new opportunities, collaborations, and freelance projects. Feel free to reach out—I'd love to hear from you.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail icon" />
              <a href="mailto:shivanshtripathi712@gmail.com">shivanshtripathi712@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call icon" />
              <a href="tel:+917379911712">+91 7379911712</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location icon" />
              <p>Gorakhpur, Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={handleSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name="name" />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name="email" />

          <label htmlFor="">Write your message here</label>
          <textarea name="messag" rows="8" placeholder='Enter your message'></textarea>

          <button type="submit" className='contact-submit'><span class="text">Submit Now</span>
</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
