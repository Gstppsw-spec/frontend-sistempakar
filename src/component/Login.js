import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [access_token, setAccess_token] = useState(null);

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post("http://127.0.0.1:8000/api/login", formData)
      .then((response) => {
        setAccess_token(response.data.access_token);
        navigate("/login/penyakit");
        console.log("berhasil login");
        localStorage.setItem("access_token", response.data.access_token);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div className="login">
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN LOGIN PAKAR</h1>
      </div>
      <div className="body-form">
        <form className="form-login" onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="email"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
