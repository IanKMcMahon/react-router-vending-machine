import React from "react";
import { Link } from "react-router-dom";



function Chips() {

    return(
        <div>
            <h2>Yum, Chips!</h2>
            <img src="https://west.pacificcandywhsle.com/wp-content/uploads/2022/05/1-62-600x600.jpg" className="item-pic"></img>
            <p><Link to="/">Back to Vending Machine</Link></p>
        </div>
    )

}

export default Chips;