function calcBMI() {

    let mass = document.getElementById("mass").value;
    let height = document.getElementById("height").value;

    document.getElementById("result").innerHTML = "Your BMI is: " + (mass / height / height).toFixed(2);


    if (mass == "" || height == "") {
    
        return alert("Please enter a valid Mass and Height.");
    
    }

    document.getElementById("mass").value = "";
    document.getElementById("height").value = "";
}

