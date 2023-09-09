
import { useState } from "react";
import QRCode from 'react-qr-code';
import Onff from './on';




function StatusQr() {
  const [Repo, setRepo] = useState('')

  function fetApiData() {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => setRepo(data.qr))
      .catch(() => setRepo("Back off"))
  }

 // setInterval(fetApiData, 2000);

  function elses() {
    if (Repo === 'Logado') {

      return <h2 className="gren">Voce estalogado</h2>

    } else if (Repo === 'Carregando...') {

      return <h2 className="gren">Caregando...</h2>

    } else {

      return <QRCode
        value={`${Repo}`}
      />
    }
  }

  return (
    <div>
      <div className="mb-1">
        {Onff()}
      </div>
      <div>
        <div className="div-center">
          {elses()}
        </div>
      </div>
    </div>
  );
}

export default StatusQr;
