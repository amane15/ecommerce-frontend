import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import "../assets/css/form.css";
import { addProduct } from "../services/productService";
import { toast } from "react-toastify";

const ProductAdd = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            category: "",
            price: "",
            img: "",
            numberInStock: 0,
        },
        onSubmit: async (values) => {
            const { data } = await addProduct(values);
            toast.success(data);
            formik.resetForm();
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(3, "must be atleast 3 characters long")
                .required(),
            description: Yup.string().required("Required"),
            category: Yup.string().min(3).max(255).required(),
            price: Yup.number().min(0).required(),
            img: Yup.string().required(),
            numberInStock: Yup.number().min(1).required(),
        }),
    });

    return (
        <div className="form-container">
            <h1 className="form__heading">Add Product</h1>
            <form onSubmit={formik.handleSubmit}>
                <FormInput
                    label="Title"
                    id="title"
                    type="text"
                    placeholder="Title..."
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="title"
                />
                {formik.touched.title && formik.errors.title ? (
                    <p className="form__error">{formik.errors.title}</p>
                ) : null}
                <FormInput
                    label="Description"
                    id="description"
                    type="text"
                    placeholder="Description..."
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="description"
                />
                {formik.touched.description && formik.errors.description ? (
                    <p className="form__error">{formik.errors.description}</p>
                ) : null}
                <FormInput
                    label="Category"
                    id="category"
                    type="text"
                    placeholder="Category..."
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="category"
                />
                {formik.touched.category && formik.errors.category ? (
                    <p className="form__error">{formik.errors.category}</p>
                ) : null}
                <FormInput
                    label="Price"
                    id="price"
                    type="number"
                    placeholder="Price..."
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="price"
                />
                {formik.touched.price && formik.errors.price ? (
                    <p className="form__error">{formik.errors.price}</p>
                ) : null}
                <FormInput
                    label="Image"
                    id="img"
                    type="text"
                    placeholder="Image..."
                    value={formik.values.img}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="img"
                />
                {formik.touched.img && formik.errors.img ? (
                    <p className="form__error">{formik.errors.img}</p>
                ) : null}
                <FormInput
                    label="Number In Stock"
                    id="numberInStock"
                    type="number"
                    placeholder="Number In Stock..."
                    value={formik.values.numberInStock}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="numberInStock"
                />
                {formik.touched.numberInStock && formik.errors.numberInStock ? (
                    <p className="form__error">{formik.errors.numberInStock}</p>
                ) : null}
                <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    className="btn btn--primary"
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default ProductAdd;
