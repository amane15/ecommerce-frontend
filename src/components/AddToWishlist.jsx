import React from "react";
import { getCurrentUser } from "../services/authService";
import { getWishlist, addToWishlist } from "../services/wishlistService";
import { toast } from "react-toastify";
import { RiHeartAddFill } from "react-icons/ri";
import Tippy from "@tippyjs/react";

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

const AddToWishlist = ({ id }) => {
    return (
        <>
            <Tippy content="Add To Wishlist">
                <div
                    style={{
                        display: "flex",
                        alignSelf: "center",
                        marginRight: "1rem",
                        cursor: "pointer",
                    }}
                    onClick={() => handleClick(id)}
                >
                    <RiHeartAddFill size={24} color="black" />
                </div>
            </Tippy>
        </>
    );
};

export default AddToWishlist;
