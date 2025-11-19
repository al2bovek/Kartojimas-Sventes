//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 1. Cepelinų kalorijų analizatorius (arrow function + ternary)

const kiekCepelinu = prompt("Kiek Cepelinu");

const cepelinuAnalize = (kiekCepelinu, kcal = 350) => {
  const kalorijos = kcal * kiekCepelinu;
const analize = {
  kalorijos: kalorijos,
  zinute: kalorijos > 1000 ? "Ufff... čia rimtas balius!" : "Dar gali judėti po valgio.",
};
  return `${analize.kalorijos} kcal  ${analize.zinute}`;
}
document.getElementById("sventes").innerHTML = cepelinuAnalize(kiekCepelinu);