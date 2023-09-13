const { Buttons } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');
//let JsonTexto = require('../db/RespostaTexto.json');
const TimeDelay = 8000;//Delay de 8s
const delay = () => {
    return new Promise(resolve => setTimeout(resolve, TimeDelay));
}


async function AutoResposta(message: any, client: any) {
////
    const url =  path.join(__dirname, '../db/RespostaTexto.json');
    const JsonTexto = fs.readFileSync(url, 'utf-8');
    const ddb = JSON.parse(JsonTexto)
    
    
    const PerguntaAuto = ddb.PerguntaAuto
    const RespostaAuto = ddb.RespostaAuto
    const PerguntaConten = ddb.PerguntaContem
    const RespostaConten = ddb.RespostaContem
    const PerguntaBanido = ddb.ProdutosBanidos
    const RespostaBanido = ddb.RespostaBanido
    
///
    let RespostaEnviada: boolean = false;
    let Mensagem = message.body.toLowerCase()

    //message.body.toLowerCase()
    function RespostaA(Mensagem: string, message: any) {
        for (let i = 0; i < PerguntaAuto.length; i++) {
            const element = PerguntaAuto[i];
            if (element === Mensagem) {
                message.reply(RespostaAuto[i])
                RespostaEnviada = true;
            }
        }
    }
    function RespostaB(Mensagem: string, message: any) {
        for (let index = 0; index < PerguntaBanido.length; index++) {
            const element = PerguntaBanido[index];
            if (Mensagem.match(element)) {
                message.reply(RespostaBanido[1])
                RespostaEnviada = true;
            }
        }
    }
    function RespostaM(Mensagem: string, message: any) {
        for (let i = 0; i < PerguntaConten.length; i++) {
            const element2 = PerguntaConten[i];
            if (Mensagem.match(element2)) {
                message.reply(RespostaConten[i])
                RespostaEnviada = true;
            }
        }
    }

    if (RespostaEnviada == false) {
        RespostaA(Mensagem, message);
    }

    if (RespostaEnviada == false) {
        RespostaB(Mensagem, message)
    }
    if (RespostaEnviada == false) {
        RespostaM(Mensagem, message)
    }
}

module.exports = AutoResposta;