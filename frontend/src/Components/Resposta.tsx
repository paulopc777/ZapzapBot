import React, { useState } from 'react'
import { useForm } from "react-hook-form";




function Resposta() {
    //
    const [Data, setData] = useState({
        pergunta: '',
        resposta: '',
        tipo: ''
    })


    //
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    async function st(data: any) {
        await setData(data)
    }
    async function as(Data:any) {

        fetch("http://localhost:3001/recauto", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(Data)
        })


    }
    const onSubmit = async (data: any) => {

        await st(data)
        await as(data)
        console.log(Data)
    };


    return (
        <div className='div-center'>
            <form className='w-26'  method='post'  action='http://localhost:3001/recauto'>
                <div>
                    <input type="text" placeholder='Pergunta' name='pergunta'   />
                    <input type="text" placeholder='Resposta' name='resposta'  />
                </div>
                <div>
                    <ul>
                        <li>
                            <input type="radio" id='auto' value="auto"  name='tipo'/>
                            <label htmlFor='auto'>Resposta automatica</label>
                        </li>
                        <li>
                            <input type="radio" value="mach" id='mach'  name='tipo'/>
                            <label htmlFor="mach">Resposta caso contenha</label>
                        </li>
                        <li>
                            <input type="radio" value="banido" id='banido'  name='tipo' />
                            <label htmlFor="banido">Pordutos Banidos</label>
                        </li>
                    </ul>
                </div>
                <input type="submit" />
                <button type='submit'>enviar</button>
            </form>
        </div>
    )
}

export default Resposta