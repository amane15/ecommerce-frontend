import React, { useEffect } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { emptyCart } from "../services/cartService";
import "../assets/css/orderplaced.css";

const OrderPlaced = () => {
    useEffect(() => {
        async function placeOrder() {
            await emptyCart();
        }
        placeOrder();
    }, []);

    return (
        <div className="orderplaced-container">
            <BsFillCartCheckFill size={100} color="green" />
            <h1 className="orderplaced__heading">Order Placed!</h1>
        </div>
    );
};

export default OrderPlaced;
