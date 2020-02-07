import React from "react";
import "./searchAndSort.scss";

export default function SearchAndSort() {
  return (
    <div className="searchAndSort">
      <ul className="searchAndSort__container">
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
          <button className="item button-item">Search</button>
        </li>
      </ul>
      <div className="seacrhAndSort__views">
          <a href="/" className="views__btn">
            <i className="fa fa-th"></i>
          </a>
          <a href="/" className="views__btn">
            <i className="fa fa-list"></i>
          </a>
        </div>
    </div>
  );
}
