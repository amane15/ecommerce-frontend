import React from "react";
import "../assets/css/form.css";
import "../assets/css/profile.css";
import FormInput from "./FormInput";

const Profile = () => {
    return (
        <>
            <div className="form-container">
                <h1 className="form__heading">Profile</h1>
                <form action="">
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
                        label="Phone"
                        id="phone"
                        type="tel"
                        placeholder="Phone..."
                    />
                    <label htmlFor="address">Address</label>
                    <textarea
                        name=""
                        id="address"
                        cols="30"
                        rows="3"
                        placeholder="Address..."
                    ></textarea>
                    <button className="btn btn--danger profile__btn">
                        Edit
                    </button>
                    <button className="btn btn--primary profile__btn">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};

export default Profile;
