import React, { useState, useEffect } from "react";
import Item from "./Item";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { getCart } from "../services/cartService";
import { getProductWithId } from "../services/productService";
import { placeOrder } from "../services/orderService";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import "../assets/css/cart.css";

const handleClick = async (cart, total) => {
    const order = await placeOrder(cart, total);
    window.location = "/orderplaced";
};

const EmptyCart = () => {
    return (
        <h1 className="empty-cart__message">
            You Cart Is Empty...
            <Link to="/">
                <MdOutlineAddShoppingCart color="#000" />
            </Link>
        </h1>
    );
};

const FilledCart = ({ cart, total }) => {
    return (
        <>
            <div className="cart-container">
                <div className="cart__items">
                    {cart.map((item) => (
                        <Item key={item._id} product={item} />
                    ))}
                </div>

                <div className="cart__total">
                    <h3>
                        Total ({cart.length} items): <FaRupeeSign size={15} />
                        {total}
                    </h3>
                    <button
                        onClick={() => {
                            handleClick(cart, total);
                        }}
                        className="btn btn--outlined"
                    >
                        Pay and Purchase
                    </button>
                </div>
            </div>
        </>
    );
};

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadCart() {
            const cart = [];
            let total = 0;
            const { data: products } = await getCart();
            for (let product of products) {
                const i = await getProductWithId(product.productId);
                i.data.quantity = product.quantity;
                if (i.data.quantity > 0) cart.push(i.data);
                total += i.data.price * i.data.quantity;
            }
            setLoading(true);
            setCart(cart);
            setTotal(total);
        }
        loadCart();
    }, []);

    const show = cart.length ? (
        <FilledCart cart={cart} total={total} />
    ) : (
        <EmptyCart />
    );

    return loading ? (
        show
    ) : (
        <div className="cart-loading">
            <SyncLoader color="gray" />
        </div>
    );
};

export default Cart;
