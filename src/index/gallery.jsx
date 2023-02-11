import React from 'react'
import Img1 from '../img/temp-img.jpg'
import Img2 from '../img/temp-img2.jpg'
import Img3 from '../img/temp-img3.jpg'
import CountUp from 'react-countup';
import '../App.css';


export default function gallery() {
    return (
        <div className="div-gallery">
            <CountUp className="num-1" end={98} start={53} useEasing={true} duration={2.75}></CountUp>
            <div className="gallery">
                <img src={Img1} alt="views" />
                <img src={Img2} alt="tokyo" />
                <img src={Img3} alt="tokyo-2" />
            </div>
            <p className="gallery-text">TOKYO</p>
        </div>
    )


}
