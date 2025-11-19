//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 15. Tortų matematikas (arrow function)
const promptInput = prompt("g1, g2, g3");
const zmoniųGrupės = promptInput.split(',');
const tortoSkersmuo = prompt("Torto Skersmuo sm");

const cakePerPerson = (zmoniųGrupės, tortoSkersmuo) => {
const zmoniųKiekis = zmoniųGrupės.reduce((a, e) => a + +e, 0);
const obj = {
  zmoniųKiekis: zmoniųKiekis,
  statusas: (tortoSkersmuo / zmoniųKiekis) < 5 ? "Mažoka" : "Pakankama",
}
return obj.statusas;
}
document.getElementById("sventes").innerHTML = cakePerPerson(zmoniųGrupės, tortoSkersmuo);