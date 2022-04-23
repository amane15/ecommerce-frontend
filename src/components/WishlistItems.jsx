import React from "react";
import Button from "./Button";
import { FaRupeeSign } from "react-icons/fa";
import { deleteProduct } from "../services/wishlistService";
import "../assets/css/item.css";
import "../assets/css/wishlistitems.css";

const handleClick = async (id) => {
    await deleteProduct(id);
    window.location = "/wishlist";
};

const WishlistItems = ({ product }) => {
    return (
        <>
            <div className="item-container">
                <div className="item__img">
                    <img src={product.img} alt="" />
                </div>
                <div className="wishlist-item__details item__details">
                    <h2 className="item__title">{product.title}</h2>
                    <h3 className="item__price">
                        <FaRupeeSign size={12} />
                        {product.price}
                    </h3>
                    <div className="wishlist-item__btn">
                        <button
                            className="btn btn--outlined remove-wishlist__btn"
                            onClick={() => handleClick(product._id)}
                        >
                            Remove from Wishlist
                        </button>
                        <Button id={product._id} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishlistItems;
