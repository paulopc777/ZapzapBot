//Importa ao Clinete do Whatzap
//Importa o Gerador de Qr apartir de um codigo no terminal 
const { Client, LocalAuth ,LegacySessionAuth} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

//
const AutoResposta = require('./Modules/AutoRes.js')


const client = new Client({
    authStrategy: new LocalAuth()
});
//Quando o queinte estiver online Mande
client.on('qr', qr => {
    //Gera o Qr code para Ser lido no celular 
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('Client is ready!');
});
//Respostar altomaticas
client.on('message',message =>{
    AutoResposta(message,client)
});

client.initialize();

module.exports = client;