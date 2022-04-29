import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { FaRupeeSign } from "react-icons/fa";
import AddToWishlist from "./AddToWishlist";
import "../assets/css/card.css";
import BuyNowButton from "./BuyNowButton";

const Card = ({ product }) => {
    return (
        <div className="card-container">
            <Link to={`/product/${product._id}`}>
                <div className="card__image">
                    <img src={product.img} alt="" />
                </div>
                <div className="card__title">
                    <h2>{product.title}</h2>
                </div>
                <div className="card__price">
                    <h3>
                        <FaRupeeSign size={15} />
                        {product.price}
                    </h3>
                </div>
            </Link>
            <div className="wishlist">
                <AddToWishlist id={product._id} />
            </div>
            <div className="card__button">
                <AddToCartButton id={product._id} />
                <BuyNowButton id={product._id} />
            </div>
        </div>
    );
};

export default Card;
