import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xb72toi",
        "template_ky2drjd",
        form.current,
        "neXqVnZyV2YMahCet"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section id="contact_main_head">
        <h1 className="head-contact">Let's Connect</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="head-contact-info">
            <div className="contact">
              <div>
                <div className="form-contact">
                  <label htmlFor="name">Name:- </label>
                  <input
                    className="contact"
                    type="text"
                    name="user_name"
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
                    name="user_email"
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
                    name="user_description"
                    id="description"
                    placeholder="Eg. Phone No, Note"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="submit-button">
                <button className="submit">Connect</button>
              </div>
            </div>
          </div>
        </form>
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
      </section>
    </>
  );
};

export default Contact;
