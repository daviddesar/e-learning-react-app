import React from "react";
import "./welcome.scss";
import Logo from "../../../components/UI/Logo/Logo";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__container">
        <Logo />
        <p className="welcome__title">WELCOME TO WIZARD ACADEMY</p>
        <p className="welcome__subtitle">
          We have collected all of the necessary tools for effective study. Here
          you can find high quality free and paid programs. Every student has
          the opportunity to become a teacher.
        </p>
        <div className="range__divide"></div>
      </div>
      <div className="welcome__intro">
        <div className="intro__item">
          <img
            src="http://uxliner.com/e-school/images/project-3.jpg"
            alt="intro"
            className="intro__img"
          />
          <div className="intro__text">
            <h4 className="intro__header">Who We Are</h4>
            <p className="intro__content">
              Wizard began as an experiment in online learning, when Stanford
              instructors Sebastian Thrun and Peter Norvig elected to offer
              their "Introduction to Artificial Intelligence" course online to
              anyone, for free.
            </p>
          </div>
        </div>
        <div className="intro__item">
          <img
            src="http://uxliner.com/e-school/images/project-1.jpg"
            alt="intro"
            className="intro__img"
          />
          <div className="intro__text">
            <h4 className="intro__header">Our Mission</h4>
            <p className="intro__content">
              Our mission is to power careers through tech education. We partner
              with leading technology companies to learn how technology is
              transforming industries.
            </p>
          </div>
        </div>
        <div className="intro__item">
          <img
            src="http://uxliner.com/e-school/images/project-4.jpg"
            alt="intro"
            className="intro__img"
          />
          <div className="intro__text">
            <h4 className="intro__header">Our Students</h4>
            <p className="intro__content">
              Wizard students are a community of global learners united in a
              shared goal of uplift and transformation. Our unique learning
              model enables an unprecedented degree of engagement with our
              students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
