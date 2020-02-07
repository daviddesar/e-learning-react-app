import React from "react";
import "./schoolCard.scss";

export default function SchoolCard(props) {
  return (
    <div className="right__item">
      <img className="item__img" src={props.imgLink} alt="study" />
      <p className="item__title">{props.itemTitle}</p>
      <div className="item__intro">
        <p className="intro__title">SCHOOL OF</p>
        <p className="intro__subject">{props.introSubject}</p>
        <p className="intro__tag">NEW</p>
      </div>
    </div>
  );
}
