import React from "react";
import { Link } from "react-router-dom";


function SodaPop() {

    return(
        <div>
            <h2>Yum, Soda Pop!</h2>
            <img src="https://i5.peapod.com/c/G9/G9HCF.png" className="item-pic"></img>
            <p><Link to="/">Back to Vending Machine</Link></p>
        </div>
    )


}

export default SodaPop;