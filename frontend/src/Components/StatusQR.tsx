
//import { useEffect, useState } from "react";
import QRCode from 'react-qr-code';
import { socket } from '../socket';
import { useEffect } from "react";
import { useState } from "react";

function StatusQr() {

  const [Repo, setRepo] = useState('');

  useEffect(() => {

    socket.on('qr', (arg: string) => {
      setRepo(arg)
    });

  })
  function elses() {
    if (Repo === '') {
      return <h2 className="red">Off</h2>
    } else {
      return <QRCode
        value={`${Repo}`}
      />
    }
  }

  return (
    <div>
      <div>
        <div className="div-center">
          {elses()}
        </div>
      </div>
    </div>
  );
}

export default StatusQr;
