import React from 'react';
import './getStarted.scss'

export default function GetStarted() {
    return (
        <div className='getStarted'>
            <div className="getStarted__overlay"></div>
            <div className="getStarted__content">
                <p className="content__title">Let's Get Started</p>
                <p className="content__subtitle">Match your goals to our programs, explore your options, and map out your path to success.</p>
                <button className="btn__content btn-default">Sign Up Now!</button>
            </div>
        </div>
    )
}
