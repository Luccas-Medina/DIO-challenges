let nome = "Tester"
let xp= 2000;
let nivel = "";

if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 2000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 2000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 2000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 2000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 2000) {
    nivel = "Imortal";
}  else if (xp >= 10001) {
    nivel = "Radiante";
}

console.log("O herói de nome " + nome + "está no nível de " + nivel);