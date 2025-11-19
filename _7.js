//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 7. Vardadienių sveikintojas (arrow function)
const vardas = prompt("Vardas");
const arGeraiMiegojo = prompt("jeigu ne palik tuscia langa");
const celebrateNameDay = (vardas, arGeraiMiegojo) => {
  const bazinisTekstas = "Sveikiname su vardadieniu,";
  const paildomasTekstas = "bet pirmiau išgerk kavos)";
  return arGeraiMiegojo ? `${bazinisTekstas} ${vardas}!` : `${bazinisTekstas} ${vardas}! ${paildomasTekstas}` ;
}
document.getElementById("sventes").innerHTML = celebrateNameDay(vardas, arGeraiMiegojo);
f