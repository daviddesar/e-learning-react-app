import React, { Component } from "react";
import "./sliderCourses.scss";
import Slider from "react-slick";
import Course from "../../Course/Course";
import {connect} from 'react-redux'
import axios from '../../../../axios/Axios'

class SliderCourses extends Component {
  renderCourses = () => {
    let coursesArr = this.props.courseList;
    let returnArr = [];
    for (let i = 0; i < 5; i++) {
      returnArr.push(
        <div className="sliderCourses__container" key={i}>
          {coursesArr.slice(i * 4, i * 4 + 4).map((course, index) => {
            return (
              <Course
                key={index}
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
      );
    }
    return returnArr;
  };
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <Slider {...settings}>
        {/* <div className="sliderCourses__container">
          <Course className="slider__item" />
          <Course className="slider__item" />
          <Course className="slider__item" />
          <Course className="slider__item" />
        </div>
        <div className="sliderCourses__container">
          <Course className="slider__item" />
          <Course className="slider__item" />
          <Course className="slider__item" />
          <Course className="slider__item" />
        </div>
        <div className="sliderCourses__container">
          <Course className="slider__item" />
          <Course className="slider__item" />
          <Course className="slider__item" />
          <Course className="slider__item" />
        </div> */}
        {this.renderCourses()}
      </Slider>
    );
  }
  componentDidMount() {
    axios.get("/courses.json").then(res => {
      this.props.getCourseList(res.data);
    });
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCourseList: res => dispatch({ type: "GET_COURSELIST", payload: res })
  };
};
const mapStateToProps = state => {
  return { courseList: state.courseList };
};
export default connect(mapStateToProps, mapDispatchToProps)(SliderCourses) 