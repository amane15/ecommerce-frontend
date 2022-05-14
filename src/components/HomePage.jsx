import React, { useContext } from "react";
import Products from "./Products";
import Slider from "./Slider";
import { QueryContext } from "../contexts/QueryContext";

const HomePage = () => {
    const { query } = useContext(QueryContext);
    return (
        <>
            <Slider />
            <Products query={query || ""} />
        </>
    );
};

export default HomePage;
