function CalcTemp() {
let Farenheit = document.getElementById("farenheit");
let Result = (Number(Farenheit.value) -32)*(5/9);

document.getElementById("Result").innerHTML = Result;
}

