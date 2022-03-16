import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { QueryContext } from "../contexts/QueryContext";
import "../assets/css/navbar.css";

const UserMenu = ({ user }) => {
    const { toggle, setToggle } = useContext(QueryContext);

    return (
        <>
            <ul className="list user-menu scale-up-center">
                {user && (
                    <React.Fragment>
                        <li className="user-menu__item">
                            <NavLink
                                onClick={() => setToggle(!toggle)}
                                to="/profile"
                            >
                                {user.name}
                            </NavLink>
                        </li>
                        {user.isAdmin && (
                            <li className="user-menu__item">
                                <NavLink
                                    onClick={() => setToggle(!toggle)}
                                    to="/productadd"
                                >
                                    Add Product
                                </NavLink>
                            </li>
                        )}
                        <li className="user-menu__item">
                            <NavLink to="/logout">
                                <button className="user-menu__btn btn btn--danger">
                                    Log Out
                                </button>
                            </NavLink>
                        </li>
                    </React.Fragment>
                )}

                {!user && (
                    <React.Fragment>
                        <li className="user-menu__item">
                            <NavLink
                                onClick={() => setToggle(!toggle)}
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </li>
                        <li className="user-menu__item">
                            <NavLink
                                onClick={() => setToggle(!toggle)}
                                to="/login"
                            >
                                <button className="user-menu__btn btn btn--primary">
                                    Log In
                                </button>
                            </NavLink>
                        </li>{" "}
                    </React.Fragment>
                )}
            </ul>
        </>
    );
};

export default UserMenu;
