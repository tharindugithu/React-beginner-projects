import React from "react";
import './style.css'
export default function Joke({ setup, punchline, value }) {

    return (
        <div className="joke-item">
            <h3 className="joke-setup" > {setup} </h3>
            <h4 className="joke-punchline">{punchline}</h4>
            <p>{value}</p>
            <hr />
        </div>

    )
}





