import React from "react";
import { Link } from "react-router-dom";


function Jerky() {

    return(
        <div>
            <h2>Yum, Jerky!</h2>
            <img src="https://www.kroger.com/product/images/large/front/0005194328701" className="item-pic"></img>
            <p><Link to="/">Back to Vending Machine</Link></p>
        </div>
    )


}

export default Jerky;