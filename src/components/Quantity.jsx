import React, { useState } from "react";
import { updateQuantity } from "../services/cartService";
import "../assets/css/quantity.css";

const Quantity = ({ product, value }) => {
    const [quantity, setQuantity] = useState(value);

    const handleIncrement = async () => {
        setQuantity(quantity + 1);
        await updateQuantity(product, quantity + 1);
        window.location = "/cart";
    };

    const handleDecrement = async () => {
        if (quantity !== 0) {
            setQuantity(quantity - 1);
            await updateQuantity(product, quantity - 1);
            window.location = "/cart";
            return;
        }
    };

    return (
        <div className="quantity">
            <button
                className="quantity__btn quantity__btn--decrement"
                onClick={handleDecrement}
            >
                -
            </button>

            <p className="quantity__value"> {quantity}</p>
            <button
                className="quantity__btn quantity__btn--increment"
                onClick={handleIncrement}
            >
                +
            </button>
        </div>
    );
};

export default Quantity;
