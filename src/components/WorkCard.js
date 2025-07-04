// import "./WorkCardStyles.css";


// import React from 'react'
// import pro1 from "../assets/rear-view-programmer-working-all-night-long.jpg";
// import { NavLink } from "react-router-dom";



// const WorkCard = (props) => {
//   return (
//     <div className="project-card">
//     <img src={props.imgsrc} alt="image" />
//     <h2 className="project-title">{props.title}</h2>

//     <div className="pro-details">
//         <p>{props.text} </p>
//         <div className="pro-btns">
//             <NavLink to={props.view} className="btn">View </NavLink>

//             <NavLink to="https://github.com/prajwalm55" className="btn">Source </NavLink>

//         </div>


//     </div>
// </div>
//   );
// }

// export default WorkCard;

import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project" />
      <h2 className="project-title">{props.title}</h2>

      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn" target="_blank" rel="noopener noreferrer">
            View
          </NavLink>
          <NavLink to={props.source} className="btn" target="_blank" rel="noopener noreferrer">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
