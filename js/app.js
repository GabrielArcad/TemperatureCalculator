//Change text of dropdown selected
function showTemp(){
    let tempSelected = document.getElementById("temperatures").value;
    const textResult = document.getElementById("textResult");

    if(tempSelected == 'celsius'){
        textResult.innerHTML = 'Result in Celsius';
    }else if(tempSelected == 'kelvin'){
        textResult.innerHTML = 'Result in Kelvin';
    }
    CalcTemp();
}

//Calulates temperature
function CalcTemp() {
    let tempSelected = document.getElementById("temperatures").value;
    //Calculates temperature based on selection
    if(tempSelected=='celsius'){
        let tempValue = document.getElementById("tempValue");
        let Result = (Number(tempValue.value) -32)*(5/9);
        document.getElementById("Result").innerHTML = Result+"°";
    }else if(tempSelected=='kelvin'){
        let tempValue = document.getElementById("tempValue");
        let Result = (Number(tempValue.value) -32)*(5/9)+273.15;
        document.getElementById("Result").innerHTML = Result+"°";
    }
}

