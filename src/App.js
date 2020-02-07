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
import * as actions from './redux/actions/indexActions'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
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
  }
  componentDidMount() {
    this.props.onAutoSignin()
  }
}
const mapDispatchToProps = dispatch => {
  return {onAutoSignin: () => dispatch(actions.autoSignin())}
}
export default connect(null, mapDispatchToProps)(App)
