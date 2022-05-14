import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getProducts } from "../services/productService";
import BounceLoader from "react-spinners/BounceLoader";
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadProducts() {
            const { data: products } = await getProducts();
            setProducts(products);
            setLoading(true);
        }
        loadProducts();
    }, []);

    const filtered = filteredProducts(products, query);

    return (
        <>
            {loading ? (
                <div className="grid-container">
                    {filtered.map((product) => (
                        <div key={product._id}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="product-loading">
                    <BounceLoader color="gray" />
                </div>
            )}
        </>
    );
};

export default Products;
