import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "../styles/form.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("AccessToken", res.data.accessToken);
        history.push("/mytask");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  };

  return (
    <div className="formcontainer">
      <h1 className="title">Login</h1>
      {error && <h3 className="formerror">*{error}</h3>}
      <form onSubmit={handleSubmit}>
        <p className="inputcard">Username</p>
        <input
          className="input"
          type="text"
          required
          value={username}
          onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        />
        <p className="inputcard">Password</p>
        <input
          className="input"
          type="password"
          required
          value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />
        <button className="button" type="submit">
          Login
        </button>
        <Link to="/register" className="small">
          <small>create an account? sign up</small>
        </Link>
      </form>
    </div>
  );
};
