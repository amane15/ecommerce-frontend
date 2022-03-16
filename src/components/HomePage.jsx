import React, { useContext } from "react";
import Products from "./Products";
import Slider from "./Slider";
import Categories from "./Categories";
import { QueryContext } from "../contexts/QueryContext";

const HomePage = () => {
    const { query } = useContext(QueryContext);
    // console.log(query);
    return (
        <>
            <Slider />
            <Categories />
            <Products query={query || ""} />
        </>
    );
};

export default HomePage;
