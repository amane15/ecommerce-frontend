import React from "react";
import { toast } from "react-toastify";
import { addToCart } from "../services/cartService";
import { updateCart } from "../services/cartService";
import { getCart } from "../services/cartService";
import { getCurrentUser } from "../services/authService";

const handleClick = async (id) => {
    if (!getCurrentUser()) window.location = "/login";
    const { data: cart } = await getCart();
    for (let item of cart) {
        if (id === item.productId) {
            item.quantity += 1;
            const { data } = await updateCart(item);
            if (data) toast.success(data);
            window.location = "/cart";
            return;
        }
    }
    const product = await addToCart(id);
    if (product) toast.success(product.data);
    window.location = "/cart";
};

const Button = ({ id }) => {
    return (
        <>
            <button
                className="btn btn--outlined"
                onClick={() => handleClick(id)}
            >
                Buy Now
            </button>
        </>
    );
};

export default Button;
