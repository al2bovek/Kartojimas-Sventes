//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 4. Joninių žolelių ekspertas (arrow function)

const keturiųZoleliųKiekius = prompt("keturių žolelių kiekius atskirais parametrais: z1, z2, z3, z4");

const joniniuEkspertas = (str) => {
  let sum = 0;
  arr = str.split(",");
  for (const element of arr) {
    sum += +element;
  }
  const ekspertas = {
    sum: sum,
    isvada: sum > 20 ? "Joninės garantuotos!" : "Dar reikia žolelių...",
  }
  return `Keturių žolelių kiekius ${ekspertas["sum"]} ${ekspertas["isvada"]}`;

}
document.getElementById("sventes").innerHTML = joniniuEkspertas(keturiųZoleliųKiekius);