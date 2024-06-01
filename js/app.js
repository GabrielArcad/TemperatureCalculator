//Initialize the dropdown selected to Celsius
function tempInit(){
    document.getElementById("tempSelected").innerHTML = "Celsius";
}

//Change text of dropdown selected
function showTemp(item){
    //change the text in dropdown by the item selected
    document.getElementById("tempSelected").innerHTML = item.innerHTML;

    
    if(document.getElementById("tempSelected").innerHTML==='Celsius'){
        document.getElementById("textResult").innerHTML = "Resultado en Celsius";
        Result = 0;
        document.getElementById("Result").innerHTML = Result;
    }else if(document.getElementById("tempSelected").innerHTML==='Kelvin'){
        document.getElementById("textResult").innerHTML = "Resultado en Kelvin";
        Result = 0;
        document.getElementById("Result").innerHTML = Result;
    }
}


//Calulates temperature
function CalcTemp() {
    //Calculates temperature based on selection
    if(document.getElementById("tempSelected").innerHTML==='Celsius'){
        let tempValue = document.getElementById("tempValue");
        let Result = (Number(tempValue.value) -32)*(5/9);

        document.getElementById("Result").innerHTML = Result;

    }else if(document.getElementById("tempSelected").innerHTML==='Kelvin'){
        let tempValue = document.getElementById("tempValue");
        let Result = (Number(tempValue.value) -32)*(5/9)+273.15;

        document.getElementById("Result").innerHTML = Result;
    }

}

