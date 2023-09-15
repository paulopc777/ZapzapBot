
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const serverHtttp = require('./Routes.js')
const socketServer = require('./socket.js')
const AutoResposta = require('./Components/AutoRes.js');
const io = require('./socket.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    //Gera o Qr code para Ser lido no celular
    io.emit('qr',qr);
});
client.on('ready', () => {
    qrcodesave = 'Logado';
    console.log('Client is ready!');
});
client.on('message', message => {

    AutoResposta(message, client)
    console.log(message.from.substring(0, 13));
    console.log(message.body)

});
client.initialize();


///Server Express
serverHtttp.listen(3001, () => {
    console.log(`Server rodando na ${3001}`);
});

socketServer.listen(8080, () => {
    console.log('Socket rodando 8080')
})


