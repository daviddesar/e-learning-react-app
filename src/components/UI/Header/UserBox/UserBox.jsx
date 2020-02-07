import React, { Component } from "react";
import "./userBox.scss";
import { connect } from "react-redux";
import * as actions from '../../../../redux/actions/indexActions' 

class UserBox extends Component {
  signOutHandler = () => {
    this.props.onSignOut()
    alert("Sign out successfully!")
  }
  render() {
    let textHeader = this.props.isAuth ? <p>Hello User</p> : <p>Please Sign in</p>
    let button = this.props.isAuth ? (<button
    className="user__button user__signin"
    data-toggle="modal"
    onClick={() => this.signOutHandler()}
  >
    Sign Out
  </button>) : 
  (<button
    className="user__button user__signin"
    data-toggle="modal"
    data-target="#signInSignUpModal"
  >
    Sign In
  </button>)
    return (
      <div className="user__box">
        {textHeader}
        {button}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { isAuth: state.auth.token !== null };
};
const mapDispatchToProps = dispatch => {
  return {onSignOut: () => dispatch(actions.signOut())}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserBox)
