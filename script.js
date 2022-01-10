function bmiRechner(){
    let gewicht = document.getElementById("kg").value;
    let hoeche = document.getElementById("groesse").value;
    console.log(bmiRechner);
    document.getElementById("wert").innerHTML = (gewicht / hoeche / hoeche).toFixed(2);
   
}
