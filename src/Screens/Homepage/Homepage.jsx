import React, { Fragment } from "react";
import Carousel from "./Carousel/Carousel";
import Welcome from "./Welcome/Welcome";
import Trigger from "./Trigger/Trigger";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import GetStarted from "./GetStarted/GetStarted";
import Teach from "../../components/UI/Teach/Teach";

import ScrollAnimation from "react-animate-on-scroll";
import Modal from "../../components/UI/Modal/Modal";

export default function Homepage(props) {
  return (
    <Fragment>
      {window.scrollTo(0, 0)}
      <Carousel />
      <ScrollAnimation animateIn="bounceInUp">
        <Welcome />
      </ScrollAnimation>

      <Trigger />
      <FeaturedCourses />
      <GetStarted />
      <Teach />
      <Modal />
    </Fragment>
  );
}
