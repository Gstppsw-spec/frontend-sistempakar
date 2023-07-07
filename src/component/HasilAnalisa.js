import React from "react";
import "../style/hasilanalisa.css"
import "../style/halamanDiagnosa.css";
import NavbarPakar from "./NavbarPakar";
import { Link } from "react-router-dom";

const HasilAnalisa = () => {
  return (
    <div className="diagnosa-container">
      <NavbarPakar />
      <div className="body-cont">
      <h1 style={{ color: "white" }}>HALAMAN HASIL DIAGNOSA</h1>
      </div>
      <main className="body-hasil">
        <h2>HASIL ANALISA</h2>
        <hr></hr>
        <div className="table-container">
          <h4>Hasil Diagnosa</h4>
          <table>
            <thead>
              <tr>
                <th>Kode</th>
                <th>Tingkat Depresi</th>
                <th>Tingkat Keyakinan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JP01</td>
                <td>Mild Depression</td>
                <td>80%</td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
        </div>
        <div className="table-container">
          <h4>Gejala Pengguna</h4>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Gejala dipilih</th>
                <th>Keyakinan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Apalah kamu merasa cepat lelah ?</td>
                <td>Sangat Yakin</td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
        </div>
        <div className="user-info">
            <h4>Identitas Pengguna</h4>
            <p>Nama             :   Gunawan Sitepu</p>
            <p>Umur             :   22</p>
            <p>Jenis Kelamin    :   Laki-laki</p>
            <p>Semester         :   9</p>
            <hr></hr>
        </div>
        <div className="user-info">
            <h4>Kesimpulan</h4>
            <span>Berdasarkan gejala yang terpilih anda didprediksi mengalami Depresi sedang dengan tingkat keyakinan sebesar 80%</span>
            <hr></hr>
        </div>
        <div className="user-info">
            <h4>Keterangan</h4>
            <span>Berdasarkan gejala yang terpilih anda didprediksi mengalami Depresi sedang dengan tingkat keyakinan sebesar 80%</span>
            <hr></hr>
        </div>
        <div className="user-info">
            <h4>Solusi</h4>
            <span>Berdasarkan gejala yang terpilih anda didprediksi mengalami Depresi sedang dengan tingkat keyakinan sebesar 80%</span>
            <hr></hr>
        </div>

        <div className="user-info">
          <Link to="/diagnosa"><button>ulang</button>
          </Link>
            
            <button>simpan pdf</button>
        </div>
      </main>
    </div>
  );
};

export default HasilAnalisa;
