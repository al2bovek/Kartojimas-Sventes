//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 3. Dienos nuotaikos prognozė (function declaration + switch) 

const savaitėsDienosNumeris = +prompt("nuo 1 iki 7");
function dayMood(day) {
  let result = "";
  switch (day) {
    case 1: result = "1dienis";
      break;
    case 2: result = "2dienis";
      break;
    case 3: result = "3dienis";
      break;
    case 4: result = "4dienis";
      break;
    case 5: result = "5dienis";
      break;
    case 6: result = "6dienis";
      break;
    case 7: result = "7dienis";
      break;
    default: result = "neradienis"
      break;
  }
  if (day === 5 || day === 6) {
    result = `${result} šventinė atmosfera`;
  }
  return result;
}
document.getElementById("sventes").innerHTML = dayMood(savaitėsDienosNumeris);