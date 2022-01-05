// HTML-Elemente, die irgendwann im JavaScript ausgelesen, oder verändert werden

const alter = document.getElementById("alter"); // Eingabe Alter (<input>)
const größe = document.getElementById("größe"); // Eingabe Größe (<input>)
const gewicht = document.getElementById("gewicht"); // Eingabe Gewicht (<input>)
const bmi = document.getElementById("bmi"); // Ausgabe BMI (<input>)
const info = document.getElementById("info"); // Ausgabe Gewichtsklasse (<div>)

// Funktion die BMI berechnet und Ergebnis anzeigt

function calcBMI() {
  let alterMod = 0;
  if (alter.value >= 19 && alter.value <= 24) {
    alterMod = -1;
  } else if (alter.value >= 35 && alter.value <= 44) {
    alterMod = 1;
  } else if (alter.value >= 45 && alter.value <= 54) {
    alterMod = 2;
  } else if (alter.value >= 55 && alter.value <= 64) {
    alterMod = 3;
  } else if (alter.value >= 65) {
    alterMod = 4;
  }

  let result = gewicht.value / (größe.value * größe.value);
  bmi.value = result.toFixed(1);

  // Anzeige von Gewichtsklasse mit entsprechender Hintergrundfarbe
  if (result < 18.5 + alterMod) {
    info.innerHTML = "Untergewicht";
    info.style.backgroundColor = "#66ccff";
  } else if (result >= 18.5 + alterMod && result < 25 + alterMod) {
    info.innerHTML = "Normalgewicht";
    info.style.backgroundColor = "#00cc00";
  } else if (result >= 25 + alterMod && result < 30 + alterMod) {
    info.innerHTML = "Übergewicht";
    info.style.backgroundColor = "#ff9933";
  } else if (result >= 30 + alterMod && result < 40 + alterMod) {
    info.innerHTML = "Fettsucht";
    info.style.backgroundColor = "#ff7e00";
  } else if (result >= 40 + alterMod) {
    info.innerHTML = "schwere Fettsucht";
    info.style.backgroundColor = "#cc0000";
  }
}
