import React from "react";

const FormInput = ({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
    name,
    onBlur,
    disabled,
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value || ""}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                disabled={disabled || false}
            />
        </>
    );
};

export default FormInput;
