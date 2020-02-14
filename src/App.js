import React, { Component } from "react";

import "./App.css";

import Homepage from "./Screens/Homepage/Homepage";
// import Courses from "./Screens/Courses/Courses";
import CourseDetail from "./Screens/CourseDetail/CourseDetail";
import Payment from "./Screens/Payment/Payment";
import Courses from "./Screens/Courses/Courses";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import * as actions from "./redux/actions/indexActions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    overScreen: null,
    screenWidth: window.innerWidth
  }
  updateScreen = () => {
    this.setState({
      screenWidth: window.innerWidth
    })
  }

  render() {
    console.log(this.state.screenWidth);
    let renderElements = (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/courses/:id" exact component={CourseDetail} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/" exact component={Homepage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
    
    
    if (this.state.screenWidth < 1400) {
      // alert(
      //   "I haven't done responsive for my app, so please view my app on your laptop/PC or larger screen to prevent broken UI components\nSorry for this inconvenience, I will fix this as soon as possible."
      // );
      renderElements = (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          Please view my app on your laptop/PC or larger screen to prevent
          broken UI components. <br />
          Sorry for this inconvenience, I will fix this as soon as possible.
        </p>
      );
    }
    return renderElements;
  }
  componentDidMount() {
    this.props.onAutoSignin();
    window.addEventListener('resize', this.updateScreen)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreen);
  }
}
const mapDispatchToProps = dispatch => {
  return { onAutoSignin: () => dispatch(actions.autoSignin()) };
};
export default connect(null, mapDispatchToProps)(App);
