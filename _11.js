//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 11. Šventės svarbos analizatorius

const svente = prompt("Sventes: Kaledos, Velykos, Jonines, Cepelinu diena");
const dienosIki = prompt("nuo 1 iki 30");

const holidayPriority = (svente, dienosIki) => {
  let svarba;
  switch (svente) {
    case "Kaledos": svarba = 5;
      break;
    case "Velykos": svarba = 4;
      break;
    case "Jonines": svarba = 3;
      break;
    case "Cepelinu diena": svarba = 2;
      break;

    default: svarba = 1
      break;
  }

  const koeficientas = svarba * (30 - dienosIki);
  return `Skubos koeficientas: ${koeficientas}`;
}

document.getElementById("sventes").innerHTML = holidayPriority(svente, dienosIki);