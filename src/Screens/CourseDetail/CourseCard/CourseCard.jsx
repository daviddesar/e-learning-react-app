import React, { Component } from "react";
import "./courseCard.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/indexActions";

class CourseCard extends Component {
  addCourseToCartHandler = (courseName, price, teachers, image, id) => {
    let selectedCourse = {
      courseName: courseName,
      price: price,
      teachers: teachers,
      image: image,
      id: id
    };
    this.props.onAddCourseCart(selectedCourse);
    this.props.onAddCourseModal(this.props.course.courseName);
  };
  render() {
    let { courseName, image, teachers, code, price } = this.props.course;
    return (
      <div className="card">
        <div className="card__container">
          <img className="card__img" src={image} alt="" />
          <div className="stars__enroll">
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <p className="enroll">100.000 students enrolled</p>
          </div>
          <div className="card__price">
            <p className="price">{price}</p>
            <span className="real__price">$1000</span>
          </div>
          <div className="card__buttons">
            <button
              className="cart__button"
              onClick={() =>
                this.addCourseToCartHandler(
                  courseName,
                  price,
                  teachers,
                  image,
                  code
                )
              }
              data-toggle="modal"
              data-target="#notiModal"
            >
              Add To Cart
            </button>
            <button className="wishlist__button">
              <i className="fa fa-heart"></i>Add To Wishlist
            </button>
          </div>
          <div className="card__content">
            <p className="content__title">What's includes:</p>
            <ul className="content__list">
              <li className="list__item">
                <i className="fa fa-mobile"></i>
                <span className="list__text">Mobile Support</span>
              </li>
              <li className="list__item">
                <i className="fa fa-check-double"></i>
                <span className="list__text">Lesson Archieve</span>
              </li>
              <li className="list__item">
                <i className="fa fa-comments"></i>
                <span className="list__text">Tutors Interaction</span>
              </li>
              <li className="list__item">
                <i className="fa fa-cubes"></i>
                <span className="list__text">Exercises And Lecture</span>
              </li>
              <li className="list__item">
                <i className="fa fa-user-graduate"></i>
                <span className="list__text">Certificate of Completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddCourseModal: courseName => dispatch(actions.addCourseModal(courseName)),
    onAddCourseCart: course => dispatch(actions.addCourseCart(course))
  };
};
const mapStateToProps = state => {
  return { course: state.courseDetail };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CourseCard)
);
