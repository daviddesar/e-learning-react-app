import React from "react";
import './reviewBar.scss'

export default function ReviewBar(props) {
  return (
  <div className="bar">
    <div className="bar__item"></div>
    <span className="star__text">{props.starName} Stars</span>
  </div>
  
  );
}
