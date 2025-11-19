//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 5. Žuvienės dienos planuotojas (arrow function)

const zmoniųGrupes = prompt("Tris žmonių grupes: g1, g2, g3");
const fishNeeded = (str, norma = 0.25) => {
  const grupes = str.split(",");
  const zmones = grupes.reduce((a, b) => a + +b, 0);
  const needed = {
    zmones: zmones,
    zuvis: (zmones * norma).toFixed(2),
    zinute: zmones * norma > 2 ? "Reikės didelio puodo!" : "Užteks mažo puodo.",
  }
  return `žmonių ${needed.zmones} žuvies ${needed.zuvis} ${needed.zinute}`;
}
document.getElementById("sventes").innerHTML = fishNeeded(zmoniųGrupes); 