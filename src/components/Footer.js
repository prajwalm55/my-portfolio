// import "./FooterStyles.css";
// import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="footer">
//         <div className="footer-container">
//             <div className="left">
//                 <div className="location">
//                     <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
//                     <div>
//                         <p>4th cross BTM 2nd stage, Bengaluru</p>
//                         <p>India</p>
//                     </div>
//                     </div>

//                     <div className="phone">
//                        <h4> <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}} />
//                        +91 6360667440</h4>
//                 </div>
//                 <div className="email">
//                        <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}} />
//                        prajwalms4239@gmail.com</h4>
//                 </div>
//                  </div>


//                 <div className="right"> </div>
//                 <h4>About the Companny</h4>
//                 <p>This is me Prajwal M. CEO & Founder of MSP solutions.</p>
//                 <div className="social">

//                  <FaGithub size={30} 
//                  style={{color: "#fff",
//                   marginRight:"1rem"}} />

//                 <FaLinkedin size={30} 
//                  style={{color: "#fff",
//                   marginRight:"1rem"}} />

//                 <FaTwitter size={30} 
//                  style={{color: "#fff",
//                   marginRight:"1rem"}} />

//                 </div>
               
//                        </div>
//     </div>
//   )
// }

// export default Footer

import "./FooterStyles.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaTwitter } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        
        {/* Left Side */}
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>4th cross BTM 2nd stage, Bengaluru</p>
              <p>India</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              +91  6360667440
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              prajwalms4239@gmail.com
              
            </h4>
           
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <h4> MSP</h4>
          <p>© 2025 Prajwal. All Rights Reserved.</p>
          <div className="social">
            <a href="https://github.com/prajwalm55" target="/blank" >
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/prajwal-m-b09632229?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BYJQtwlKQTGWh0SU%2B7R51QA%3D%3D" target="/blank" >
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="mailto:prajwalms4239@gmail.com" target="/blank" >
            <FaMailBulk size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
