
import '../App.css';

function Onff(Repo: any) {

    let color1 = 'red w-26 Text';
    let text = '';

    if (Repo === 'Deslogado'){
         color1 = 'red w-26 Text';
         text = "Deslogado";
    }else if(Repo === 'Back off'){
        color1 = 'red w-26 Text';
        text = "Back off";
    }else if(Repo.length > 13 ){
        color1 = 'gren w-26 Text';
        text = "Leia o QR";
    }else if(Repo === 'Logado'){
        color1 = 'gren w-26 Text';
        text = "On";
    }
        return (
            <div >
                <div className='div-center ' >
                    <h2 className={color1}>
                        {text}
                    </h2>
                </div>
            </div>
        )

}
export default Onff;