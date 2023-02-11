import React from 'react'
import TypeIt from "typeit-react";
import '../App.css';

export default function spacer() {
    return (
        <div className="spacer">
            <TypeIt className="typeon" options={{
                strings: ["be different.", "everyone is unique."],
                waitUntillVisible: true,
                loop: true,
                loopDelay: 3000,
            }}></TypeIt>
            <TypeIt className="typeon-right" options={{
                strings: ["contact us now..."],
                waitUntillVisible: true,
                loop: true,
                loopDelay: 4000,
                deleteSpeed: 80,
                startDelay: 2000
            }}></TypeIt>
        </div>
    )
}
