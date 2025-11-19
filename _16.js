//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 16. Arbatos orakulas PRO (function expression) 

const temp = prompt("temp");
const arMiegojo = prompt("arMiegojo");

const teaOracle = function (temp, arMiegojo) {
  if (temp < 10 && !arMiegojo) {
    return "Karšta arbata privaloma!";
  } else if(temp > 15 && arMiegojo) {
    return "Gal šalta arbata?"
  }
  return "Arbata pagal nuotaiką.";
}
document.getElementById("sventes").innerHTML = teaOracle(temp, arMiegojo);