function calculate () {
   let gewicht= document.getElementById("kilogram").value
    let height=document.getElementById("height").value
    document.getElementById("result").innerHTML= (gewicht/height/height).toFixed(2);
    document.getElementById("kilogram").value= "";
    document.getElementById("height").value= "";
    if (gewicht == "" || height == "") {
        alert("Bitte gib deinen wert")
    } else {
        
    }
     let bmiResult = gewicht/height/height;
    if (bmiResult <18.5) {
         document.getElementById("textResult").innerHTML= "Untergewicht";
         document.getElementById("textResult").style.color="green";
     }
     if (bmiResult>=18.5 && bmiResult <= 24.9) {
        document.getElementById("textResult").innerHTML= "Normalgewicht";
        document.getElementById("textResult").style.color="green";
     }

     if (bmiResult >=25 && bmiResult <= 29.9) {
        document.getElementById("textResult").innerHTML= "Übergewicht";
        document.getElementById("textResult").style.color="red";
     }

     if (bmiResult>=30 && bmiResult <= 34.9) {
        document.getElementById("textResult").innerHTML= "Adipositas Grad 1";
        document.getElementById("textResult").style.color="red";
     }
     if (bmiResult>=35 && bmiResult <= 39.9) {
        document.getElementById("textResult").innerHTML= "Adipositas Grad 2";
        document.getElementById("textResult").style.color="red";
     }
     if (bmiResult >=40 ) {
        document.getElementById("textResult").innerHTML= "Adipositas Grad 3" ;
        document.getElementById("textResult").style.color="red";
     }
}
