import React, { useState, useEffect } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { getProductWithId } from "../services/productService";
import { Link } from "react-router-dom";
import { getWishlist } from "../services/wishlistService";
import WishlistItems from "./WishlistItems";
import SyncLoader from "react-spinners/SyncLoader";
import "../assets/css/cart.css";

const handleClick = (cart, total) => {
    console.log(cart, total);
};

const EmptyWishlist = () => {
    return (
        <h1 className="empty-cart__message">
            You Wishlist Is Empty...
            <Link to="/">
                <MdOutlineAddShoppingCart color="#000" />
            </Link>
        </h1>
    );
};

const FilledWishlist = ({ wishlist }) => {
    return (
        <>
            <div className="cart-container">
                <div className="cart__items">
                    {wishlist.map((item) => (
                        <WishlistItems key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadWishlist() {
            const wishlist = [];
            const { data: products } = await getWishlist();
            for (let product of products) {
                const i = await getProductWithId(product.productId);
                i.data.quantity = product.quantity;
                if (i.data.quantity > 0) wishlist.push(i.data);
            }
            setLoading(true);
            setWishlist(wishlist);
        }
        loadWishlist();
    }, []);

    const show = wishlist.length ? (
        <FilledWishlist wishlist={wishlist} />
    ) : (
        <EmptyWishlist />
    );

    return loading ? (
        show
    ) : (
        <div className="cart-loading">
            <SyncLoader color="gray" />
        </div>
    );
};

export default Wishlist;
