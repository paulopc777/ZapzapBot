
import { Route, Routes } from "react-router-dom";
import Resposta from "./Components/Resposta";
import Header from "./Components/Header";
import StatusQr from './Components/StatusQR'
import './App.css';
import Onff from "./Components/StatusQR";


function App() {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<StatusQr />} />
          <Route path="/respostas" element={<Resposta />} />
          <Route path="/status" element={<Onff />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
