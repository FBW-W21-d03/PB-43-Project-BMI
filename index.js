'use strict';

function calculate() {

    let kg = document.getElementById('kgOutput').value;
    let height = document.getElementById('heightOutput').value;
  
    document.getElementById('ergebnis').innerHTML = (kg / height / height).toFixed(2);
    if (height == '' || kg == '') {
      alert('Deine Maßangaben hier eintippen');
    } else {
    }
    document.getElementById("kgOutput").value = '';
    document.getElementById("heightOutput").value = '';
    
    return kg / height / height;
  }