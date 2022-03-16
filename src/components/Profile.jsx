import React from "react";
import FormInput from "./FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCurrentUser } from "../services/authService";
import { updateUser /*getCurrentUser */ } from "../services/userService";
import { toast } from "react-toastify";
import "../assets/css/form.css";
import "../assets/css/profile.css";

const Profile = () => {
    const user = getCurrentUser();

    const formik = useFormik({
        initialValues: {
            name: user.name,
            email: user.email,
            phone: user.phone || "",
            address: user.address || "",
        },
        onSubmit: async (values) => {
            await updateUser(values);
            toast.success(
                "Profile updated successfully. Changes will be visible on next login"
            );
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "must be atleast 3 characters long")
                .required(),
            email: Yup.string()
                .email("Invalid Email")
                .min(9)
                .max(255)
                .required("Required"),
            phone: Yup.string().min(10).max(10),
            address: Yup.string().max(255),
        }),
    });
    return (
        <>
            <div className="form-container">
                <h1 className="form__heading">Profile</h1>
                <form onSubmit={formik.handleSubmit}>
                    <FormInput
                        label="Name"
                        id="name"
                        type="text"
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
                        disabled={true}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="form__error">{formik.errors.email}</p>
                    ) : null}
                    <FormInput
                        label="Phone"
                        id="phone"
                        type="tel"
                        placeholder="Phone..."
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="phone"
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <p className="form__error">{formik.errors.phone}</p>
                    ) : null}
                    <label htmlFor="address">Address</label>
                    <textarea
                        name="address"
                        id="address"
                        cols="30"
                        rows="3"
                        placeholder="Address..."
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    ></textarea>

                    <button
                        disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        className="btn btn--primary profile__btn"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default Profile;
