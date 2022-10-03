import React from "react";
import './style.css'
import Data from './/Data';
export default function Body(props) {

    return (
        <div className="vlog-item">
            <div className="vlog-image">
                <img src={'./image/' + props.item.img} alt='images' />
                <p className="dec" >{props.item.description}</p>
            </div>
            <div className="vlog-details">
                <p className="detail-item" >{props.item.location}<a href={props.item.googleMapUrl} target='blank'>Go to google map</a></p>
                <h2 className="detail-item" >{props.item.title}</h2>
                <p className="detail-item" >{props.item.startDate + ' to ' + props.item.endDate}</p>

            </div>
        </div>
    )
}