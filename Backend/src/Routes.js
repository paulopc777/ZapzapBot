const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { createServer } = require('node:http');

let status = 'Off';

const app = express();
// Express Conf
app.use(cors());
app.use(express.json());


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
    client.sendMessage(number, message);
    res.send('ok')
})
app.post('/recauto', async (req, res) => {
    const { pergunta, resposta, tipo } = req.body;
    await Gravarnojson(pergunta, resposta, tipo)
})

const serverHtttp = createServer(app);

module.exports = serverHtttp ;
module.exports = app;
