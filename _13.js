//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 13. Dienos sėkmės analizė (arrow function) 

const diena = prompt("diena nuo 1 iki 31");
const luckCheck = (diena) => {
if (diena == 13) {
  return "Oi...";
}
if (diena%3===0) {
  return "Tokiomis dienomis kaip ši žmonės laimi loterijose";
} else if (diena%2===0) {
  return "Rami diena";
}
return "Normalu";
}
document.getElementById("sventes").innerHTML = luckCheck(diena);