//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 10. Bulvių patiekalų dvikova (arrow function)


const patiekalai = [1, 2, 3, 4, 5];
const atsitiktinis = () => {
  return Math.floor(Math.random() * 5);
}
const potatoBattle = (atsitiktinis) => {
  const atsitiktinis_1 = atsitiktinis();
  const atsitiktinis_2 = atsitiktinis();

  const variantas_1 = `Lemtingas sutapimas! Valgysi dvigubą ${patiekalai[atsitiktinis_1]} porciją!`
  const variantas_2 = `Šiandien rinkis tarp ${patiekalai[atsitiktinis_1]} ir ${patiekalai[atsitiktinis_2]}!`
  return atsitiktinis_1 === atsitiktinis_2 ? variantas_1 : variantas_2;
}

document.getElementById("sventes").innerHTML = potatoBattle(atsitiktinis);