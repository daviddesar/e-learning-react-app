import React from "react";
import "./description.scss";

export default function Description(props) {
  return (
    <div className="description">
      <div className="description__container">
        <p className="description__title">Description</p>
        <p className="description__content">
        {props.description}
        </p>
      </div>
      <div className="description__learn">
        <p className="learn__title">What will you learn</p>
        <ul className="learn__list">
          <li className="learn__item">
            <i className="fa fa-check-circle"></i>
            <span className="item__text">
              Be able to build any app you want
            </span>
          </li>
          <li className="learn__item">
            <i className="fa fa-check-circle"></i>
            <span className="item__text">
              Create a portfolio of apps to apply for junior developer jobs at a
              technology company
            </span>
          </li>
          <li className="learn__item">
            <i className="fa fa-check-circle"></i>
            <span className="item__text">
              Learn to work with Apple's latest UI Framework - SwiftUI
            </span>
          </li>
          <li className="learn__item">
            <i className="fa fa-check-circle"></i>
            <span className="item__text">
              Create apps that use Machine Learning using Apple’s new CoreML
            </span>
          </li>
          <li className="learn__item">
            <i className="fa fa-check-circle"></i>
            <span className="item__text">
            Be able to build any app you want
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
