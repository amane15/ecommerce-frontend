import React from "react";
import "../assets/css/form.css";
import FormInput from "./FormInput";

const LoginForm = () => {
    return (
        <>
            <div className="form-container">
                <h1 className="form__heading">Login</h1>
                <form>
                    <FormInput
                        label="Username"
                        id="username"
                        type="text"
                        placeholder="Username..."
                    />
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Password..."
                    />
                    <button className="btn btn--primary">Login</button>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
