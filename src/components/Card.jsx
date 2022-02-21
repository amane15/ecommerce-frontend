import React from "react";
import image from "../assets/images/phone.jpeg";
// import laptop from "../assets/images/laptop.jpeg";

import "../assets/css/card.css";

const Card = () => {
    return (
        <div className="card-container">
            <div className="card__image">
                <img src={image} alt="" />
            </div>
            <div className="card__title">
                <h3>Iphone</h3>
            </div>
            <div className="card__description">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card__category">Category</div>
            <div className="card__button">
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    );
};

export default Card;
