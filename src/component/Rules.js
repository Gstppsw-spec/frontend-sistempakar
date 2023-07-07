import React from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";
import { useEffect, useState } from "react";

const Rules = () => {
  const [aturan, setaturan] = useState("");

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);
    fetch("http://localhost:8000/api/aturan", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setaturan(result[0]);
        console.log(result[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteData = (id) => {
    const access_token = localStorage.getItem("access_token");
    fetch(`http://localhost:8000/api/aturan/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then(() => {
      window.location.reload();
    });
  };
  return (
    <div>
      <NavbarLogin />
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN DATA RULES</h1>
      </div>
      <div className="tabel-riwayat">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Gejala</th>

              <th>Penyakit</th>
              <th>Nilai Kepastian</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(aturan) &&
              aturan
                .sort((a, b) => a.id - b.id)
                .map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.namaGejala}</td>

                    <td>{item.namaPenyakit}</td>
                    <td>{item.nilaiKepastian}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteData(item.id);
                        }}
                      >
                        hapus
                      </button>
                      <Link to={`/rules/editRules/${item.id}`}>
                        <button>edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        <Link to="/rules/tambahRules">
          <button>TAMBAH DATA RULES</button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
