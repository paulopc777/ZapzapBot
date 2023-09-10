
import { useEffect, useState } from "react";
import QRCode from 'react-qr-code';
import Onff from './on';




function StatusQr() {

  const [Repo, setRepo] = useState('Deslogado')

  function fetApiData() {
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => setRepo(data.qr))
      .catch(() => setRepo("Back off"))

    setTimeout(check, 10000)
  }

  async function check() {

    if (Repo === "Deslogado") {
      fetApiData()
      console.log('Deslogado')

    } else if (Repo === 'Carregando...') {

      fetApiData()
      console.log(' Carregando ')

    } else {

    }
  }

  useEffect(() => {
    check()
  })

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
        {Onff(Repo)}
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
