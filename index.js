function calculation() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    console.log(weight , height)
    document.getElementById("result").innerHTML = (weight / height / height).toFixed(2);
    if (weight === "" || height === "" || age === "") {
        alert("Please fill the following fields")
    }else{

    }
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    result = weight / height / height;
}