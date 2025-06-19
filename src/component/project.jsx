import React from 'react'
import '../css/project.css';
import { Link } from "react-router-dom";
import project1 from '../media/buynest.png';
import project2 from '../media/craftycode.png';
import project3 from '../media/agruco.png';
export default function Projectcont() {
  return (
    <div>
      <div class="projectall">
         <div className="promenu">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars-staggered"></i></button>
        
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
        
      <div class="projectmain">
        <div class="prohead">
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
        </div>
      </div>
      <div class="project1">
        <h1>Buynest</h1>
      <div class="image-container">
    <img src={project1} alt="Sample Image"/>
    <div class="overlay"><span>DEMO</span></div>
  </div>
      </div>
      <div class="project1">
        <h1>Craftycode</h1>
      <div class="image-container">
    <img src={project2} alt="Sample Image"/>
    <div class="overlay"><span>DEMO</span></div>
  </div>
      </div>
      <div class="project1">
        <h1>Agruco</h1>
      <div class="image-container">
    <img src={project3} alt="Sample Image"/>
    <div class="overlay"><span>DEMO</span></div>
  </div>
      </div>
      </div>
    </div>
  )
}
