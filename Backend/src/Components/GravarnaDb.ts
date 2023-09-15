
const fs = require('fs');
const path = require('path');
//Auto
//Mach
//Banido
async function Gravarnojson(Pergunta: string, Respota: string, tipo: string) {

    const url = await path.join(__dirname, '../db/RespostaTexto.json');

    fs.readFile(url, 'utf8', (err:any, data:any) => {
        if (err) {
          console.error('Erro ao ler o arquivo JSON:', err);
          return;
        } try {
            let jsonData = JSON.parse(data);
        
            if (tipo === "auto") {

                jsonData.PerguntaAuto.push(Pergunta)
                jsonData.RespostaAuto.push(Respota)
                console.log("Updatede auto")

            } else if (tipo === 'mach') {

                jsonData.PerguntaContem.push(Pergunta)
                jsonData.RespostaContem.push(Respota)
                console.log("Updatede mach")

            }
            else if (tipo ==='banido') {

                jsonData.ProdutosBanidos.push(Pergunta)
                console.log("Updatede banido")

            }
            else {
                console.log('erro')
            }

            let dd = JSON.stringify(jsonData)
            fs.writeFile(url,dd,(err:any) =>{
                if(err)
                console.log(err);
                else{
                    console.log("Data updated")
                }
            })
          } catch (err) {
            console.error('Erro ao analisar o JSON:', err);
          }
        });   
}

module.exports = Gravarnojson;
