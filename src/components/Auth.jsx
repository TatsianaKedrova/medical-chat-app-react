import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signup from "../assets/signup.jpg";

const Auth = () => {
  const initialState = {
    fullName: "",
    userName: "",
    password: "",
    avatarUrl: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const switchMode = () => {
    setIsSignUp((prevIsSignedUp) => !prevIsSignedUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? "Sign up" : "Sign in"}</p>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type={"text"}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  value={form.fullName}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">User Name</label>
              <input
                name="userName"
                type={"text"}
                onChange={handleChange}
                required
                placeholder="User Name"
                value={form.userName}
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarUrl">Avatar URL</label>
                <input
                  name="avatarUrl"
                  type="text"
                  onChange={handleChange}
                  required
                  placeholder="Avatar URL"
                  value={form.avatarUrl}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                required
                placeholder="Password"
                value={form.password}
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  required
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button type="submit">{!isSignUp ? "Sign in" : "Sign up"} </button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account? "}
              <span onClick={switchMode}>
                {isSignUp ? " Sign in" : " Sign up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signup} alt="sign in image" />
      </div>
    </div>
  );
};

export default Auth;
