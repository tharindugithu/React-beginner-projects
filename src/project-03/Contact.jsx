import React from "react";
import './style.css'
import phonePng from '../images/phone.png'
import emailPng from '../images/email.png'
export function Contact({ img, name, number, email }) {

    return (
        <div className="contact-card">
            <div className="image">
                <img src={img} alt="cat" />
            </div>
            <div className="name">
                <h2>{name}</h2>
            </div>
            <div className="number">
                <img src={phonePng} alt="" />
                <p>+843 2332 32 322</p>
            </div>
            <div className="email">
                <img src={emailPng} alt="" />
                <p>dsjfd@gmial.com</p>
            </div>
        </div>
    )
}