function bmiRechner(){
    let gewicht = document.getElementById("kg").value;
    let hoeche = document.getElementById("groesse").value;
    let auswert = (gewicht / hoeche / hoeche).toFixed(2);
    
    if (gewicht == "" || hoeche == ""){
        document.getElementById("wert").innerHTML = ("Ihre Werte, bitte!")
    } else if((gewicht / hoeche / hoeche) > 29){
        document.getElementById("wert").innerHTML = (auswert);
        document.getElementById("wert").style.color = "red";
    } else {
    document.getElementById("wert").innerHTML = auswert;
    document.getElementById("wert").style.color = "green";

    } 
    console.log(auswert);
}
 

