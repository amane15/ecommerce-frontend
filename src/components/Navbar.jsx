import React, { useState } from "react";
import { RiShoppingCart2Fill, RiUserFill } from "react-icons/ri";
import { FcShop } from "react-icons/fc";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const UserMenu = () => (
    <>
        <ul className="list user-menu scale-up-center">
            <li className="user-menu__item">
                <Link to="/profile">Profile</Link>
            </li>
            <li className="user-menu__item">
                <Link to="/orders">Orders</Link>
            </li>
            <li className="user-menu__item">
                <Link to="/register">Register</Link>
            </li>
            <li className="user-menu__item">
                <Link to="/login">
                    <button className="user-menu__btn btn btn--primary">
                        Log In
                    </button>
                </Link>
            </li>
            <li className="user-menu__item">
                <Link to="/logout">
                    <button className="user-menu__btn btn btn--danger">
                        Log Out
                    </button>
                </Link>
            </li>
        </ul>
    </>
);

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <FcShop className="nav__logo" color="#fff" size={24} />
                </Link>
                <div className="search-bar">
                    <input
                        className="nav__input"
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                    />
                    <button className="nav__btn">Search</button>
                </div>
                <Link to="/cart" className="cart">
                    <RiShoppingCart2Fill color="#fff" size={24} />
                </Link>
                <RiUserFill
                    className="user"
                    color="#fff"
                    size={24}
                    onClick={() => setToggle(!toggle)}
                    style={{ cursor: "pointer" }}
                />
            </nav>
            {toggle && <UserMenu />}
        </>
    );
};

export default Navbar;
