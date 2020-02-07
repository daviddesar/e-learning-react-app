import React, { Component } from "react";
import "./cart.scss";
import CartHeaderItem from "./CartHeaderItem/CartHeaderItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Cart extends Component {
  renderCartHeaderItem = () => {
    return this.props.cartCourses.map(courseItem => {
      return (
        <CartHeaderItem
          key={courseItem.courseName}
          image={courseItem.image}
          courseName={courseItem.courseName}
          teachers={courseItem.teachers}
          id={courseItem.id}
        />
      );
    });
  };
  goToPaymentHandler = () => {
    this.props.history.push("/payment");
  };

  render() {
    let cartHeaderButton = this.props.isAuth ? (
      <button
        className="btn-default cartHeader__payment"
        onClick={() => this.goToPaymentHandler()}
      >
        Go To Payment
      </button>
    ) : (
      <button
        className="btn-default cartHeader__payment"
        data-toggle="modal"
        data-target="#signInSignUpModal"
      >
        Sign In
      </button>
    )
    let informText = this.props.isAuth ? null : <p className="signin__inform">Please sign in to make payment</p>
    return (
      <div className="cartHeader__container">
        <div className="cartHeaderItem__container">
          {this.renderCartHeaderItem()}
        </div>
        <div className="cartHeader__payment__container">
          {informText}
          {cartHeaderButton}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { cartCourses: state.cart, isAuth: state.auth.token !== null };
};
export default withRouter(connect(mapStateToProps)(Cart));
