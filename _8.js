//  Švenčių festivalis – JavaScript užduotys pakartojimui 

// 8. Programuotojo produktyvumo skaičiuoklė (arrow function)
const eilutesKodo  = prompt("Eilutes Kodo");
const klaidos  = prompt("Klaidos");
const kavosPuodeliai  = prompt("Kavos Puodeliai");

const devMotivation = (kavosPuodeliai, eilutesKodo, klaidos) => {
const indeksas = (eilutesKodo - klaidos) * kavosPuodeliai;
if (indeksas < 20 ) {
  return "Reikia dar kavos...";
} else if(indeksas >= 20 && indeksas <= 100){
  return "Ne blogai";
}
return "Super puikiai programuoju";
}
document.getElementById("sventes").innerHTML = devMotivation(kavosPuodeliai, eilutesKodo, klaidos);