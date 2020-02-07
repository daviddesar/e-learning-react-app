import React from "react";
import "./reviews.scss";
import ReviewBar from "./ReviewBar/ReviewBar";
import Comment from "./Comment/Comment";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__container">
        <p className="reviews__header">Reviews</p>
        <div className="number__bars">
          <div className="reviews__number">
            <div className="number__left">
              <p className="number">4.5</p>
              <div className="reviews__stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <div className="reviews__bars">
            <ReviewBar starName="5" />
            <ReviewBar starName="4" />
            <ReviewBar starName="3" />
            <ReviewBar starName="2" />
            <ReviewBar starName="1" />
          </div>
        </div>
      </div>
      <div className="comment">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
