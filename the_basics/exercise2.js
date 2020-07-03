const NUMBER = 4936;

let onesPlace = NUMBER % 10;
let tensPlace = ((NUMBER - onesPlace) / 10) % 10;
let hundredsPlace = ((NUMBER - onesPlace - tensPlace) / 10) % 10;

console.log(hundredsPlace);