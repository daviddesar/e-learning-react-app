import React, { Component, Fragment } from "react";
import "./featuredCourses.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "../../../components/UI/Course/Course";
import axios from "../../../axios/Axios";
import { connect } from "react-redux";
import * as actions from '../../../redux/actions/indexActions'
import { withRouter } from "react-router-dom";

class FeaturedCourses extends Component {
  renderCourses = () => {
    let coursesArr = this.props.courseList;
    let returnArr = [];
    for (let i = 0; i < 4; i++) {
      returnArr.push(
        <div className="slider" key={i}>
          <div className="slider__container">
            {coursesArr.slice(i * 4, i * 4 + 4).map(course => {
              return (
                <Course
                  key={course.code}
                  id={course.code}
                  image={course.image}
                  courseName={course.courseName}
                  teachers={course.teachers}
                  price={course.price}
                  description={course.description}
                  {...this.props}
                />
              );
            })}
          </div>
        </div>
      );
    }
    return returnArr;
  }
  seeAllCoursesHandler = () => {
    this.props.history.push('/courses')
  }
  render() {
    let settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <div className="featuredCourses">
          <div className="featuredCourses__container">
            <div className="featuredCourses__header">
              <p className="header__title">Our Awesome Courses</p>
              <p className="header__subtitle">
                Courses for all levels cover technical skills, creative
                techniques, business strategies, and more.
              </p>
            </div>
            <div className="featuredCourses__divide"></div>
          </div>
          <div className="courses__slider">
            <Slider {...settings}>{this.renderCourses()}</Slider>
          </div>
          <button className="featureCourses__btn" onClick={() => this.seeAllCoursesHandler()}>
              See All Courses
          </button>
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    axios.get("/courses.json").then(res => {
      this.props.onGetCourseList(res.data);
    });
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onGetCourseList: courseList => dispatch(actions.getCourseList(courseList))
  };
};
const mapStateToProps = state => {
  return { courseList: state.courseList };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeaturedCourses)) 
