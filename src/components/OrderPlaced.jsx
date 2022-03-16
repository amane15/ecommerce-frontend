import { BsFillCartCheckFill } from "react-icons/bs";
import { emptyCart } from "../services/cartService";
import { toast } from "react-toastify";
import "../assets/css/orderplaced.css";

const placeOrder = async () => {
    const { data } = await emptyCart();
};

const OrderPlaced = () => {
    placeOrder();
    return (
        <div className="orderplaced-container">
            <BsFillCartCheckFill size={100} color="green" />
            <h1 className="orderplaced__heading">Order Placed!</h1>
        </div>
    );
};

export default OrderPlaced;
