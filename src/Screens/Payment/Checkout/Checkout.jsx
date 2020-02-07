import React, { Component } from "react";
import "./checkout.scss";
import { connect } from "react-redux";

class Checkout extends Component {
  render() {
    let totalPrice = "$" + this.props.courseCart.length * 100;
    return (
      <div className="checkout">
        <div className="checkout__container">
          <p className="checkout__header">Total</p>
          <p className="checkout__total">{totalPrice}</p>
          {/* <p className="checkout__real">$3000</p> */}
          <p className="checkout__text">90% off</p>
          <button className="checkout__btn">Checkout</button>
          <div className="checkout__coupon">
            <input
              type="text"
              className="coupon__input"
              placeholder="Enter coupon"
            />
            <button className="coupon__btn">Apply</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { courseCart: state.cart };
};
export default connect(mapStateToProps)(Checkout);
