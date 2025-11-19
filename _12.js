//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 12. Dovanų biudžetas (arrow function)
const promptInput = prompt("k1, k2, k3");
const dovanųKainas = promptInput.split(',');

const giftsBudget = (dovanųKainas) => {
const sum = dovanųKainas.reduce((a, e) => a + +e, 0);
const obj = {
  sum: sum,
  statusas: sum > 50 ? "Biudžetas sprogo!" : "Tilpai!",
}
return obj.statusas;
}
document.getElementById("sventes").innerHTML = giftsBudget(dovanųKainas);