import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <h1 className="head-contact">Let's Connect</h1>
      <div className="head-contact-info">
        <div className="contact">
          <div>
            <div className="form-contact">
              <label htmlFor="name">Name:- </label>
              <input
                className="contact"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
              />
            </div>
          </div>
          <div>
            <div className="form-contact">
              <label htmlFor="email">Email:- </label>
              <input
                className="contact"
                type="email"
                name="email"
                id="email"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>
          <div>
            <div className="form-contact">
              <label htmlFor="description">Description:- </label>
              <textarea
                className="contact"
                type="textarea"
                name="description"
                id="description"
                placeholder="Write a note"
                rows="3"
              />
            </div>
          </div>
          <div className="submit-button">
            <button className="submit">Connect</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-head">Contact Me</div>
        <div className="logo-head">
          <span className="logo-">
            <a
              className="logo-picture"
              rel="noreferrer"
              href="https://www.facebook.com/pratham.gandhi.566"
              target="_blank"
            >
              <i className="fa-brands fa-facebook" alt="facebook" />
            </a>
          </span>
          <span className="logo-">
            <a
              className="logo-picture"
              rel="noreferrer"
              href="https://instagram.com/p_r_a_t_h_a_m_108?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <i className="fa-regular fa-envelope" alt="gmail">
                <span className="gmail"></span>
              </i>
            </a>
          </span>
          <span className="logo-">
            <a
              className="logo-picture"
              rel="noreferrer"
              href="https://instagram.com/p_r_a_t_h_a_m_108?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <i className="fa-brands fa-instagram" alt="instagram" />
            </a>
          </span>
          <span className="logo-">
            <a
              className="logo-picture"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pratham-gandhi-97b55921a/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" alt="linkedin" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Contact;
