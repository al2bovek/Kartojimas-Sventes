//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 19. Asmeninės šventės analizė (arrow function)
const promptInput = prompt("Ivestį vardą, mėnesį, mėgstamą skaičių");
const asmeninės = promptInput.split(',');
myHoliday = (asmeninės) => {
let analizė;
if (asmeninės[1] == asmeninės[2]) {
  analizė = "Mistinis sutapimas!";
} else if (asmeninės[1] > 6) {
  analizė = "Vasaros nuotaikos";
}
else  analizė = "Pavasario vėjai";
return `${asmeninės[0]} ${analizė}`;
}
document.getElementById("sventes").innerHTML = myHoliday(asmeninės);