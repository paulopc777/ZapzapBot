//Importa ao Clinete do Whatzap
//Importa o Gerador de Qr apartir de um codigo no terminal 
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
//
const app = express();
//
const AutoResposta = require('./Components/AutoRes.js');
const Gravarnojson = require('./Components/GravarnaDb.js')
//
const porta = 3001;
//
let qrcodesave = 'Carregando...';
let status = 'Off';
//
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    //Gera o Qr code para Ser lido no celular
    qrcode.generate(qr, { small: true }, (qr) => {
        console.log(qr)
    });
    qrcodesave = qr;
});

client.on('ready', () => {
    status = 'On';
    qrcodesave = 'Logado';
    console.log('Client is ready!');
});
//Respostar altomaticas
client.on('message', message => {
    AutoResposta(message, client)
    console.log(message.from.substring(0, 13));
    console.log(message.body)
});

client.initialize();

//
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "qr": qrcodesave })
})
app.get('/status', (req, res) => {
    res.json({ status: status })
})
app.get('/respostas', (req, res) => {
    res.header("Content-Type", 'application/json');
    const Base = fs.readFileSync('./db/RespostaTexto.json', 'utf-8')
    res.send(Base);
})
app.post('/off', async (req, res) => {
    res.json('desconected')
    status = 'Off';
    await client.logout()
    await client.initialize()
})
app.post('/send', async (req, res) => {
    let { message, number } = req.body;
    client.sendMessage()
    res.send('ok')
})
app.post('/recauto', async (req, res) => {

    const { pergunta, resposta, tipo } = req.body;
    
    await Gravarnojson(pergunta, resposta, tipo)
})
app.listen(porta, () => {
    console.log(`Server rodando na ${porta}`);
});
