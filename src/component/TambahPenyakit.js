import React, { useEffect, useState } from "react";
import "../style/penyakit.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahPenyakit = () => {
  const [code, setCode] = useState("");
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const navigate = useNavigate();

  const createPenyakit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(code)

    formData.append("code", code);
    formData.append("namaPenyakit", namaPenyakit);
    const accessToken = localStorage.getItem("access_token");

    await axios
      .post(`http://127.0.0.1:8000/api/penyakit`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        navigate("/login/penyakit");
      })
      .catch(({ response }) => {
        console.log("error");
      });
  };
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN TAMBAH DATA PENYAKIT</h1>
      </div>
      <div className="tabel-riwayat">
        <form className="formPenyakit" onSubmit={createPenyakit}>
          <div className="poin-penyakit">
            <div className="nama">
              <label>Nama Penyakit</label>
              <input
                type="text"
                placeholder="nama penyakit"
                className="namaPenyakit"
                value={namaPenyakit}
                onChange={(event) => {
                  setNamaPenyakit(event.target.value);
                }}
                required
              />
            </div>
            <div className="nama">
              <label>Kode Penyakit</label>
              <input
                type="text"
                placeholder="kode penyakit"
                className="kodePenyakit"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="poin-button">
            <button type="submit">Tambah</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahPenyakit;
