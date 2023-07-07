import React from "react";
import "../style/beranda.css"
import { Link } from "react-router-dom";
export default function NavbarPakar() {
  return (
    <div className="navigasi_bar">
      <nav>
        <div className="nav-bar">
          <Link className="link-logo" to="/">
          <div className="nav-logo">
            <img
              alt="logo"
              src={require("../image/logo.png")}
              style={{ width: "35px", height: "35px" }}
            />
            <span>depression.</span>
          </div>
          </Link>
          

          {/* <div className="nav-login">
          <span className=" font-mono">Dampak</span>
          <span className=" font-mono">Login</span>
        </div> */}
        </div>
      </nav>
    </div>
  );
}
