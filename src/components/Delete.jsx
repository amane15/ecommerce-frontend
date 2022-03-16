import React from "react";
import { MdDelete } from "react-icons/md";
import { deleteProduct } from "../services/cartService";

const handleClick = async (product) => {
    await deleteProduct(product._id);
    window.location = "/cart";
};

const Delete = ({ product }) => {
    return <MdDelete size={24} onClick={() => handleClick(product)} />;
};

export default Delete;
