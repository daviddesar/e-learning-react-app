import React from "react";
import "./carousel.scss";

export default function Carousel() {
  return (
    <div className="carousel__container">
      <div className="img__container">
        <img
          src="https://livedemo00.template-help.com/wt_prod-27245/images/home-01-1920x873.jpg"
          alt="study"
          className="carousel__img"
        />
      </div>
      <div className="carousel__content">
        <p className="content__header">
          The Best Professional e-Learning Courses For better World!
        </p>
        <p className="content__subheader">1500+ Centers Across the World</p>
        <div className="content__search">
            <ul className="search__container">
                <li className="item__container">
                    <select className="item select-item">
                        <option>Category</option>
                        <option>Development</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Management</option>
                        <option>Art</option>
                    </select>
                </li>
                <li className="item__container">
                    <select className="item select-item">
                        <option>Course Status</option>
                        <option>Free</option>
                        <option>Paid</option>
                    </select>
                </li>
                <li className="item__container">
                    <input className="item input-item" placeholder="Type Keywords..." />
                </li>
                <li className="item__container">
                    <button className="item button-item btn-default">Search</button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
