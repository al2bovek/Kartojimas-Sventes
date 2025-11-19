//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 17. Nieko neveikimo detektorius (arrow function) 

const dienos = +prompt("diena nuo 1 iki 7");
const padarytiDarbai = prompt("Padaryti Darbai");

const canDoNothing = (dienos, padarytiDarbai) => {
  if (dienos === 7 || padarytiDarbai > 5) {
    return "Gali nieko neveikti";
  }
  return "Dar šiek tiek padirbėk";
}
document.getElementById("sventes").innerHTML = canDoNothing(dienos, padarytiDarbai);