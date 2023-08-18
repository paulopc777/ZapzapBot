const TimeDelay = 8000;//Delay de 8s
const delay = () => {
    return new Promise(resolve => setTimeout(resolve, TimeDelay));
}

const Texts: string = "desculpa, mas o produto que você estava procurando não está mais disponível em estoque. No entanto, temos uma variedade de outros produtos em nossa loja que podem atender às suas necessidades. Se você estiver interessado, posso fornecer mais informações sobre algumas alternativas excelentes. Você está aberto a explorar outras opções?"

let PerguntaAuto = ['ping', 'bom dia']
let RespostaAuto = ['Pong', 'Bom dia como posso ajudar ?']

let PerguntaMatch = [
    'esse item',
    'esse produto'
]
let RespostaMatch = [
    'Sim está disponivel tem interesse ?',
    'Sim está disponivel tem interesse ?'
]

let PordutosBanidos = [
    'item/318081407304941',
    '318081407304942'
]
let RespostaBanido = [
    'nada',
     Texts
    ]



async function AutoResposta(message: any, client: any) {
    let RespostaEnviada: boolean = false;
    let Mensagem = message.body.toLowerCase()
    //message.body.toLowerCase()

    function RespostaA(Mensagem: string, message: any,) {

        for (let i = 0; i < PerguntaAuto.length; i++) {
            const element = PerguntaAuto[i];
            if (element === Mensagem) {
                message.reply(RespostaAuto[i])
                RespostaEnviada = true;
            }
        }

    }
    function RespostaB(Mensagem: string, message: any) {
        for (let index = 0; index < PordutosBanidos.length; index++) {
            const element = PordutosBanidos[index];
            if (Mensagem.match(element)) {
                message.reply(RespostaBanido[1])
                RespostaEnviada = true;
            }
        }
    }
    function RespostaM(Mensagem: string, message: any) {
        for (let i = 0; i < PerguntaMatch.length; i++) {
            const element2 = PerguntaMatch[i];
            if (Mensagem.match(element2)) {
                message.reply(RespostaMatch[i])
                RespostaEnviada = true;
            }
        }
    }

    if (RespostaEnviada == false) {
        delay()
        await RespostaA(Mensagem, message);
    }

    if (RespostaEnviada == false) {
        delay()
        await RespostaB(Mensagem, message)
    }

    if (RespostaEnviada == false) {
        delay()
        await RespostaM(Mensagem, message)
    }
}
module.exports = AutoResposta;