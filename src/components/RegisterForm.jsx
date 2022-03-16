import React from "react";
import "../assets/css/form.css";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import { register } from "../services/userService";
import { toast } from "react-toastify";
import auth from "../services/authService";

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            try {
                const response = await register(values);
                auth.loginWithJwt(response.headers["x-auth-token"]);
                window.location = "/";
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data);
                }
            }
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "must be atleast 3 characters long")
                .required(),
            email: Yup.string()
                .email("Invalid Email")
                .min(9)
                .max(20)
                .required("Required"),
            password: Yup.string().min(8).required("Required"),
        }),
    });

    return (
        <>
            <div className="form-container">
                <h1 className="form__heading">Register</h1>
                <form onSubmit={formik.handleSubmit}>
                    <FormInput
                        label="Name"
                        id="name"
                        type="name"
                        placeholder="Name..."
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="name"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p className="form__error">{formik.errors.name}</p>
                    ) : null}
                    <FormInput
                        label="Email"
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
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default RegisterForm;
