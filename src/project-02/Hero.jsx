import React from "react";
import nature1 from '../images/nauter-1.png'
import nature2 from '../images/nauter-2.png'
import nature3 from '../images/nauter-3.png'
import nature4 from '../images/nauter-4.png'
import nature5 from '../images/nauter-5.png'
import nature6 from '../images/nauter-6.png'
export default function Hero() {
    return (
        <div>
            <div className="nature-pngs">
                <div className="nature-1" ><img src={nature1} alt="" /></div>
                <div className="nature-2" ><img src={nature2} alt="" /></div>
                <div className="nature-3" ><img src={nature3} alt="" /></div>
                <div className="nature-4" ><img src={nature4} alt="" /></div>
                <div className="nature-5" ><img src={nature5} alt="" /></div>
                <div className="nature-6" ><img src={nature6} alt="" /></div>

            </div>
            <div className="description">
                <h2>Online Expirience</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam qui et harum laudantium laboriosam officia modi nobis, officiis delectus. Autem.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam qui et harum laudantium laboriosam officia modi nobis, officiis delectus. Autem.
                </p>
            </div>
        </div>

    )
}