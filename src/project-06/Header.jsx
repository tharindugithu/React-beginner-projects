import React from "react";
import './style.css'
export default function Header() {
    return (
        <div className="header">
            <div className="header-name">
                <img src="./image/meme.png" alt="" />
                <h1>MemeGenerator</h1>
            </div>
            <div className="project-num">
                <h3>React Course</h3>
            </div>
        </div>
    )
}