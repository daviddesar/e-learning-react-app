import React, { Component, Fragment } from "react";
import PaymentBanner from "./PaymentBanner/PaymentBanner";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import "./payment.scss";
import AlsoLike from "../../components/UI/AlsoLike/AlsoLike";
import Modal from "../../components/UI/Modal/Modal";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Payment extends Component {
  checkAuth = () => {
    if (this.props.isAuth) {
      return null
    }
    else {
      alert("Please Sign in")
      return <Redirect to="/" />
    }
  }
  render() {
    return (
      <Fragment>
        {this.checkAuth()}
        {window.scrollTo(0, 0)}
        <PaymentBanner />
        <div className="flex__col">
          <Cart />
          <Checkout />
        </div>
        <AlsoLike/>
        <Modal />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {isAuth: state.auth.token !== null}
}
export default connect(mapStateToProps)(Payment)
