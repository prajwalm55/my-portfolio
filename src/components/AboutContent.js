// import "./AboutContentStyles.css";
// import React1 from "../assets/web4.jpg";
// import React2 from "../assets/web2.jpg";


// import React from 'react'
// import { Link } from "react-router-dom";


// const AboutContent = () => {
//   return (
//     <div className="about">
//         <div className="lest">
//             <h1>Who Am I?</h1>
//             <h2>Im a full-stack web developer.</h2>
//             <Link to="/contact">
//             <button className="btn">Contact</button> </Link>
//         </div>
//         <div className="right">
//             <div className="img-container">

//                 <div className="img-stack top">
//                     <img src={React1} className="img" alt="true" />
//                 </div>

//                 <div className="img-stack bottom">
//                     <img src={React2} className="img" alt="true" />
//                 </div>

//             </div>
//         </div>
//     </div>
//   );
// }

// export default AboutContent;

// import "./AboutContentStyles.css";
// import React1 from "../assets/web4.jpg";
// import React2 from "../assets/web2.jpg";

// import React from 'react';
// import { Link } from "react-router-dom";

// const AboutContent = () => {
//   return (
//     <div className="about">
//       <div className="lest">
//         <h1>Who Am I?</h1>
//         <h2>
//           I'm Prajwal — a passionate Full-Stack Web Developer based in Bengaluru.  </h2>
//           <h2>
//           I specialize in creating modern, responsive, and dynamic web applications </h2>
//           <h2>
//           using the latest technologies. I love turning creative ideas into beautiful, functional websites.
//         </h2>
//         <Link to="/contact">
//           <button className="btn">Contact Me</button>
//         </Link>
//       </div>

//       <div className="right">
//         <div className="img-container">
//           <div className="img-stack top">
//             <img src={React1} className="img" alt="Web Design Showcase" />
//           </div>

//           <div className="img-stack bottom">
//             <img src={React2} className="img" alt="Web Development Project" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutContent;

// import "./AboutContentStyles.css";
// import React1 from "../assets/web4.jpg";
// import React2 from "../assets/web2.jpg";
// import ProfilePic from "../assets/DSC_0639 copy.JPG"; // <-- add your profile picture image here

// import React from 'react';
// import { Link } from "react-router-dom";

// const AboutContent = () => {
//   return (
//     <div className="about">
//       <div className="left">
//         <div className="profile-img">
//           <img src={ProfilePic} alt="Prajwal" />
//         </div>
//         <h1>Who Am I?</h1>
//         <p>
//           I'm <strong>Prajwal</strong> — a passionate Full-Stack Web Developer based in Bengaluru.
//           I specialize in creating modern, responsive, and dynamic web applications
//           using the latest technologies. I love turning creative ideas into beautiful, functional websites.
//         </p>
//         <Link to="mailto:prajwalms4239@gmail.com">
//           <button className="btn">Contact Me</button>
//         </Link>
//       </div>

//       <div className="right">
//         <div className="img-container">
//           <div className="img-stack top">
//             <img src={React1} className="img" alt="Web Design Showcase" />
//           </div>
//           <div className="img-stack bottom">
//             <img src={React2} className="img" alt="Web Development Project" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutContent;


// import "./AboutContentStyles.css";
// import React1 from "../assets/web4.jpg";
// import React2 from "../assets/web2.jpg";
// import ProfilePic from "../assets/DSC_0639 copy.JPG";

// import React from 'react';
// import { Link } from "react-router-dom";
// import Typical from 'react-typical';

// const AboutContent = () => {
//   return (
//     <div className="about">
//       <div className="left">
//         <div className="profile-img">
//           <img src={ProfilePic} alt="Prajwal" />
//         </div>
//         <h1>Who Am I?</h1>
//         <p>
//           I'm <strong>Prajwal</strong> — a passionate Full-Stack Web Developer based in Bengaluru.
//           I specialize in creating modern, responsive, and dynamic web applications
//           using the latest technologies. I love turning creative ideas into beautiful, functional websites.
//         </p>

//         {/* Skills Section with Typing Animation */}
//         <h3 className="skills-heading">Skills:</h3>
//         <Typical
//           className="skills-typing"
//           steps={[
//             'HTML | CSS | JavaScript', 1500,
//             'React | Node.js | Express', 1500,
//             'MongoDB | MySQL | Firebase', 1500,
//             'Tailwind CSS | Bootstrap', 1500,
//             'Git | GitHub | REST APIs', 1500,
//           ]}
//           loop={Infinity}
//           wrapper="p"
//         />

//         <Link to="mailto:prajwalms4239@gmail.com">
//           <button className="btn">Contact Me</button>
//         </Link>
//       </div>

//       <div className="right">
//         <div className="img-container">
//           <div className="img-stack top">
//             <img src={React1} className="img" alt="Web Design Showcase" />
//           </div>
//           <div className="img-stack bottom">
//             <img src={React2} className="img" alt="Web Development Project" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutContent;
import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

import React1 from "../assets/web4.jpg";
import React2 from "../assets/web2.jpg";
import ProfilePic from "../assets/DSC_0639 copy.JPG";

const AboutContent = () => {
  return (
    <div className="about">

      {/* Left Side - Bio & Resume */}
      <div className="left">
        <div className="profile-img">
          <img src={ProfilePic} alt="Prajwal M" />
        </div>

        <h1>Who Am I?</h1>
        <p>
          I'm <strong>Prajwal</strong> — a passionate Full-Stack Web Developer. I specialize in building responsive, dynamic, and modern web applications. I love turning creative ideas into real-world, production-ready solutions.
        </p>

        <div className="about-buttons">
          <Link to="mailto:prajwalms4239@gmail.com">
            <button className="btn">Contact Me</button>
          </Link>

          <a href="/prajwal_resume_react1.pdf" download>
            <button className="btn resume-btn">Download Resume</button>
          </a>
        </div>
      </div>

      {/* Right Side - Skills & Images */}
      <div className="right">

        {/* Image Showcase */}
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="Web Design Showcase" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="Web Development Project" />
          </div>
        </div>

        {/* Skills List - Organized */}
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">

            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>SpringBoot</li>
                <li>REST API</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools & DevOps</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>Vercel</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Cloud</h3>
              <ul>
                <li>AWS</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutContent;
