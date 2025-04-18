import "./HeroImgStyles.css";
import React from 'react'

import IntroImg from "../assets/web2.jpg";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero" >
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
      <div className="content">
        <p>HI, I'M  .</p>
        <h1>Web Developer.</h1>
        <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/resume" className="btn">Resume</Link>
        <Link to="/contact" className="btn btn">Contact</Link>

        </div>
        </div>
      </div>
    
  );
};

export default HeroImg;
