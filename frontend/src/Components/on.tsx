
import React, { useState } from 'react'
import '../App.css';

function Onff() {

    const [Repo, setRepo] = useState("off")

    function fetApiData() {
        fetch('http://localhost:3001/status')
            .then((response) => response.json())
            .then((data) => setRepo(data.status))
            .catch((Erro) => console.log('Back off'))
    }
    fetApiData()
    //setInterval(fetApiData, 2000);

    function color(){
        if(Repo === "On"){
            return 'gren w-26 Text'
        }else{
            return 'red w-26 Text'
        }
    }

    return (
        <div >
            <div className='div-center ' >
                <h2 className={color()}>
                    {Repo}
                </h2>
            </div>
        </div>
    )
    
}
export default Onff;