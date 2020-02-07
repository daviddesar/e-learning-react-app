import React, { Component, Fragment } from "react";
import Category from "./Category/Category";
import SearchAndSort from "./SearchAndSort/SearchAndSort";
import CoursesShow from "./CoursesShow/CoursesShow";
import Teach from "../../components/UI/Teach/Teach";
import Banner from "./Banner/Banner";
import Modal from "../../components/UI/Modal/Modal";

export default class Courses extends Component {
  render() {
    return (
      <Fragment>
        {window.scrollTo(0, 0)}
        <Banner />
        <Category />
        <SearchAndSort />
        <CoursesShow/>
        <Teach />
        <Modal />
      </Fragment>
    );
  }
}
