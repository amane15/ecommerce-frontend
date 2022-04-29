import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryContext } from "./contexts/QueryContext";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import LogOut from "./components/LogOut";
import ProtectedRoute from "./components/ProtectedRoute";
import auth from "./services/authService";
import Product from "./components/Product";
import OrderPlaced from "./components/OrderPlaced";
import ProductAdd from "./components/ProductAdd";
import AdminRoute from "./components/AdminRoute";
import Wishlist from "./components/Wishlist";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Tippy from "@tippyjs/react";

const App = () => {
    const [user, setUser] = useState(null);
    const [query, setQuery] = useState("");
    const [cartCount, setCartCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        try {
            const user = auth.getCurrentUser();
            setUser(user);
        } catch (error) {}
    }, []);

    return (
        <>
            <QueryContext.Provider
                value={{
                    query,
                    setQuery,
                    cartCount,
                    setCartCount,
                    toggle,
                    setToggle,
                }}
            >
                <ToastContainer />
                <Navbar user={user} />
                <Routes>
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route element={<ProtectedRoute />}>
                        <Route element={<AdminRoute />}>
                            <Route
                                path="/productadd"
                                element={<ProductAdd />}
                            />
                        </Route>
                        <Route path="/orderplaced" element={<OrderPlaced />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                    </Route>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </QueryContext.Provider>
        </>
    );
};

export default App;
