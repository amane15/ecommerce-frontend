import React from "react";
import Quantity from "./Quantity";
import "../assets/css/item.css";

const Item = ({ im }) => {
    return (
        <>
            <div className="item-container">
                <div className="item__img">
                    <img src={im} alt="" />
                </div>
                <div className="item__details">
                    <h3>Apple Iphone</h3>
                    <Quantity value={0} />
                    <h3>Category: Mobile</h3>
                    <h3>Price: 10000</h3>
                </div>
            </div>
        </>
    );
};

export default Item;
