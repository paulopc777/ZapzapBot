import React, { useState } from 'react'
import axios from 'axios';

function Resposta() {

    const [Pergunta, setPergunta] = useState('');
    const [Resposta, setResposta] = useState('');
    const [Tipo, setTipo] = useState('');


    async function Enviar() {

        console.log(JSON.stringify(Resposta))

        await axios.post('http://localhost:3001/recauto', {
            pergunta: Pergunta.toLowerCase(),
            resposta: Resposta.toLowerCase(),
            tipo: Tipo.toLowerCase()
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.error(error);
              });
    }

    return (
        <div className='div-center'>
            <form className='w-26'>
                <div>
                    <input type="text" placeholder='Pergunta' name='pergunta' onChange={e => setPergunta(e.target.value)} required />
                    <input type="text" placeholder='Resposta' name='resposta' onChange={e => setResposta(e.target.value)} required />
                </div>
                <div>
                    <ul>
                        <li>
                            <input type="radio" id='auto' value="auto" name='tipo' onChange={e => setTipo(e.target.value)} />
                            <label htmlFor='auto'>Resposta automatica</label>
                        </li>
                        <li>
                            <input type="radio" value="mach" id='mach' name='tipo' onChange={e => setTipo(e.target.value)} />
                            <label htmlFor="mach">Resposta caso contenha</label>
                        </li>
                        <li>
                            <input type="radio" value="banido" id='banido' name='tipo' onChange={e => setTipo(e.target.value)} />
                            <label htmlFor="banido">Pordutos Banidos</label>
                        </li>
                    </ul>
                </div>
                <button onClick={Enviar} >Enviar</button>
            </form>
        </div>
    )
}

export default Resposta