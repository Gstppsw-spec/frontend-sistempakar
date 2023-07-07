import "./App.css";
import HalamanDiagnosa from "./component/HalamanDiagnosa";
import HasilAnalisa from "./component/HasilAnalisa";
import Beranda from "./component/Beranda";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Riwayat from "./component/Riwayat";
import Penyakit from "./component/Penyakit";
import Rules from "./component/Rules";
import Gejala from "./component/Gejala";
import TambahPenyakit from "./component/TambahPenyakit";
import TambahGejala from "./component/TambahGejala";
import TambahRules from "./component/TambahRules";
import EditPenyakit from "./component/EditPenyakit";
import EditGejala from "./component/EditGejala";
import EditRules from "./component/EditRules";
import DetailRiwayat from "./component/DetailRiwayat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Beranda />} />
          <Route exact path="/diagnosa" element={<HalamanDiagnosa />} />
          <Route exact path="/hasil" element={<HasilAnalisa />} />
          <Route exact path="/login">
            <Route index element={<Login />} />
            <Route path="riwayat" element={<Riwayat />} />
            <Route path="penyakit" element={<Penyakit />} />
            <Route path="gejala" element={<Gejala />} />
            <Route path="rules" element={<Rules />} />
          </Route>
          <Route exact path="/penyakit">
            <Route index element={<Penyakit />} />
            <Route path="tambahPenyakit" element={<TambahPenyakit/>}/>
          </Route>
          <Route exact path="/gejala/tambahGejala" element={<TambahGejala/>}/>
          <Route exact path="/rules/tambahRules" element={<TambahRules/>}/>
          <Route exact path="/penyakit/editPenyakit/:id" element={<EditPenyakit/>}/>
          <Route exact path="/gejala/editGejala/:id" element={<EditGejala/>}/>
          <Route exact path="/rules/editRules/:id" element={<EditRules/>}/>
          <Route exact path="/riwayat/detail" element={<DetailRiwayat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
