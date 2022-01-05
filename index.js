function rechner(){
    let kg = document.getElementById("gewicht").value;
    let meter = document.getElementById("größe").value;

    document.getElementById("wert").innerHTML = (kg / meter / meter).toFixed(2);
    if (old == "" || meter=="" ||kg == ""){
        alert("Bitte geben Sie seine Werte ein");
    }else{
        größe
    }
    document.getElementById("gewicht").value = "";
    document.getElementById("größe").value = "";
    document.getElementById("old").value = "";

    return kg/meter/meter
}

