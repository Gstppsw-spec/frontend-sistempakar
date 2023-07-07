import React, { useEffect, useState } from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPenyakit = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [namaPenyakit, setNamaPenyakit] = useState("");
  const [penyakit, setPenyakit] = useState("");
  const id = useParams();
  console.log(id.id);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/penyakit/${id.id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // console.log(res);
        setPenyakit(data[0]);
        console.log(data[0].namaPenyakit);
        setCode(data[0].code);
        setNamaPenyakit(data[0].namaPenyakit);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const editPenyakit = async (e) => {
    e.preventDefault();

    const penobj = { code, namaPenyakit };
    console.log(penobj);
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/penyakit/${id.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(penobj),
    })
      .then(() => {
        navigate("/login/penyakit");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN TAMBAH DATA PENYAKIT</h1>
      </div>
      <div className="tabel-riwayat">
        <form className="formPenyakit" onSubmit={editPenyakit}>
          <div className="poin-penyakit">
            <div className="nama">
              <label>Nama Penyakit</label>
              <input
                type="text"
                placeholder="nama penyakit"
                className="namaPenyakit"
                value={namaPenyakit}
                onChange={(event) => setNamaPenyakit(event.target.value)}
              />
            </div>
            <div className="nama">
              <label>Kode Penyakit</label>
              <input
                type="text"
                placeholder="kode penyakit"
                className="kodePenyakit"
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
            </div>
          </div>
          <div className="poin-button">
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPenyakit;
