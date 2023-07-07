import React from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TambahGejala = () => {
  const [kodeGejala, setKodeGejala] = useState("");
  const [namaGejala, setNamaGejala] = useState("");
  const [kodeKategori, setKodeKategori] = useState("")
  const navigate = useNavigate();

  const createGejala = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("kodeGejala", kodeGejala);
    formData.append("namaGejala", namaGejala);
    formData.append("kodeKategori", kodeKategori)
    const accessToken = localStorage.getItem("access_token");

    await axios
      .post(`http://127.0.0.1:8000/api/gejala`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        navigate("/login/gejala");
      })
      .catch(({ response }) => {
        console.log("error");
      });
  };
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN TAMBAH GEJALA</h1>
      </div>
      <div className="tabel-riwayat">
        <form className="formPenyakit" onSubmit={createGejala}>
          <div className="poin-penyakit">
            <div className="nama">
              <label>Nama Gejala</label>
              <input
                type="text"
                placeholder="nama penyakit"
                className="namaPenyakit"
                value={namaGejala}
                onChange={(event) => {
                  setNamaGejala(event.target.value);
                }}
              />
            </div>
            <div className="nama">
              <label>Kode Gejala</label>
              <input
                type="text"
                placeholder="kode penyakit"
                className="kodePenyakit"
                value={kodeGejala}
                onChange={(event) => {
                  setKodeGejala(event.target.value);
                }}
              />
            </div>
            <div className="nama">
              <label>Kategori</label>
              <input
                type="text"
                placeholder="kode penyakit"
                className="kodePenyakit"
                value={kodeKategori}
                onChange={(event) => {
                  setKodeKategori(event.target.value);
                }}
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

export default TambahGejala;
