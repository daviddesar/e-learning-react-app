import React, { Component } from "react";
import "./courseAgenda.scss";
import AgendaSection from "./AgendaSection/AgendaSection";

export default class CourseAgenda extends Component {
  state = {
    display: false
  };
  clickHandler = () => {
    this.setState({ display: !this.state.display });
  };
  
  render() {
    let stylingDisplay = {
      display: "none"
    };
    if (this.state.display) {
      stylingDisplay["display"] = "block";
    }
    return (
      <div className="courseAgenda">
        <p className="agenda__header">Course Content:</p>
        <div className="section__container">
          <AgendaSection 
            clicked={this.clickHandler}
            styleListDisplay={stylingDisplay}
          />
        </div>
      </div>
    );
  }
}
