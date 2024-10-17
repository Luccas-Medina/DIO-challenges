let derrotas = 15;
let vitorias = 20;
let nivel;

if (vitorias <= 10) {
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 70) {
    nivel = "Ouro";
} else if (vitorias >= 71 && vitorias <= 80) {
    nivel = "Platina";
} else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Ascendente";
} else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Imortal";
}  else if (vitorias >= 101) {
    nivel = "Radiante";
}

function calcSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = calcSaldoVitorias(vitorias, derrotas);


console.log("O herói tem saldo de " + saldoVitorias + " e está no nível de " + nivel);