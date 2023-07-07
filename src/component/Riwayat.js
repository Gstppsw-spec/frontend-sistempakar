import React from "react";
import "../style/riwayat.css";
import { Link } from "react-router-dom";
import NavbarLogin from "./NavbarLogin";

const Riwayat = () => {
  return (
    <div >
      <NavbarLogin/>
      <div className="body-cont-riwayat">
        <h1 style={{ color: "white" }}>HALAMAN RIWAYAT DIAGNOSA</h1>
      </div>
      <div className="tabel-riwayat">
        <table>
          <thead>
            <tr>
                <th>No</th>
              <th>Nama</th>
              <th>Tingkat Depresi</th>
              <th>Tingkat Keyakinan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>Gunawan Sitepu</td>
                <td>Depresi Ringan</td>
                <td>20%</td>
                <td>
                  <Link to="/riwayat/detail">
                  <button>detail</button>
                  </Link>
                  </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Riwayat;
