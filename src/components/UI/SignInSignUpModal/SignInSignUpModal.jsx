import React, { Component } from "react";
import "./signInSignUpModal.scss";
import axios from "../../../axios/Axios";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions/indexActions";
import { withRouter } from "react-router-dom";

class SignInSignUpModal extends Component {
  state = {
    signIn: true,
    emailInput: "",
    passwordInput: ""
  };
  switchState = () => {
    this.setState({ signIn: !this.state.signIn });
  };
  handleSubmit = event => {
    event.preventDefault();
    const authData = {
      email: this.state.emailInput,
      password: this.state.passwordInput,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzzY_2ckHbbIOjSffridanDcUMJAc4OQ4";
    if (!this.state.signIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzzY_2ckHbbIOjSffridanDcUMJAc4OQ4";
    }
    axios
      .post(url, authData)
      .then(response => {
        if (!this.state.signIn) {
          alert("Sign up successfully!");
          this.refs.close.click();
        } else {
          const authData = {
            token: response.data.idToken,
            userId: response.data.localId
          };
          this.props.onAuthSuccess(authData);
          alert("Sign in successfully!");
          this.refs.close.click();
        }
      })
      .catch(err => {
        if (!this.state.signIn) {
          alert("Sign up Failed: " + err.response.data.error.message);
        } else {
          alert("Sign in Failed: " + err.response.data.error.message);
        }
        this.props.onAuthFail(err.response.data.error.message);
      });
  };
  onChangeInputHandler = (inputType, event) => {
    this.setState({ [inputType]: event.target.value });
  };
  render() {
    let modalHeader = "Sign in to your account!";
    let form = (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="form__input"
          onChange={event => this.onChangeInputHandler("emailInput", event)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form__input"
          onChange={event => this.onChangeInputHandler("passwordInput", event)}
        />
        <div className="submit__container">
          <span className="forget__pass">Forget Password?</span>
          <div className="button__container">
            <button
              className="btn-black btn-switch"
              onClick={() => this.switchState()}
            >
              Switch to Sign Up
            </button>
            <button className="btn-default btn-sign">Sign In</button>
          </div>
        </div>
      </form>
    );
    if (!this.state.signIn) {
      modalHeader = "Sign up to start learning!";
      form = (
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form__input"
            onChange={event => this.onChangeInputHandler("emailInput", event)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form__input"
            onChange={event =>
              this.onChangeInputHandler("passwordInput", event)
            }
          />
          <div className="submit__container">
            <div className="button__container">
              <button
                className="btn-black btn-switch"
                onClick={() => this.switchState()}
              >
                Switch to Sign In
              </button>
              <button className="btn-default btn-sign">Sign Up</button>
            </div>
          </div>
        </form>
      );
    }
    return (
      <div
        className="modal fade"
        id="signInSignUpModal"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {modalHeader}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                ref="close"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">{form}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuthSuccess: authInfo => dispatch(actions.authSuccess(authInfo)),
    onAuthFail: errorMessage => dispatch(actions.authFail(errorMessage))
  };
};
export default withRouter(connect(null, mapDispatchToProps)(SignInSignUpModal));
