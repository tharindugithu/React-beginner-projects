import React from "react";
import './style.css'
export default function () {

    const date = new Date()
    const hours = date.getHours();
    let timeofDay
    if (hours <= 12 && hours >= 0) {
        timeofDay = 'Morning'
    } else if (hours >= 12 && hours <= 18) {
        timeofDay = 'Evenig'
    } else {
        timeofDay = 'Night'
    }

    return (
        <div>
            <h1>Hello there!!! Good {timeofDay}</h1>
        </div>
    )
}