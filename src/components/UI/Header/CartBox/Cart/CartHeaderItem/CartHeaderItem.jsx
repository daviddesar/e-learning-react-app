import React, { Component } from "react";
import "./cartHeaderItem.scss";
import { connect } from "react-redux";

class CartHeaderItem extends Component {
  shortenText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    } else return text;
  };
  deleteCourseHandler = (courseId) => {
    this.props.deleteCourse(courseId)
  }
  render() {
    return (
      <div className="cartHeader__item">
        <div className="cartItem__img__container">
          <img src={this.props.image} alt="course" className="cartItem__img" />
        </div>
        <div className="cartItem__info">
          <p className="cartItem__info__header">
            {this.shortenText(this.props.courseName, 40)}
          </p>
          <p className="cartItem__info__teachers">
            {this.shortenText(this.props.teachers, 50)}
          </p>
          <p 
          className="cartItem__delete"
          onClick={() => this.deleteCourseHandler(this.props.id)}
          >Delete course</p>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {deleteCourse: (courseId) => dispatch({
    type: 'DELETE_COURSE_CART',
    payload: courseId
  })}
}
export default connect(null, mapDispatchToProps)(CartHeaderItem)