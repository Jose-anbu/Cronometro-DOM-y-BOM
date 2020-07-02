function obtenerFechaHora() {
    let fecha = new Date();

    // FECHA
    let pDiaSemana = document.getElementById(`diaSemana`);
    let pMes = document.getElementById(`mes`);
    let pDia = document.getElementById(`dia`);
    let pAnio = document.getElementById(`anio`);

    let diaSemana = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
    let meses = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];

    pDiaSemana.innerText = diaSemana[fecha.getDay()];
    pMes.innerText = meses[fecha.getMonth()];
    pDia.innerText = fecha.getDate();
    pAnio.innerText = fecha.getFullYear();

    // HORA
    let pHoras = document.getElementById(`horas`);
    let pMinutos = document.getElementById(`minutos`);
    let pSegundos = document.getElementById(`segundos`);
    let pAmPm = document.getElementById(`amPm`);

    if (fecha.getHours() >= 12) {
        pHoras.innerText = fecha.getHours() - 12;
        pAmPm.innerText = "pm";
        if (fecha.getHours() == 0) {
            pHoras.innerText = 12;
        }
    } else {
        pHoras.innerText = fecha.getHours();
        pAmPm.innerText = "am";
    }

    if (parseInt(pHoras.innerText) < 10) {
        pHoras.innerText = "0" + pHoras.innerText;
    }

    if (fecha.getMinutes() < 10) {
        pMinutos.innerText = "0" + fecha.getMinutes();
    } else {
        pMinutos.innerText = fecha.getMinutes();
    }

    if (fecha.getSeconds() < 10) {
        pSegundos.innerText = "0" + fecha.getSeconds();
    } else {
        pSegundos.innerText = fecha.getSeconds();
    }

}

window.setInterval(obtenerFechaHora, 1000);

let cronoCentesimas = document.getElementById(`cronometroCentesimas`);
let cronoSegundos = document.getElementById(`cronometroSegundos`);
let cronoMinutos = document.getElementById(`cronometroMinutos`);
let cronoHoras = document.getElementById(`cronometroHoras`);

let centesimasVariables = 0;
let segundosVariables = 0;
let minutosVariables = 0;
let horasVariables = 0;

cronoCentesimas.innerText = "00";
cronoSegundos.innerText = "00";
cronoMinutos.innerText = "00";
cronoHoras.innerText = "00";

let pressStart = false;
let pressPause = false;
let repeticion;

// CENTESIMAS
function centisimas() {
    centesimasVariables++;
    if (centesimasVariables < 10) {
        cronoCentesimas.innerText = "0" + centesimasVariables;
    } else {
        cronoCentesimas.innerText = centesimasVariables;
    }

    if (centesimasVariables == 100) {
        resetCentesimas();
        segundos();
    }
}

// SEGUNDOS
function segundos() {
    segundosVariables++;
    if (segundosVariables < 10) {
        cronoSegundos.innerText = "0" + segundosVariables;
    } else {
        cronoSegundos.innerText = segundosVariables;
    }

    if (segundosVariables == 60) {
        resetSegundos();
        minutos();
    }
}

// MINUTOS
function minutos() {
    minutosVariables++;
    if (minutosVariables < 10) {
        cronoMinutos.innerText = "0" + minutosVariables;
    } else {
        cronoMinutos.innerText = minutosVariables;
    }

    if (minutosVariables == 60) {
        resetMinutos();
        horas();
    }
}

// HORAS
function horas() {
    horasVariables++;
}

// START
function start() {
    if (pressStart == false) {
        pressStart = true;
        pressPause = false;
        repeticion = window.setInterval(centisimas, 10);
    }
}

// PAUSA
function pause() {
    if(centesimasVariables == 0 && segundosVariables == 0 && minutosVariables == 0 && horasVariables == 0){
        pressPause = false;
    } else if (pressPause == false) {
        window.clearInterval(repeticion);
        pressStart = false;
        pressPause = true;
    } else {
        pressPause = false;
        start();
    }
}

// STOP
function stop() {
    resetCentesimas();
    window.clearInterval(repeticion);
    resetSegundos();
    cronoSegundos.innerText = "00";
    resetMinutos();
    cronoMinutos.innerText = "00";
    resetHoras();
    pressStart = false;
    pressPause = false;
}

// RESET
function resetCentesimas() {
    centesimasVariables = 0;
    cronoCentesimas.innerText = "00";
}

function resetSegundos() {
    segundosVariables = 0;
}

function resetMinutos() {
    minutosVariables = 0;
}

function resetHoras() {
    horasVariables = 0;
    cronoHoras.innerText = "00";
}
