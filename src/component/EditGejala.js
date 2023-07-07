import React from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditGejala = () => {
  const navigate = useNavigate();
  const [kodeGejala, setKodeGejala] = useState("");
  const [namaGejala, setNamaGejala] = useState("");
  const [kodeKategori, setKodeKategori]= useState("")
  const [gejala, setGejala] = useState("");
  const id = useParams();
  console.log(id.id);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/gejala/${id.id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(res);
        setGejala(data[0]);
        // console.log(data[0].namaPenyakit);
        setKodeGejala(data[0].kodeGejala);
        setNamaGejala(data[0].namaGejala);
        setKodeKategori(data[0].kodeKategori);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const editGejala = async (e) => {
    e.preventDefault();

    const penobj = { kodeGejala, namaGejala, kodeKategori };
    console.log(penobj);
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/gejala/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(penobj),
    })
      .then(() => {
        navigate("/login/gejala");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div >
      <NavbarLogin/>
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN EDIT GEJALA</h1>
      </div>
      <div className="tabel-riwayat">
        <form className="formPenyakit" onSubmit={editGejala}>
          <div className="poin-penyakit">
            <div className="nama">
              <label>Nama Gejala</label>
              <input
                type="text"
                placeholder="nama penyakit"
                className="namaPenyakit"
                value={namaGejala}
                onChange={(event) => {
                  setNamaGejala(event.target.value)
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
                  setKodeGejala(event.target.value)
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
                  setKodeKategori(event.target.value)
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

export default EditGejala;