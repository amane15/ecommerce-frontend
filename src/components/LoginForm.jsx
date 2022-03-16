import React from "react";
import "../assets/css/form.css";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import auth from "../services/authService";
import { toast } from "react-toastify";

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (value) => {
            const { email, password } = value;
            try {
                await auth.login(email, password);
                window.location = "/";
            } catch (error) {
                if (error.response && error.response.status === 400)
                    toast.error(error.response.data);
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required("Required"),
            password: Yup.string().min(8).required("Required"),
        }),
    });

    return (
        <>
            <div className="form-container">
                <h1 className="form__heading">Login</h1>
                <form onSubmit={formik.handleSubmit}>
                    <FormInput
                        label="email"
                        id="email"
                        type="email"
                        placeholder="Email..."
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="form__error">{formik.errors.email}</p>
                    ) : null}
                    <FormInput
                        label="Password"
                        id="password"
                        type="password"
                        placeholder="Password..."
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="password"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className="form__error">{formik.errors.password}</p>
                    ) : null}
                    <button
                        disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        className="btn btn--primary"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
