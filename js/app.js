//Change text of dropdown selected
function showTemp(item){
    document.getElementById("tempSelected").innerHTML = item.innerHTML;
}


//Calulate temperature
function CalcTemp() {
let Farenheit = document.getElementById("farenheit");
let Result = (Number(Farenheit.value) -32)*(5/9);

document.getElementById("Result").innerHTML = Result;
}

