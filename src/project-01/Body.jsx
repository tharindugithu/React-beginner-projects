import React from "react";
import reactLogo from '../images/react-half.png'

function Body() {
    return (
        <div className="body-content">
            <img src={reactLogo} alt="" />
            <ul>
                <li>Mature, simple-to-grasp dev workflow</li>
                <li>Ultimate flexibility and compatibility</li>
                <li>Hassle-free reusability of components</li>
                <li>High performance reinforced by Virtual DOM</li>
                <li>The powers of Flux and Redux</li>
                <li>Extensive toolset available</li>
            </ul>
        </div>
    )
}
export default Body;