//  Švenčių festivalis – JavaScript užduotys pakartojimui 
// 20*. Fantastiškų švenčių generatorius PRO (arrow function + switch)

const randomHoliday = (technologinė, maisto, poilsio, key_1, key_2) => {
    let result;
    switch (key_1) {
        case 1: result = `technologinė ${technologinė[key_2]}`;
            break;
        case 2: result = `maisto ${maisto[key_2]}`;
            break;
        case 3: result = `poilsio ${poilsio[key_2]}`;
            break;
        default: "Sventės baigesi";
            break;
    }
    return result;
}


const technologinė = ["technologinė_1", "technologinė_1"];
const maisto = ["maisto_1", "maisto_2"];
const poilsio = ["poilsio_1", "poilsio_2"];
const key_1 = Math.floor(Math.random(2) * 3) + 1;
const key_2 = Math.floor(Math.random(2) * 2);

document.getElementById("sventes").innerHTML = randomHoliday(technologinė, maisto, poilsio, key_1, key_2);