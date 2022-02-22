import React from "react";
import "../assets/css/form.css";
import FormInput from "./FormInput";

const RegisterForm = () => {
    return (
        <>
            <div className="form-container">
                <h1 className="form__heading">Register</h1>
                <form>
                    <FormInput
                        label="Username"
                        id="username"
                        type="text"
                        placeholder="Username..."
                    />
                    <FormInput
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="Email..."
                    />
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Password..."
                    />
                    <button className="btn btn--primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;
