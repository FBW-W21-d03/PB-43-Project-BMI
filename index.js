function calculation() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    console.log(weight , height)
    document.getElementById("result").innerHTML = (weight / height / height).toFixed(2);
    if (weight === "" || height === "") {
        alert("Please fill the following fields")
    }else{

    }
    result = weight / height / height;
}