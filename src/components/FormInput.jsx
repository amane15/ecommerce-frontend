import React from "react";

const FormInput = ({ id, label, type, placeholder }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} />
        </>
    );
};

export default FormInput;
