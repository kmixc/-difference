import React from 'react'
import Marquee from "react-fast-marquee";
import TypeIt from "typeit-react";
import Logo from '../logo.svg'
import '../App.css';

export default function about() {

    return (
        <div className="container">
            <div className="about-page">

                <Marquee className="about-scroll" gradient={false} speed={60}>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                </Marquee>

                <div className="about-title">
                    <TypeIt className="typeon-about" options={{
                        strings: ["about difr..."],
                        waitUntillVisible: true,
                        loop: true,
                        loopDelay: 5000,
                        deleteSpeed: 80,
                        startDelay: 1000
                    }}></TypeIt>
                </div>

                <Marquee className="about-scroll" gradient={false} speed={80}>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                    <p>be different with us.</p>
                </Marquee>
            </div>
            <div className="about-page-2">
                <button>
                    <img src={Logo} alt="" />
                </button>
            </div>
        </div>
    )

}
