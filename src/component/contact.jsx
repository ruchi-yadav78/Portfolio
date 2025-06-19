import React, { useState } from 'react';
import '../css/contact.css';
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";

export default function Contactcont() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function Sendmail(event) {
    event.preventDefault();  // Prevent form submission

    const Data = {
      to_name: name,
      to_email: email,
      message: message
    };

    const Service_id = "service_02htqbg";
    const Template_id = "template_2e6p30j";
    const user_id = "KHTPd2S1FnLiYzKuz";

    try {
      const response = await emailjs.send(Service_id, Template_id, Data, user_id);
      alert("Message sent successfully");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="contactmain">
      <div className="conmenu">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel"></h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <Link to="/"><div className="togg-tag1"><i className="fa-solid fa-house-chimney"></i> HOME</div></Link>
            <Link to="/about"> <div className="togg-tag1"><i className="fa-solid fa-user"></i> ABOUT ME</div></Link>
            <Link to="/project"><div className="togg-tag1"><i className="fa-solid fa-briefcase"></i> WORKS</div></Link>
            <Link to="/contact"><div className="togg-tag1"><i className="fa-solid fa-envelope"></i> CONTACT</div></Link>
          </div>
        </div>
      </div>

      <div className="contagmain">
        <div className="contag1">
          <div className="contag2">CONTACT</div>
          <div className="contag3">GET IN <span>TOUCH</span></div>
        </div>
      </div>

      <div className="consect2">
        <div className="userdata1">
          <h4>DON'T BE SHY!</h4>
          <p>
            Feel free to get in touch with me. I am always open to discussing new projects,
            creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="mailcont">
            <i className="fa-solid fa-envelope-open"></i>
            <div className="mailmini">
              <div className="mailtag">MAIL ME</div>
              <div className="usermail">
                <a href="mailto:ryb782080@gmail.com">ryb782080@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="mailcont usercall">
            <div className="callicon">
              <i className="fa-solid fa-square-phone"></i>
            </div>
            <div className="mailmini">
              <div className="mailtag">CALL ME</div>
              <div className="usermail">
                <a href="tel:+917802071030">+91 7802071030</a>
              </div>
            </div>
          </div>
          <div className="usermoreicon">
          <Link to="https://www.instagram.com/yadav_ruchi0804?igsh=MXZ4cnAwbng2dnZuaw==" target="_blank"><div className="useri1"><i className="fa-brands fa-instagram"></i></div></Link>
            <Link to="https://wa.me/7802071030?text=Can%20you%20provide%20more%20details%20about%20char%20dham%20yatra." target="_blank"><div className="useri1"><i className="fa-brands fa-whatsapp"></i></div> </Link>
            <Link to="/" target="_blank"><div className="useri1"><i className="fa-brands fa-linkedin-in"></i></div></Link>
            <Link to="/" target="_blank"><div className="useri1"><i className="fa-brands fa-github"></i></div></Link>
          </div>
        </div>

        <div className="userform">
          <form onSubmit={Sendmail}>
            <div className="threeinput">
              <input
                type="text" placeholder="Your name" name="name" onChange={(e) => {setName(e.target.value);}}/>
              <input type="text" placeholder="Your email" name="email" onChange={(e) => { setEmail(e.target.value);}}/>
            </div>
            <textarea name="message" placeholder="Your Message" onChange={(e) => { setMessage(e.target.value);}} ></textarea>
            <div className="messagebtn">
              <input type="submit" value="SEND MESSAGE" name="submit" />
            </div>
          </form>
        </div>

        <div className="usericons">
          <div className="icons">
            <div className="icon1">
              <Link to="/">
                <i className="fa-solid fa-house-chimney"></i>
                <span className="tooltip">Home</span>
              </Link>
            </div>
            <div className="icon1">
              <Link to="/about">
                <i className="fa-solid fa-user"></i>
                <span className="tooltip">About</span>
              </Link>
            </div>
            <div className="icon1">
              <Link to="/project">
                <i className="fa-solid fa-briefcase"></i>
                <span className="tooltip">Portfolio</span>
              </Link>
            </div>
            <div className="icon1">
              <Link to="/contact">
                <i className="fa-solid fa-envelope"></i>
                <span className="tooltip">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
