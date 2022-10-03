import React from "react";
import starPng from '../images/start.png';
export default function Card(props) {
    console.log(props)
    let batchText
    if (props.item.openSpots === 0) {
        batchText = 'SOLD OUT'
    } else {
        batchText = 'ONLINE'
    }
    return (
        <div className="card">
            <div className="sell-info">
                {batchText && <p>{batchText}</p>}
            </div>
            <div>
                <img src={'./image/' + props.item.img} alt="pizza" />
            </div>
            <div className="card-info">
                <div className="symbol-string">
                    <img src={starPng} alt="" />
                    <p>({props.item.status.rating}.0)USA</p>
                </div>
                <p>{props.item.title}</p>
                <p> <strong>From {props.item.price}$</strong> / Person</p>
            </div>
        </div>

        /*<div className="card">
                <div className="sell-info">
                    <p>Sold Out</p>
                </div>
                <div>
                    <img src={pizzaPhoto} alt="pizza" />
                </div>
                <div className="card-info">
                    <div className="symbol-string">
                        <img src={starPng} alt="" />
                        <p>5.0(6).USA</p>
                    </div>
                    <p>Pizza For Dinner or Lunch</p>
                    <p> <strong>From 133$</strong> / Person</p>
                </div>
            </div>

            <div className="card">
                <div className="sell-info">
                    <p>Sold Out</p>
                </div>
                <div>
                    <img src={pizzaPhoto} alt="pizza" />
                </div>
                <div className="card-info">
                    <div className="symbol-string">
                        <img src={starPng} alt="" />
                        <p>5.0(6).USA</p>
                    </div>
                    <p>Pizza For Dinner or Lunch</p>
                    <p> <strong>From 133$</strong> / Person</p>
                </div>
            </div>

            <div className="card">
                <div className="sell-info">
                    <p>Sold Out</p>
                </div>
                <div>
                    <img src={pizzaPhoto} alt="pizza" />
                </div>
                <div className="card-info">
                    <div className="symbol-string">
                        <img src={starPng} alt="" />
                        <p>5.0(6).USA</p>
                    </div>
                    <p>Pizza For Dinner or Lunch</p>
                    <p> <strong>From 133$</strong> / Person</p>
                </div>
            </div>

             <div className="card">
                <div className="sell-info">
                    <p>Sold Out</p>
                </div>
                <div>
                    <img src={pizzaPhoto} alt="pizza" />
                </div>
                <div className="card-info">
                    <div className="symbol-string">
                        <img src={starPng} alt="" />
                        <p>5.0(6).USA</p>
                    </div>
                    <p>Pizza For Dinner or Lunch</p>
                    <p> <strong>From 133$</strong> / Person</p>
                </div>
            </div> */

    )
}