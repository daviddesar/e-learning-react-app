import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container1">
        <div className="footerList">
          <span className="title">FEATURE PROGRAMS</span>
          <ul>
            <li>
              <a href="/">Data Streaming</a>
            </li>
            <li>
              <a href="/">UX Designer</a>
            </li>
            <li>
              <a href="/">Java Developer</a>
            </li>
            <li>
              <a href="/">C++</a>
            </li>
            <li>
              <a href="/">DevOps</a>
            </li>
            <li>
              <a href="/">Data Analytics</a>
            </li>
            <li>
              <a href="/">Python Developer</a>
            </li>
            <li>
              <a href="/">Fullstack Developer</a>
            </li>
            <li>
              <a href="/">iOS Developer</a>
            </li>
            <li>
              <a href="/">AI Product Manager</a>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <span className="title">RESOURCES</span>
          <ul>
            <li>
              <a href="/">Catalouge</a>
            </li>
            <li>
              <a href="/">Career Services</a>
            </li>
            <li>
              <a href="/">Hire Talent</a>
            </li>
            <li>
              <a href="/">Student Success</a>
            </li>
            <li>
              <a href="/">1337 Talk</a>
            </li>
            <li>
              <a href="/">Scholarship</a>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <span className="title">COMPANY</span>
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">In The News</a>
            </li>
            <li>
              <a href="/">Jobs</a>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <span className="title">SUPPORT</span>
          <ul className="footerList">
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Help and FAQ</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Tech Requirements</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerContainer2">
        <div className="footerLogo">
          <a className="logo" href="/">
            <i className="fa fa-hat-wizard"></i>
          </a>
          <span className="copyright">Copyright © 2019 Wizard Academy, Inc.</span>
        </div>
        <div className="footerContent">
          <a href="/">Terms</a>
          <a href="/">Privacy Policy and Cookie Policy</a>
        </div>
      </div>
    </div>
  );
}
