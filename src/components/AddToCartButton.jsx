import React from "react";
import { toast } from "react-toastify";
import { addToCart } from "../services/cartService";
import { getCart } from "../services/cartService";
import { getCurrentUser } from "../services/authService";
import { useContext } from "react";
import { QueryContext } from "../contexts/QueryContext";

const handleClick = async (id, cartCount, setCartCount) => {
    if (!getCurrentUser()) window.location = "/login";
    const { data: cart } = await getCart();
    for (let item of cart) {
        if (id === item.productId) {
            toast.info("Product already exists in cart");
            return;
        }
    }
    const product = await addToCart(id);
    if (product) toast.success(product.data);
    setCartCount(cartCount + 1);
};

const AddToCartButton = ({ id }) => {
    const { cartCount, setCartCount } = useContext(QueryContext);

    return (
        <>
            <button
                className="btn btn--outlined"
                onClick={() => handleClick(id, cartCount, setCartCount)}
            >
                Add To Cart
            </button>
        </>
    );
};

export default AddToCartButton;
