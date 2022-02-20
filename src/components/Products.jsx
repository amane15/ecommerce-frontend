import React from "react";
import "../assets/css/products.css";
import Card from "./Card";

const Categories = () => {
    return (
        <>
            <div className="header">
                <ul className="list products__nav">
                    <li className="products__item">
                        <a href="/#">Home & kitchen</a>
                    </li>
                    <li className="products__item">
                        <a href="/#">Electronics</a>
                    </li>
                    <li className="products__item">
                        <a href="/#">Fashion</a>
                    </li>
                    <li className="products__item">
                        <a href="/#">Books</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

const Products = () => {
    return (
        <>
            <Categories />
            <div className="grid-container">
                <div className="items">
                    <Card />
                </div>
                <div className="items">
                    <Card />
                </div>
                <div className="items">
                    <Card />
                </div>
                <div className="items">
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Products;
