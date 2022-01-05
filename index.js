function rechner(){
    let kg = document.getElementById("gewicht").value;
    let meter = document.getElementById("größe").value;

    document.getElementById("wert").innerHTML = (kg / meter / meter).toFixed(2);
    if (meter=="" ||kg == ""){
        alert("Bitte geben Sie seine Werte ein");
    }else{

    }
    document.getElementById("gewicht").value = "";
    document.getElementById("größe").value = "";

    return kg/meter/meter
}

