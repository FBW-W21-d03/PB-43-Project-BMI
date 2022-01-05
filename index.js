function berechnen() {
  let bmi;
  let weight = document.bmiform.gewicht.value;
  let height = document.bmiform.groesse.value;
  
  bmi = Math.round(weight / Math.pow(height / 100, 2));
  output = "Ihr BMI beträgt " + bmi + ".\n";
  if (bmi < 18.5) output += "Untergewicht.";
  if (bmi == 18.5 && bmi <= 24.9) output += "Normalgewicht";
  if (bmi == 25 && bmi <=29.9) output += "Übergewicht";
  if (bmi >= 25 && bmi <= 29)output += "Sie haben leichtes bis mässiges Übergewicht.";
  if (bmi >= 35 && bmi <= 39) output += "Adipositas Grad II";
  if (bmi >= 40) output += "Adipositas Grad III";
  alert(output);
}
