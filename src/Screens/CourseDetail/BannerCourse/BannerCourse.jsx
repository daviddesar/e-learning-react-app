import React from "react";
import "./bannerCourse.scss";

export default function BannerCourse(props) {
  return (
    <div className="banner">
      <div className="bannerCourse__container">
        <div className="divide__bar"></div>
        <p className="banner__header">COURSE DETAIL</p>
        <p className="banner__title">{props.courseName}</p>
        <p className="banner__teacher">Created by {props.teachers}</p>
      </div>
    </div>
  );
}
