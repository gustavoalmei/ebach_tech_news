AOS.init();

const dataEvento = new Date("Dec 12 2023 19:00:00");
const tempoEvento = dataEvento.getTime();

let contaHora = setInterval(function() {
    const agora = new Date();
    const tempoAtual = agora.getTime();
    const distanciaEvento = tempoEvento - tempoAtual;
    const calcTime = {
        diaEmMs : 1000 * 60 * 60 * 24,
        horaEmMs : 1000 * 60 * 60,
        minEmMs : 1000 * 60,
        segEmMs : 1000
    }
    const timeCont = {
        diasAteEvento : Math.floor(distanciaEvento / calcTime.diaEmMs),
        horasAteEvento : Math.floor((distanciaEvento % calcTime.diaEmMs)/calcTime.horaEmMs),
        minAteEvento : Math.floor((distanciaEvento % calcTime.horaEmMs)/calcTime.minEmMs),
        segAteEvento : Math.floor((distanciaEvento % calcTime.minEmMs)/calcTime.segEmMs)
    }

    document.querySelector('#contador').textContent = `${timeCont.diasAteEvento}d ${timeCont.horasAteEvento}h ${timeCont.minAteEvento}m ${timeCont.segAteEvento}s`

    if( distanciaEvento < 0){
        clearInterval(contaHora);
        document.querySelector('#contador').textContent = "Evento expirado"
    }
}, 1000);
