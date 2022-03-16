import React from "react";
import Quantity from "./Quantity";
import Delete from "./Delete";
import { FaRupeeSign } from "react-icons/fa";
import "../assets/css/item.css";

const Item = ({ product }) => {
    return (
        <>
            <div className="item-container">
                <div className="item__img">
                    <img src={product.img} alt="" />
                </div>
                <div className="item__details">
                    <h2 className="item__title">{product.title}</h2>
                    <div className="item__quantity">
                        <Quantity product={product} value={product.quantity} />
                        <Delete product={product} />
                    </div>
                    <h3 className="item__price">
                        <FaRupeeSign size={12} />
                        {product.price}
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Item;
