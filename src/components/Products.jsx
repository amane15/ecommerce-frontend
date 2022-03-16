import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getProducts } from "../services/productService";
import "../assets/css/products.css";

const filteredProducts = (products, query) => {
    const filtered = products.filter((product) => {
        if (query === "") return product;
        else if (product.title.toLowerCase().includes(query.toLowerCase())) {
            return product;
        }
    });
    return filtered;
};

const Products = ({ query }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const { data: products } = await getProducts();
            setProducts(products);
        }
        loadProducts();
    }, []);

    const filtered = filteredProducts(products, query);

    return (
        <>
            <div className="grid-container">
                {filtered.map((product) => (
                    <div key={product._id}>
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
