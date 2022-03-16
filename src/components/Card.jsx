import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaRupeeSign } from "react-icons/fa";
import "../assets/css/card.css";

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
            <div className="card__button">
                <Button id={product._id} buttonName="Buy Now" />
            </div>
        </div>
    );
};

export default Card;
