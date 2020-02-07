import React from "react";
import "./cartItem.scss";
import { Component } from "react";
import * as actions from '../../../../redux/actions/indexActions'
import { connect } from "react-redux";

class CartItem extends Component {
  deleteCourse = courseId => {
    return this.props.onDeleteCourse(courseId)
  }
  render() {
    return (
      <div className="cart__item">
        <img
          src={this.props.image}
          alt="course"
          className="item__img img-fluid"
        />
        <div className="item__info">
          <p className="info__title">
            {this.props.courseName}
          </p>
          <p className="info__teacher">{this.props.teachers}</p>
        </div>
        <div className="item__selections">
          <span href="/" className="selection" onClick={() => this.deleteCourse(this.props.id)}>
            Remove
          </span>
          <span href="/" className="selection">
            Move To Wishlist
          </span>
        </div>
        <div className="item__price">
          <span className="discounted__price">
            {this.props.price}<i className="fa fa-tag"></i>
          </span>
          <div className="real__price">$1000</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {onDeleteCourse: (courseId) => dispatch(actions.deleteCourseCart(courseId))}
}
export default connect(null, mapDispatchToProps)(CartItem)
