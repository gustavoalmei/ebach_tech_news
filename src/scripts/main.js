AOS.init();

const dataEvento = new Date("Dec 12 2023 19:00:00");
const tempoEvento = dataEvento.getTime();

let contaHora = setInterval(function() {
    const agora = new Date();
    const tempoAtual = agora.getTime();
    const distanciaEvento = tempoEvento - tempoAtual;
    const mesEmMs = 1000 * 60 * 60 * 24 * 30;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;
    const segEmMs = 1000;
    const mesAteEvento = Math.floor(distanciaEvento / mesEmMs)
    const diasAteEvento = Math.floor((distanciaEvento % mesEmMs)/diaEmMs)
    const horasAteEvento = Math.floor((distanciaEvento % diaEmMs)/horaEmMs)
    const minAteEvento = Math.floor((distanciaEvento % horaEmMs)/minEmMs)
    const segAteEvento = Math.floor((distanciaEvento % minEmMs)/segEmMs)

    document.querySelector('#contador').textContent = `${mesAteEvento}m ${diasAteEvento}d ${horasAteEvento}h ${minAteEvento}m ${segAteEvento}s`

    if( distanciaEvento < 0){
        clearInterval(contaHora);
        document.querySelector('#contador').textContent = "Evento expirado"
    }
}, 1000);
