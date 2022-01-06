function rechnen(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi =weight/ (height*height);
    document.getElementById("bmi").value = bmi;
    if(height == "" || weight == ""){
        window.alert("gib bitte deine werte ein!")
    }else{
        return weight / (height * height);
    }
}

function reset(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("bmi").value = "";
     
}
