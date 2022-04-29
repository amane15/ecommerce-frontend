import React, { useState } from "react";
import "../assets/css/slider.css";
import image1 from "../assets/images/ecom3.webp";
import image2 from "../assets/images/ecom2.webp";
import image3 from "../assets/images/ecom1.webp";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const images = [image1, image2, image3];

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextImg = () => {
        if (slideIndex !== images.length - 1) setSlideIndex(slideIndex + 1);
        else if (slideIndex === images.length - 1) setSlideIndex(0);
    };

    const prevImg = () => {
        if (slideIndex !== 0) setSlideIndex(slideIndex - 1);
        else if (slideIndex === 0) setSlideIndex(images.length - 1);
    };

    return (
        <div className="slider">
            <div className="arrow left">
                <MdArrowLeft size={25} onClick={() => prevImg()} />
            </div>
            <div className="slider__image">
                <img src={images[slideIndex]} alt="" />
            </div>
            <div className="arrow right">
                <MdArrowRight size={25} onClick={() => nextImg()} />
            </div>
        </div>
    );
};

export default Slider;
