import React, { Component, Fragment } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

import CartBox from "./CartBox/CartBox";
import UserBox from "./UserBox/UserBox";
import { connect } from "react-redux";
import SignInSignUpModal from "../SignInSignUpModal/SignInSignUpModal";

class Header extends Component {
  render() {
    let cartIndicator = null;
    if (this.props.courseCart.length > 0) {
      cartIndicator = (
        <span className="cart__indicator">{this.props.courseCart.length}</span>
      );
    }
    return (
      <Fragment>
        <nav className="nav__container">
          <div className="navbar">
            <div className="navbar__left">
              <div className="navbar__logo">
                <NavLink
                  to="/"
                  className="link__logo link"
                  activeClassName="active-class"
                >
                  <i className="fa fa-hat-wizard logo"></i>
                  <span className="logo__name">WIZARD ACADEMY</span>
                </NavLink>
              </div>
              <ul className="links__list">
                <li className="link-item">
                  <NavLink
                    exact
                    to="/"
                    className="link"
                    activeClassName="active-class"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="link-item">
                  <NavLink
                    exact
                    to="/courses"
                    className="link"
                    activeClassName="active-class"
                  >
                    COURSES
                  </NavLink>
                </li>
                <li className="link-item">
                  <a href="/" className="link">
                    BLOG
                  </a>
                </li>
                <li className="link-item">
                  <a href="/" className="link">
                    ABOUT US
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar__right">
              <ul className="links__list">
                <li className="link-item">
                  <span className="link__cart link-icon link">
                    <i className="fa fa-shopping-basket"></i>
                  </span>
                  <CartBox />
                  {cartIndicator}
                </li>
                <li className="link-item">
                  <span href="/" className="link__user link-icon link">
                    <i className="fa fa-user-circle"></i>
                  </span>
                  <UserBox />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <SignInSignUpModal />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { courseCart: state.cart };
};
export default connect(mapStateToProps)(Header);
