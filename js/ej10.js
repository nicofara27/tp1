/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

let numero = parseInt(prompt("Ingrese un numero para comprobar si es divisible por 2, 3, 5 o 7"));

if (numero%2 === 0 || numero%3 === 0 || numero%5 === 0 || numero%7 === 0) {
    document.write("El numero ingresado es divisible por uno de los numeros mencionados");
} else {
    document.write("El numero no es divisible por ninguno de los numeros mencionados");
}