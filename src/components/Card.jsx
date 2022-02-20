import React from "react";
import image from "../assets/images/phone.jpeg";
import "../assets/css/card.css";

const Card = () => {
    return (
        <div className="product-container">
            <div className="product__image">
                <img src={image} alt="" />
            </div>
            <div className="product__title">
                <h3>Iphone</h3>
            </div>
            <div className="product__description">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="product__category">Category</div>
            <div className="product__button">
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;
