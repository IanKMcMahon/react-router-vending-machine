import React from "react";
import Chips from "./Chips";
import SodaPop from "./SodaPop";
import Jerky from "./Jerky";
import { Link } from "react-router-dom";


function VendingMachine() {

    return(
        <div className="page-wrapper">
            <h1>Vending Machine</h1>
            <h3>Choose Your Snack!</h3>
            <div className="snack-wrapper">
                    <p><Link to="/chips">Chips</Link></p>
                    <p><Link to="/sodapop">Soda Pop</Link></p>
                    <p><Link to="/jerky">Jerky</Link></p>
            </div>
            <img src="https://evending.com/cdn/shop/files/snack_6588c2e6-8623-44c8-af9e-847e1c5ee46b_No.webp?v=1692773987"></img>

        </div>

    )


}

export default VendingMachine;