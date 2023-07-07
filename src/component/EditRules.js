import React from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditRules = () => {
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const [namaGejala, setNamaGejala] = useState("");

  const [nilaiKepastian, setNilaiKepastian] = useState("");
  const navigate = useNavigate();
  const [gejalaOption, setGejalaOption] = useState([]);
  const [penyakitOption, setPenyakitOption] = useState([]);
  const [selectedOptionG, setSelectedOptionG] = useState("");
  const [selectedOptionP, setSelectedOptionP] = useState("");

  const id = useParams();
  console.log(id.id);

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

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/aturan/${id.id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(res);
        // setGejala(data[0]);
        console.log(data[0].namaPenyakit);
        setNamaGejala(data[0].namaGejala);
        setNamaPenyakit(data[0].namaPenyakit);
        setNilaiKepastian(data[0].nilaiKepastian)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const editAturan = async (e) => {
    e.preventDefault();

    const penobj = { namaGejala, namaPenyakit, nilaiKepastian };
    console.log(penobj);
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/aturan/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(penobj),
    })
      .then(() => {
        navigate("/login/rules");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN EDIT RULES</h1>
      </div>
      <div className="tabel-riwayat">
        <form className="formPenyakit" onSubmit={editAturan}>
          <div className="poin-penyakit">
            <div className="nama">
              <label>Gejala</label>
              <select
                name="gejala"
                value={namaGejala}
                onChange={(event) => {
                  setNamaGejala(event.target.value);
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
              <select
                name="penyakit"
                value={namaPenyakit}
                onChange={(event) => {
                  setNamaPenyakit(event.target.value);
                }}
              >
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
            <button>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRules;
