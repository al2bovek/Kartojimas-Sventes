//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 2. Blynų motyvacijos indeksas (arrow function)

const nuotaika = prompt("nuo 1 iki 10");
const energija = prompt("nuo 1 iki 10");

const blynMotyvacija = (nuotaika, energija) => {
const kepimoIndeksas = nuotaika * energija;
if (kepimoIndeksas > 40) {
  return "Kepk daug blynų!"
} else if (kepimoIndeksas >= 20 && kepimoIndeksas <= 40) {
  return "Kepk kelis blynus.";
}
  return "Palik blynus rytojui...";
}
document.getElementById("sventes").innerHTML = blynMotyvacija(nuotaika, energija);