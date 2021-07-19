import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import "../styles/form.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/register", {
        username: username,
        email: email,
        password: password,
        password2: password2,
      })
      .then((res) => {
        console.log(res, "ldskja");
        history.push("/login");
      })
      .catch((err) => {
        setError(err.response.data);
        console.log(err.response.data);
      });
  };

  return (
    <div className="formcontainer">
      <h1 className="title">Signup</h1>
      {error && <h3 className='formerror'>*{error}</h3>}
      <form onSubmit={handleSumbit}>
        <p className="inputcard">Username</p>
        <input
          className="input"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="inputcard">Email</p>
        <input
          className="input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="inputcard">Password</p>
        <input
          className="input"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="inputcard">Confirm Password</p>
        <input
          className="input"
          type="password"
          required
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button className="button" type="submit">
          Create an account
        </button>
        <Link className="small" to="/login">
          <small>already have an account? login</small>
        </Link>
      </form>
    </div>
  );
};
