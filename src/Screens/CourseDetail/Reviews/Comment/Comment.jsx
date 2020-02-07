import React from 'react';
import './comment.scss'

export default function Comment() {
    return (
        <div className="comment__container">
          <img
            src="http://www.ansonika.com/udema/img/avatar1.jpg"
            alt="man"
            className="comment__img"
          />
          <div className="comment__box">
            <div className="box__name">Admin – April 03, 2016:</div>
            <p className="box__content">
              Extremely thorough and thoughtfully explained. My only minor
              criticism is that there is a lot of 'monkey say monkey do' and not
              enough exploration/thinking critically/problem solving. All in
              all, I learned a lot and thought it was a very good course.
            </p>
          </div>
        </div>
    )
}
