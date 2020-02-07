import React, { Component } from "react";
import "./coursesShow.scss";
import Course from "../../../components/UI/Course/Course";
import axios from "../../../axios/Axios";
import { connect } from "react-redux";
import * as actions from '../../../redux/actions/indexActions'
import {withRouter} from 'react-router-dom'

class CoursesShow extends Component {
  courseGenerator = () => {
    return this.props.courseList.map(course => {
      return (
        <Course
          key={course.code}
          image={course.image}
          courseName={course.courseName}
          price={course.price}
          teachers={course.teachers}
          description={course.description}
          id={course.code}
          {...this.props}
        />
      );
    });
  };
  render() {
    
    
    return (
      <div className="coursesShow">
        <div className="coursesShow__container">{this.courseGenerator()}</div>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("/courses.json")
      .then(res => {
        this.props.getCourseList(res.data)
      });
  }
}
const mapStateToProps = state => {
  return { courseList: state.courseList };
};
const mapDispatchToProps = dispatch => {
  return {
    getCourseList: (courseList) => {
      dispatch(actions.getCourseList(courseList));
    }
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursesShow));
