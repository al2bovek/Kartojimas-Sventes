//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 14. Pavasario energijos vidurkis (arrow function) 

const promptInput = prompt("e1, e2, e3");
const energijosLygioSkaičius = promptInput.split(',');

const springEnergy = (energijosLygioSkaičius) => {
const sum = energijosLygioSkaičius.reduce((a, e) => a + +e, 0);
const vidurkis = sum / energijosLygioSkaičius.length;
const obj = {
  vidurkis: vidurkis,
  statusas: vidurkis > 7 ? "Pavasarinis pakilimas!" : "Laukiam saulės..",
}
return obj.statusas;
}
document.getElementById("sventes").innerHTML = springEnergy(energijosLygioSkaičius);