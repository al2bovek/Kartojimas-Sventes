//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 18. Šventinės dvasios progresas (arrow function) 
const promptInput = prompt("s1, s2, s3, s4, s5");
const _5SkaičiųParametrai = promptInput.split(',');

const holidaySpirit = (_5SkaičiųParametrai) => {
  const sum = _5SkaičiųParametrai.reduce((a, e) => a + +e, 0);
  let kiekTrūksta;
  50 - sum > 0 ? kiekTrūksta = 50 - sum : "Nieko nerūksta";
  if (sum > 40) {
    return "Šventinė dvasia čia!";
  } else if (sum >= 20 && sum <= 40) {
    return "Artėjame...";
  }
  return "Reikia daugiau mandarinų.";
}
document.getElementById("sventes").innerHTML = holidaySpirit(_5SkaičiųParametrai);