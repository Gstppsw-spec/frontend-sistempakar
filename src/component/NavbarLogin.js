import React from "react";
import { Link } from "react-router-dom";

export const NavbarLogin = () => {
  const handleOut = () =>{
    localStorage.removeItem("access_token")
  }
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

          <div className="nav-login nav-log">
            <Link to="/login/penyakit" className="navi">
              <span className=" font-mono">PENYAKIT</span>
            </Link>
            <Link to="/login/gejala" className="navi">
              <span className=" font-mono">GEJALA</span>
            </Link>
            <Link to="/login/rules" className="navi">
              <span className=" font-mono">RULES</span>
            </Link>
            <Link to="/login/riwayat" className="navi">
              <span className=" font-mono">RIWAYAT</span>
            </Link>
          </div>

          <Link className="nav-login" to="/">
            <button className=" font-mono" onClick={handleOut}>LOGOUT</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavbarLogin;
