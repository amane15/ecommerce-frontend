import React, { useState } from "react";
import { RiShoppingCart2Fill, RiUserFill } from "react-icons/ri";
import { FcShop } from "react-icons/fc";
import "../assets/css/navbar.css";

const UserMenu = () => (
    <>
        <ul className="list user-menu scale-up-center">
            <li className="user-menu__item">
                <a href="/#">Profile</a>
            </li>
            <li className="user-menu__item">
                <a href="/#">Orders</a>
            </li>
            <li className="user-menu__item">
                <a href="/#">Sign In</a>
            </li>
            <li className="user-menu__item">
                <a href="/#">Sign Out</a>
            </li>
        </ul>
    </>
);

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="navbar">
                <a href="/#">
                    <FcShop className="nav__logo" color="#fff" size={24} />
                </a>
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
                <a className="cart" href="/cart">
                    <RiShoppingCart2Fill color="#fff" size={24} />
                </a>
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
