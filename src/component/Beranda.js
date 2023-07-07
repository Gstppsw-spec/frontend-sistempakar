import React from "react";
import "../style/beranda.css";
import NavbarBeranda from "./NavbarBeranda";
import { Link } from "react-router-dom";

const Beranda = () => {
  return (
    <div className="diagnosa-container">
      <NavbarBeranda />
      <div className="body-cont">
        <h1>SISTEM PAKAR DIAGNOSA DEPRESI MAHASISWA AKHR</h1>
        <span>
          Segera lakukan diagnosa untuk mengetahui tingkat depresi dan solusi
          penanganannya. Silahkan diagnosa depresi dengan klik tombol dibawah
          ini.
        </span>
        <Link to="/diagnosa">
          <button>DIAGNOSA?</button>
        </Link>
      </div>
      <div className="content-dep">
        <div className="con-judul">
          <h2>Depresi Mahasiswa Akhir</h2>
          <span>
            Beberapa hal yang perlu kamu ketahui tentang depresi pada mahasiswa
            akhir
          </span>
        </div>
        <div className="content-mah">
          <div className="con">
            <img
              alt="content"
              src={require("../image/logo.png")}
              width="200"
              height="200"
            />
            <span>Apa itu Depresi?</span>
          </div>
          <div className="con">
            <img
              alt="content"
              src={require("../image/logo.png")}
              width="200"
              height="200"
            />
            <span>Apa itu Depresi?</span>
          </div>
          <div className="con">
            <img
              alt="content"
              src={require("../image/logo.png")}
              width="200"
              height="200"
            />
            <span>Apa itu Depresi?</span>
          </div>
          <div className="con">
            <img
              alt="content"
              src={require("../image/logo.png")}
              width="200"
              height="200"
            />
            <span>Apa itu Depresi?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
