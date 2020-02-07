import React from "react";
import "./agendaSection.scss";

export default function AgendaSection(props) {
  return (
    <div className="agenda__container">
      <div className="title__container" onClick={() => props.clicked()}>
        <i className="fa fa-plus"></i>
        <span className="agenda__title">Module 1: Introduction</span>
      </div>
      <div className="agenda__list" style={props.styleListDisplay}>
        <div className="agenda__item">
          <i className="fa fa-play-circle"></i>
          <span className="item__title">Javascript 1</span>
        </div>
        <div className="agenda__item">
          <i className="fa fa-play-circle"></i>
          <span className="item__title">Javascript 1</span>
        </div>
        <div className="agenda__item">
          <i className="fa fa-play-circle"></i>
          <span className="item__title">Javascript 1</span>
        </div>
      </div>
    </div>
  );
}
