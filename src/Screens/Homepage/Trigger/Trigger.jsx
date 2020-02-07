import React from "react";
import "./trigger.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function Trigger() {
  return (
    <div className="trigger">
      <div className="trigger__container">
        <ScrollAnimation animateIn="bounceInLeft">
          <div className="trigger__left">
            <p className="left__title">Come along with us,</p>
            <p className="left__content">
              With our growing catalog of over 30 Nanodegree programs from
              beginner to advanced, you're sure to find one that fits your
              career goals. Over 160,000 students in more than 190 countries
              enrolled.{" "}
            </p>
            <div className="left__divide"></div>
            <div className="text__container">
              <div className="text__content">
                <i className="fa fa-chalkboard"></i>
                <span className="text__title">Learn Anything Online</span>
                <p className="text__subtitle">
                  Starting your own education platform is as easy as creating,
                  sharing and monetizing your content & more!
                </p>
              </div>
              <div className="text__content">
                <i className="fa fa-handshake"></i>
                <span className="text__title">1-on-1 technical mentor</span>
                <p className="text__subtitle">
                  Get a knowledgeable mentor who guides your learning and is
                  focused on answering your questions, motivating you and
                  keeping you on track.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInRight">
          <div className="trigger__right">
            <div className="right__img">
              <img
                src="http://uxliner.com/e-school/images/course-2.jpg"
                alt="phone"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
