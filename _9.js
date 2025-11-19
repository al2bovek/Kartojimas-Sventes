//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 9. Šakočio sezono detektorius (arrow function) 

const alkis = +prompt("nuo 1 iki 10");
const menuo = +prompt("nuo 1 iki 12");

const shouldEatCake = (menuo, alkis) => {
if (menuo === 12 && alkis > 5) {
  return "Šakotis privalomas";
} else if (menuo !== 12 && alkis > 7) {
  return "Na jau gerai... galima mažą gabalėlį";
}
  return "Gal užteks arbatos?";
}
document.getElementById("sventes").innerHTML = shouldEatCake(menuo, alkis);