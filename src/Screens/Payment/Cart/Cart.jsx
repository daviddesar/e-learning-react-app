import React, { Component } from "react";
import "./cart.scss";
import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";

class Cart extends Component {
  coursesDisplayText = () => {
    if (this.props.cartCourses.length < 2) {
      return this.props.cartCourses.length + " course in cart";
    } else {
      return this.props.cartCourses.length + " courses in cart";
    }
  };
  cartItemGenerate = () => {
      return this.props.cartCourses.map(course => {
          return (<CartItem 
            key={course.id}
            image={course.image}
            courseName={course.courseName}
            teachers={course.teachers}
            price={course.price}
            id={course.id}
          />)
      })
  }
  render() {
    // let { cartCourses } = this.props;
    return (
      <div className="cart">
        <p className="cart__noti">{this.coursesDisplayText()}</p>
        <div className="cart__container">
         {this.cartItemGenerate()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { cartCourses: state.cart };
};
export default connect(mapStateToProps)(Cart);
