// HTML-Elemente
const größe = document.getElementById("größe");
const gewicht = document.getElementById("gewicht");
const bmi = document.getElementById("bmi");

function calcBMI() {
  let result = gewicht.value / (größe.value * größe.value);
  bmi.value = result.toFixed(1);
}
