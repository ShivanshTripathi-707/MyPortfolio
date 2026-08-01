import React, { useContext, useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { toast } from 'react-toastify';
import axios from "axios";
import {AppContext} from "../../context/AppContext"

const Contact = () => {

  const {backend_url} = useContext(AppContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true
    try {
      const { data } = await axios.post(
        `${backend_url}/api/user/enquiry`,
        formData
      );

      if (data.success) {
        toast.success(data.message);

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Something went wrong."
      );
    }
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

          <p>
            Open to new opportunities, collaborations, and freelance projects.
            Feel free to reach out—I'd love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail icon" />
              <a href="mailto:shivanshtripathi712@gmail.com">
                shivanshtripathi712@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="Call icon" />
              <a href="tel:+917379911712">
                +91 7379911712
              </a>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="Location icon" />
              <p>Gorakhpur, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>

          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-submit">
            <span className="text">Submit Now</span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;