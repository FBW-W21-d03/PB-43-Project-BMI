// HTML-Elemente
const größe = document.getElementById("größe");
const gewicht = document.getElementById("gewicht");
const bmi = document.getElementById("bmi");
const info = document.getElementById("info");

function calcBMI() {
  let result = gewicht.value / (größe.value * größe.value);
  bmi.value = result.toFixed(1);

  if (result < 18.5) {
    info.innerHTML = "Untergewicht";
    info.style.backgroundColor = "#66ccff";
  } else if (result >= 18.5 && result < 25) {
    info.innerHTML = "Normalgewicht";
    info.style.backgroundColor = "#00cc00";
  } else if (result >= 25 && result < 30) {
    info.innerHTML = "Übergewicht";
    info.style.backgroundColor = "#ff9933";
  } else if (result >= 30 && result < 40) {
    info.innerHTML = "Fettsucht";
    info.style.backgroundColor = "#ff7e00";
  } else if (result >= 40) {
    info.innerHTML = "schwere Fettsucht";
    info.style.backgroundColor = "#cc0000";
  }
}
