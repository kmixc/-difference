import React from 'react'
import '../App.css';
import Img3 from '../img/temp-img4.jpg'
import Img4 from '../img/temp-img5.jpg'
import Img5 from '../img/temp-img6.jpg'
import $ from 'jquery'

export default function content() {
    return (
        <div className="content">
            <p className="content-text-1">difference.</p>

            <div className="content-images">
                <img src={Img3} id="content-1" alt="tv" onMouseEnter={handleMouseEnterOne} />
                <img src={Img4} id="content-2" alt="women" onMouseEnter={handleMouseEnterTwo} />
                <img src={Img5} id="content-3" alt="movie" onMouseEnter={handleMouseEnterThree} />
            </div>
            <p className="content-text-2">we do what you want.</p>
        </div>
    )

    function handleMouseEnterOne(e) {
        $('#content-1').hover(function () {
            $(this).css("filter", "grayscale(1)");
        }, function () {
            $(this).css("filter", "grayscale(0)");
        })
    }

    function handleMouseEnterTwo(e) {
        $('#content-2').hover(function () {
            $(this).css("filter", "grayscale(1)");
        }, function () {
            $(this).css("filter", "grayscale(0)");
        })
    }

    function handleMouseEnterThree(e) {
        $('#content-3').hover(function () {
            $(this).css("filter", "grayscale(1)");
        }, function () {
            $(this).css("filter", "grayscale(0)");
        })
    }
}
