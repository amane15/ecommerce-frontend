import React from "react";
import "../assets/css/cart.css";
import Item from "./Item";
import image from "../assets/images/phone.jpeg";
import laptop from "../assets/images/laptop.jpeg";

const Cart = () => {
    return (
        <>
            <Item im={image} />
            <Item im={laptop} />
            <div className="cart__total">
                <h3>Amount: total</h3>
            </div>
        </>
    );
};

export default Cart;
