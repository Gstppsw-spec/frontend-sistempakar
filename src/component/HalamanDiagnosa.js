import React, { useState } from "react";
import "../style/halamanDiagnosa.css";
import NavbarPakar from "./NavbarPakar";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HalamanDiagnosa = () => {
  const [gejala, setGejala] = useState("");
  const [cf, setCf] = useState({});

  const handleCf = (event, gejalaId) => {
    const {name, value} = event.target;
    setCf((prevCfValues) => ({
      ...prevCfValues,
      [gejalaId]: value,
    }))
  }

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
        setGejala(result[0].map((option) => option));
        console.log(result[0].map((option) => option));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const createDiagnosa = async (e) => {
    e.preventDefault();
    console.log(cf);
  };
  return (
    <div className="diagnosa-container">
      <NavbarPakar />
      <div className="body-cont">
        <h1 style={{ color: "white" }}>HALAMAN DIAGNOSA</h1>
      </div>
      <main className="body">
        <form className="" onSubmit={createDiagnosa}>
          <div className="dataDiri">
            <div className="datadiriFirst">
              <div className="datadiriPertama">
                <label>Nama</label>
                <input type="text" placeholder="nama" />
              </div>
              <div className="datadiriPertama">
                <label>Semester</label>
                <input type="number" placeholder="semester" />
              </div>
            </div>
            <div className="datadiriFirst">
              <div className="datadiriPertama">
                <label>Jenis Kelamin</label>
                <select name="jenis kelamin" className="jeniskelamin">
                  <option value="">Jenis kelamin</option>
                  <option value="">Laki-laki</option>
                  <option value="">Perempuan</option>
                </select>
              </div>
              <div className="datadiriPertama">
                <label>Umur</label>
                <input type="number" placeholder="umur" />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="pilihGejala">
            <h3>PILIH GEJALA DENGAN TINGKAT KEYAKINAN ANDA</h3>
            <span>
              Gejala yang dialami sudah ada selama dua minggu atau lebih
            </span>
          </div>
          <div className="formGejala">
            {/* <div className="gejalaPasien"> */}
            <table>
              {Array.isArray(gejala) &&
                gejala.map((item, index) => (
                  <tr>
                    <td>
                      <label>{item.namaGejala}</label>
                    </td>
                    <td>
                      <select
                        name={`cf-${item.id}`}
                        value={cf[item.id] || ""}
                        onChange={(event) => handleCf(event, item.id)}
                      >
                        <option value="">Kepastian</option>
                        <option value="sangat-yakin">Sangat Yakin</option>
                        <option value="yakin">Yakin</option>
                        <option value="cukup-yakin">Cukup Yakin</option>
                        <option value="sedikit-yakin">Sedikit Yakin</option>
                        <option value="tidak-tahu">Tidak Tahu</option>
                        <option value="tahu">Tidak</option>
                      </select>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
          <Link to="/hasil">
            <button>Diagnosa</button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default HalamanDiagnosa;
