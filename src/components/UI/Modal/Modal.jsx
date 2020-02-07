import React, { Component } from "react";
import "./modal.scss";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'

class Modal extends Component {
  onPaymentHandler = () => {
    return this.props.history.push('/payment')
  }
  render() {
    let paymentNavigateButton = this.props.match.url !== '/payment' ? <button data-dismiss="modal" className="btn-default btn-payment" onClick={() => this.onPaymentHandler()}>
    Go To Payment
  </button> : null
    return (
      <div
        className="modal fade"
        id="notiModal"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Added Courses!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">Added {this.props.modalCourse}!</div>
            <div className="modal-footer">
              {paymentNavigateButton}
              <button
                className="btn-black btn-close"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { modalCourse: state.modal };
};
export default withRouter(connect(mapStateToProps)(Modal));
