import React, { useEffect, useState } from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";

const Penyakit = () => {
  const [penyakit, setPenyakit] = useState("");

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
        setPenyakit(result[0]);
        console.log(result[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteData = ((id) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/penyakit/${id}` ,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then(() => {
      window.location.reload();
    })
  })
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN DATA PENYAKIT DEPRESI</h1>
      </div>
      <div className="tabel-riwayat">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Kode</th>
              <th>Nama Penyakit</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(penyakit) && penyakit
            .sort((a, b) => a.id - b.id)
            .map((item, index) => (
              <tr key={item.id}>
                <td>{index +1}</td>
                <td>{item.code}</td>
                <td>{item.namaPenyakit}</td>
                <td>
                  <button onClick={() => {deleteData(item.id)}}>hapus</button>
                  <Link to={`/penyakit/editPenyakit/${item.id}`}>
                    <button>edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/penyakit/tambahPenyakit">
          <button>TAMBAH DATA PENYAKIT</button>
        </Link>
      </div>
    </div>
  );
};

export default Penyakit;
