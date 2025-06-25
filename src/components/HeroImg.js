import "./HeroImgStyles.css";
import React from 'react'

import IntroImg from "../assets/web6.jpg";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero" >
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
      <div className="content">
        <h4>Hi, I’m Prajwal  .</h4>
        <h1>A Passionate Web Developer .</h1>
        <div>
        <Link to="/project" className="btn">Projects</Link>
        <a href="/prajwal_resume_react1.pdf" target="_blank" rel="noopener noreferrer" className="btn">Resume</a>

        <Link to="mailto:prajwalms4239@gmail.com" className="btn btn">Contact</Link>

        </div>
        </div>
      </div>
    
  );
};

export default HeroImg;
