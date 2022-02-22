import React from "react";
import "../assets/css/ordered.css";
import "../assets/css/item.css";
import image from "../assets/images/phone.jpeg";
import laptop from "../assets/images/laptop.jpeg";

const Ordered = () => {
    return (
        <>
            <div className="item-container">
                <div className="item__img">
                    <img src={image} alt="" />
                </div>
                <div className="item__details order__details">
                    <p>Apple Iphone</p>
                    <p>Order Date: 23/12/2021</p>
                    <p>Category: Mobile</p>
                    <p>Price: 10000</p>
                    <p>Status: Delivered</p>
                </div>
            </div>
        </>
    );
};

export default Ordered;
