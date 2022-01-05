function calcBMI() {

    let mass = document.getElementById("mass").value;
    let height = document.getElementById("height").value;

    document.getElementById("result").innerHTML = "Your BMI is: " + (mass / height / height).toFixed(2);

    document.getElementById("mass").value = "";
    document.getElementById("height").value = "";
}

