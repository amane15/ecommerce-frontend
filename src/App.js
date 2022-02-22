import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import HomePage from "./components/HomePage";
import Ordered from "./components/Ordered";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/orders" element={<Ordered />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
