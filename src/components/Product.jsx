import React from "react";
import laptop from "../assets/images/laptop.jpeg";
import image from "../assets/images/phone.jpeg";
import "../assets/css/product.css";
// import Quantity from "./Quantity";

const Product = () => {
    let value = 10;
    return (
        <>
            <div className="product-container">
                <div className="product__image">
                    <img src={image} alt="" />
                </div>
                <div className="product__details">
                    <p className="product__attribute">Apple Iphone X</p>
                    <p>
                        <span className="product__attribute">Category: </span>
                        Mobile
                    </p>
                    <p className="product__description">
                        <span className="product__attribute">
                            Description:{" "}
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corrupti, animi aliquam eligendi culpa officia
                        porro asperiores et architecto fugiat quasi Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Tenetur ex
                        rem quia saepe sed, ea consequatur aut non atque
                        dignissimos minus voluptatem distinctio aspernatur
                        omnis, nihil velit cupiditate nobis? Atque magnam dicta
                        rerum omnis corrupti. Accusantium, quidem. Accusamus
                        dicta ex iure! Fugiat nostrum enim placeat pariatur illo
                        esse! Fuga, recusandae?
                    </p>
                    <p>
                        <span className="product__attribute">Price:</span>
                        100000
                    </p>
                    <div className="product__btn">
                        <button className="btn">Add to Cart</button>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
