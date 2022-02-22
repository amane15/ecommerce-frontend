import React, { useState } from "react";
import "../assets/css/quantity.css";

const Quantity = ({ value }) => {
    const [quantity, setQuantity] = useState(value);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity !== 0) setQuantity(quantity - 1);
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
