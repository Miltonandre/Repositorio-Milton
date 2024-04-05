var variable1 = prompt("Ingrese un número");
var variable2 = prompt("Ingrese un segundo número");
var operador = prompt("Ingrese un operador");
var resultado = 0;

if (operador == "+") {
    resultado = parseInt(variable1) + parseInt(variable2)
}
if (operador == "-") {
    resultado = parseInt(variable1) - parseInt(variable2)
}
if (operador == "*") {
    resultado = parseInt(variable1) * parseInt(variable2)
}
if (operador == "/") {
    resultado = parseInt(variable1) / parseInt(variable2)
}

document.write("El resultado es: " + resultado);