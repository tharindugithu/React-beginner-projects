import React from "react";
import reactLogo from "../images/react.png"
// import './pages.css'
function Header() {
    return (
        <div className="nav">
            <img className="nav-img" src={reactLogo} alt="d" />
            <ul className="nav-items">
                <li >Pricing</li>
                <li >About</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}

export default Header;