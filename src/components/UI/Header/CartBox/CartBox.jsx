import React, { Component } from "react";
import Cart from "./Cart/Cart";
import "./cartBox.scss";
import { connect } from "react-redux";

class CartBox extends Component {
  render() {
    let cart = (
      <div className="cart__box">
        <Cart />
      </div>
    );
    if (this.props.cart.length === 0) {
      cart = (
        <div className="cart__box">
          <p className="cart__text">Your cart is empty! Get some courses</p>
        </div>
      );
    }
    return cart;
    
  }
}
const mapStateToProps = state => {
  return { 
    cart: state.cart,
    
   };
};
export default connect(mapStateToProps)(CartBox);
