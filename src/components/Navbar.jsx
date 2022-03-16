import React, { useContext } from "react";
import { QueryContext } from "../contexts/QueryContext";
import { RiShoppingCart2Fill, RiUserFill } from "react-icons/ri";
import { FcShop } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import CartBadge from "./CartBadge";
import UserMenu from "./UserMenu";
import "../assets/css/navbar.css";

const Navbar = ({ user }) => {
    const { query, setQuery, toggle, setToggle } = useContext(QueryContext);
    const navigate = useNavigate();

    const handleClick = (query) => {
        navigate("/", { state: query });
    };

    return (
        <>
            <nav className="navbar">
                <NavLink to="/">
                    <FcShop className="nav__logo" color="#fff" size={24} />
                </NavLink>
                <div className="search-bar">
                    <input
                        className="nav__input"
                        type="text"
                        name=""
                        id=""
                        placeholder="Search..."
                        onChange={(event) => {
                            setQuery(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => handleClick(query)}
                        className="nav__btn"
                    >
                        Search
                    </button>
                </div>
                <NavLink to="/cart" className="cart">
                    <RiShoppingCart2Fill color="#fff" size={24} />
                    {user && <CartBadge />}
                </NavLink>
                <RiUserFill
                    className="user"
                    color="#fff"
                    size={24}
                    onClick={() => setToggle(!toggle)}
                    style={{ cursor: "pointer" }}
                />
            </nav>
            {toggle && <UserMenu user={user} />}
        </>
    );
};

export default Navbar;
