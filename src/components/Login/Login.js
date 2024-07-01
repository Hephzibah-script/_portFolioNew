import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(setEmail);
  };

  return (
    <section className="loginSection">
      <form
        className="loginForm"
        id="loginForm"
        name="loginForm"
        onSubmit={handleSubmit}
      >
        <h2>Welcome back</h2>
        <label className="formLabel">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          className="loginInput"
        />

        <button type="submit" className="btn">
          Continue
        </button>
      </form>
    </section>
  );
};

export default Login;
