import React from "react";
import "../style/beranda.css";
import { Link } from "react-router-dom";

export default function NavbarBeranda() {
  return (
    <div className="navigasi_bar">
      <nav>
        <div className="nav-bar">
          <Link className="link-logo" to="/">
            <div className="nav-logo">
              <img
                alt="logo"
                src={require("../image/logo.png")}
                style={{ width: "40px", height: "40px" }}
              />
              <span>depression.</span>
            </div>
          </Link>

          <div className="nav-login">
            <Link to="/login">
              <button className=" font-mono">LOGIN</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
