import React from 'react'
import "../css/about.css";
import { Link } from "react-router-dom";
import img3 from '../media/girl3.png';
import img4 from '../media/htmllogo.jpg';
import img5 from '../media/csslogo.jpg';
import img6 from '../media/jslogo.jpg';
import img7 from '../media/boots.jpg';
import img8 from '../media/reaclogo.jpg';
import img9 from '../media/vitejs.jfif';

export default function Aboutcont() {
  return (
    <div>
      <div class="abmain">
        <div class="abwidth">
          <div class="abmenu">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars-staggered"></i></button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel"></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <Link to="/"><div class="togg-tag1"><i class="fa-solid fa-house-chimney"></i> HOME</div></Link>
                <Link to="/about"><div class="togg-tag1"> <i class="fa-solid fa-user"></i> ABOUT ME </div></Link>
                <Link to="/project"> <div class="togg-tag1"><i class="fa-solid fa-briefcase"></i> WORKS</div></Link>
                <Link to="/contact"><div class="togg-tag1"><i class="fa-solid fa-envelope"></i> CONTACT </div></Link>
              </div>
            </div>
          </div>

          <div class="abhead">
            <div class="name"><Link to="/"><span>R</span>uchiyadav</Link></div>
            <div class="navs">
              <div class="nav-tag1"><Link to="/"><i class="fa-solid fa-envelope-open"></i> Home</Link></div>
              <div class="nav-tag1"><Link to="/about"><i class="fa-solid fa-user"></i> About </Link></div>
               <div class="nav-tag1"><Link to="/project" ><i class="fa-solid fa-briefcase"></i> Portfolio</Link></div>
              <div class="nav-tag1"><Link to="/contact"><i class="fa-solid fa-message"></i> Contact </Link></div>
            </div>
            <div class="call-btn"> <a href="tel:+917802071030">Let's Talk <i class="fa-solid fa-phone"></i></a></div>
          </div>
          <div class="aboutme">
            <div class="absection1">
              <div class="abuserinfo">
                <div class="abuser"><img src={img3} alt="" /></div>
                <div class="abtag2">Frontend Developer</div>
                <h2>Ruchi Yadav</h2>
                <div class="usericon">
                    <Link to="https://www.instagram.com/yadav_ruchi0804?igsh=MXZ4cnAwbng2dnZuaw==" target="_blank"><div class="instaicon"><i class="fa-brands fa-instagram"></i></div></Link>
                    <Link to="https://wa.me/7802071030?text=Can%20you%20provide%20more%20details%20about%20char%20dham%20yatra." target="_blank"><div class="instaicon"><i class="fa-brands fa-whatsapp"></i></div></Link>
                </div>

              </div>
            </div>
            <div class="absection2">
              <h2>About Me</h2><br />
              <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;As a passionate and dedicated frontend developer, I am excited to bring my creativity and technical skills of web development. I am graduated with a degree Bachelor of Computer Applications, I have honed my abilities in HTML, CSS, JavaScript, and modern frameworks such as React. I am looking forward to starting my professional journey and making a positive impact in a dynamic team.</p>
              <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Throughout my learning journey, I have worked on a variety of projects that have honed my abilities in both technical and creative aspects of web development. I have experience with modern frameworks and libraries such as React, which have enabled me to build dynamic and engaging user experiences. My portfolio showcases a range of projects.</p>
              <div class="skills">
                <h4>Our Skills</h4>
                <div class="moreskills">
                  <div class="skills1">
                    <img src={img4} alt="" />
                    <h6>HTML 5</h6>
                  </div>
                  <div class="skills1">
                    <img src={img5} alt="" />
                    <h6>CSS 3</h6>
                  </div>
                  <div class="skills1">
                    <img src={img6} alt="" />
                    <h6>JAVASCRIPT</h6>
                  </div>
                  <div class="skills1">
                    <img src={img7} alt="" />
                    <h6>BOOTSTRAP</h6>
                  </div>
                  <div class="skills1">
                    <img src={img8} alt="" />
                    <h6>REACT</h6>
                  </div>
                  <div class="skills1">
                    <img src={img9} alt="" />
                    <h6>VITE.JS</h6>
                  </div>
                  <div class="skills1">
                    <img src={img6} alt="" />
                    <h6>JAVASCRIPT</h6>
                  </div>
                  <div class="skills1">
                    <img src={img5} alt="" />
                    <h6>CSS 3</h6>
                  </div>
                  <div class="skills1">
                    <img src={img7} alt="" />
                    <h6>BOOTSTRAP</h6>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
