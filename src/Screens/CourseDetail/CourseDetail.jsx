import React, { Component, Fragment } from "react";
import CourseCard from "./CourseCard/CourseCard";
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";
import "./courseDetail.scss";
import BannerCourse from "./BannerCourse/BannerCourse";
import CourseAgenda from "./CourseAgenda/CourseAgenda";
import axios from "../../axios/Axios";
import { connect } from "react-redux";
import AlsoLike from "../../components/UI/AlsoLike/AlsoLike";
import Modal from "../../components/UI/Modal/Modal";
import * as actions from "../../redux/actions/indexActions";

class CourseDetail extends Component {
  render() {
    console.log('[CourseDetail] render!' )
    let { courseName, description, teachers } = this.props.course;
    return (
      <Fragment>
        {window.scrollTo(0, 0)}
        <BannerCourse courseName={courseName} teachers={teachers} />
        <div className="flex__column">
          <div className="left__col">
            <Description description={description} />
            <CourseAgenda />
            <Reviews />
          </div>
          <div className="right__col">
            <CourseCard />
          </div>
        </div>
        <AlsoLike />
        <Modal />
      </Fragment>
    );
  }
  componentDidMount() {
    axios.get("/courses/" + +this.props.match.params.id + ".json").then(res => {
      this.props.dispatchCourseToStore(res.data);
    });
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.course.code) return;
    if (+this.props.match.params.id !== +this.props.course.code) {
      axios
        .get("/courses/" + +this.props.match.params.id + ".json")
        .then(res => {
          this.props.dispatchCourseToStore(res.data);
        });
    } 
    else return;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatchCourseToStore: course => dispatch(actions.getCourseDetail(course))
  };
};
const mapStateToProps = state => {
  return { course: state.courseDetail };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
