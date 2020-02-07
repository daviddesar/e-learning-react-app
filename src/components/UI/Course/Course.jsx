import React, { Component } from "react";
import "./course.scss";
import { connect } from "react-redux";
import * as actions from '../../../redux/actions/indexActions'

class Course extends Component {
  concateString = (str, maxLength) => {
    if (str.length >= maxLength) {
      let newStr = str.slice(0, maxLength) + "...";
      return newStr;
    } else {
      return str;
    }
  };
  selectCourse = id => {
    console.log("[Course] select course: ", id);
    return this.props.history.push("/courses/" + +id);
  };
  addCourseToCartHandler = (courseName, price, teachers, image, id) => {
    let selectedCourse = {
      courseName: courseName,
      price: price,
      teachers: teachers,
      image: image,
      id: id
    };
    this.props.onAddCourseCart(selectedCourse);
    this.props.onAddCourseModal(this.props.courseName);
  };
  render() {
    let { courseName, image, teachers, id, price } = this.props;
    return (
      <div className="course__item">
        <img className="course__img" src={image} alt="course" />
        <p className="course__name course-padding">
          {this.concateString(courseName, 40)}
        </p>
        <span className="teachers__name course-padding">
          {this.concateString(teachers, 20)}
        </span>
        <div className="course__stars course-padding">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <p className="course__enroll course-padding">
          100.000 students enrolled
        </p>
        <div className="course__info">
          <div
            className="info__above"
            onClick={() => {
              this.selectCourse(id);
            }}
          >
            <p className="info__title">{courseName}</p>
            <p className="info__description">Instructors: {teachers}</p>
            <p className="info__update">Last update: 01/2020</p>
            <div className="info__detail">
              <div className="detail__item">
                <i className="fa fa-play-circle"></i>
                <span className="item__text">120 lectures</span>
              </div>
              <div className="detail__item">
                <i className="fa fa-clock"></i>
                <span className="item__text">22 hours</span>
              </div>
              <div className="detail__item">
                <i className="fa fa-signal"></i>
                <span className="item__text">Beginner</span>
              </div>
            </div>
          </div>

          <span className="course__priceBuy">
            <span className="price">{price}</span>
            <button
              type="button"
              className="btnAdd btn-default"
              data-toggle="modal"
              data-target="#notiModal"
              onClick={() =>
                this.addCourseToCartHandler(
                  courseName,
                  price,
                  teachers,
                  image,
                  id
                )
              }
            >
              Add To Cart
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddCourseModal: courseName =>
      dispatch(actions.addCourseModal(courseName)),
    onAddCourseCart: course =>
      dispatch(actions.addCourseCart(course))
  };
};
export default connect(null, mapDispatchToProps)(Course);
