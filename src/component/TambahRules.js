import React, { useState } from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const TambahRules = () => {
  const [kodeKategori, setKodeKategori] = useState("");
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const [namaGejala, setNamaGejala] = useState("");
  const [nilaiKepastian, setNilaiKepastian] = useState("");
  const navigate = useNavigate();
  const [gejalaOption, setGejalaOption] = useState([]);
  const [penyakitOption, setPenyakitOption] = useState([]);
  const [selectedOptionG, setSelectedOptionG] = useState("");
  const [selectedOptionP, setSelectedOptionP] = useState("");

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);
    fetch("http://localhost:8000/api/penyakit", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // const penyakit = result[0].map((option) => option.namaPenyakit);
        setPenyakitOption(result[0].map((option) => option));
        console.log(result[0].map((option) => option.namaPenyakit));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);
    fetch("http://localhost:8000/api/gejala", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // const gejala = result[0].map((option) => option.namaGejala);
        setGejalaOption(result[0].map((option) => option));
        console.log(result[0].map((option) => option));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createAturan = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // console.log(code)
    console.log(selectedOptionG)

    formData.append("namaPenyakit", selectedOptionP);
    formData.append("namaGejala", selectedOptionG);
    formData.append("nilaiKepastian", nilaiKepastian);
    const accessToken = localStorage.getItem("access_token");

    await axios
      .post(`http://127.0.0.1:8000/api/aturan`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        navigate("/login/rules");
      })
      .catch(({ response }) => {
        console.log("error");
      });
  };
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN TAMBAH RULES</h1>
      </div>
      <div className="tabel-riwayat">
        <form className="formPenyakit" onSubmit={createAturan}>
          <div className="poin-penyakit">
            <div className="nama">
              <label>Gejala</label>
              <select
                name="kategori"
                value={selectedOptionG}
                onChange={(event) => {
                  setSelectedOptionG(event.target.value);
                }}
              >
                <option value="">Gejala</option>
                {gejalaOption.map((option) => (
                  <option value={option.namaGejala}>{option.namaGejala}</option>
                ))}
              </select>
            </div>
            <div className="nama">
              <label>Penyakit</label>
              <select name="penyakit" value={selectedOptionP} onChange={(event) => {
                setSelectedOptionP(event.target.value)
              }}>
                <option value="">Penyakit</option>
                {penyakitOption.map((option) => (
                  <option value={option.namaPenyakit}>{option.namaPenyakit}</option>
                ))}
              </select>
            </div>

            <div className="nama">
              <label>Nilai Keyakinan</label>
              <input
                type="text"
                placeholder="Nilai keyakinan (0 hingga 1)"
                className="kodePenyakit"
                value={nilaiKepastian}
                onChange={(event) => {
                  setNilaiKepastian(event.target.value)
                }}
              />
            </div>
          </div>
          <div className="poin-button">
            <button>Tambah</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahRules;
