import React from "react";
import { getCurrentUser } from "../services/authService";
import { getWishlist, addToWishlist } from "../services/wishlistService";
import { toast } from "react-toastify";

const handleClick = async (id) => {
    if (!getCurrentUser()) window.location = "/login";
    const { data: wishlist } = await getWishlist();
    for (let item of wishlist) {
        if (id === item.productId) {
            toast.info("Product already exists in wishlist");
            return;
        }
    }
    const product = await addToWishlist(id);
    if (product) toast.success(product.data);
};

const AddToWishlist = ({ product }) => {
    return (
        <>
            <button
                className="btn btn--outlined"
                onClick={() => handleClick(product._id)}
            >
                Add To Wishlist
            </button>
        </>
    );
};

export default AddToWishlist;
