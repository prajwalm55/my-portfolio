import "./AboutContentStyles.css";
import React1 from "../assets/web4.jpg";
import React2 from "../assets/web2.jpg";


import React from 'react'
import { Link } from "react-router-dom";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="lest">
            <h1>Who Am I?</h1>
            <p>Im a full-stack web developer.</p>
            <Link to="/contact">
            <button className="btn">Contact</button> </Link>
        </div>
        <div className="right">
            <div className="img-container">

                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>

                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>

            </div>
        </div>
    </div>
  );
}

export default AboutContent;