import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductWithId } from "../services/productService";
import Button from "./Button";
import { FaRupeeSign } from "react-icons/fa";
import "../assets/css/product.css";
import AddToWishlist from "./AddToWishlist";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function loadProduct() {
            const { data: product } = await getProductWithId(id);
            setProduct(product);
        }
        loadProduct();
    }, []);

    return (
        <>
            <div className="product-container">
                <div className="product__image">
                    <img src={product.img} alt="" />
                </div>
                <div className="product__details">
                    <p className="product__attribute">{product.title} </p>
                    <p className="product__prices">
                        <FaRupeeSign size={15} />
                        {product.price}
                    </p>
                    <p className="product__description">
                        {product.description}
                    </p>
                    <div className="product__btn">
                        <AddToWishlist product={product} />
                        <Button id={id} buttonName="Buy Now" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
