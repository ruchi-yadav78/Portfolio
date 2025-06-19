import React from 'react'
import '../css/home.css';
import img1 from '../media/ruhi4.jpeg';
import { Link } from "react-router-dom";
export default function Homecont() {
  return (
    <div>
      <div class="main">
        <div class="sub-cont">
          <div class="main-conts">
          <div class="menu">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars-staggered"></i></button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                  <Link to="/"><div class="togg-tag1"><i class="fa-solid fa-house-chimney"></i> HOME</div></Link>
                  <Link to="/about"><div class="togg-tag1"> <i class="fa-solid fa-user"></i> ABOUT ME </div></Link>
                  <Link to="/project" ><div class="togg-tag1"><i class="fa-solid fa-briefcase"></i> WORKS</div></Link>
                  <Link to="/contact"><div class="togg-tag1"><i class="fa-solid fa-envelope"></i> CONTACT </div></Link>
                  </div>
                </div>
              </div>
            <div class="hero-sec">
             
              <div class="emp-photos"><img src={img1} alt="" /></div>
              <div class="emp-info">
                <div class="tag1">Hello, I'm</div>
                <div class="tag2">Ruchi Yadav</div>
                <div class="tag3">I am Frontend Developer </div>
                <div class="abme">As a dedicated Frontend Developer, I specialize in crafting clean, responsive, and interactive web applications. I am passionate about turning design concepts into seamless digital experiences. </div>
                <a href="Ruchi-Yadav.pdf" download><button class='downbtn'>DOWNLOAD CV <div class="downicon"><i class="fa-solid fa-download"></i></div></button></a>
              </div>

              <div class="icons">
                <div class="icon1">
                <Link to="/">
                    <i class="fa-solid fa-house-chimney"></i>
                    <span class="tooltip">Home</span>
                    </Link>
                </div>
                <div class="icon1">
                
                  <Link to="/about">
                    <i class="fa-solid fa-user"></i>
                    <span class="tooltip">About</span>
                  </Link>
                </div>
                <div class="icon1">
                <Link to="/project">
                    <i class="fa-solid fa-briefcase"></i>
                    <span class="tooltip">Portfolio</span>
                    </Link>
                </div>
                <div class="icon1">
                <Link to="/contact">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="tooltip">Contact</span>
                    </Link>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
