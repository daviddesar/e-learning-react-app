import React, { Component } from "react";
import "./alsoLike.scss";

import SliderCourses from "./SliderCourses/SliderCourses";

export default class AlsoLike extends Component {
  render() {
    return (
      <div className="alsoLike">
        <p className="alsoLike__header">You might also like</p>
        <SliderCourses/>
      </div>
    );
  }
}
