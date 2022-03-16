import React, { useContext, useEffect } from "react";
import { getCart } from "../services/cartService";
import { QueryContext } from "../contexts/QueryContext";
import "../assets/css/navbar.css";

const CartBadge = () => {
    const { cartCount, setCartCount } = useContext(QueryContext);

    useEffect(() => {
        async function loadCart() {
            const { data } = await getCart();
            setCartCount(data.length);
        }
        loadCart();
    });
    return <span className="cart__badge badge">{cartCount}</span>;
};

export default CartBadge;
