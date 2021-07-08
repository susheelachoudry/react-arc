import React, { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const loginUser = (credentials) => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => res.json())
      .then((result) => {
        setToken(result);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      username,
      password,
    });
  };

  console.log(setUserName, 'setUserName')

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
