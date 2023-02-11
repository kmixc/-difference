import React from 'react'
import '../App.css';
import $ from 'jquery';
import CircleType from 'circletype';


export default function circText() {

    const circleType = new CircleType(
        document.getElementsByClassName(".rotated")
    ).radius(80);

    return (
        <div className="circular-text">
            <span className="rotated">
                stone • fox • swim • tapcheck • wolves • fox • swim • tapcheck • wolves
            </span>
        </div>
    )
}

