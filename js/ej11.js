/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible) */

let numero = parseInt(prompt("Ingrese un numero para comprobar si es divisible por 2, 3, 5 o 7"));

if (numero%2 === 0 && numero%3 === 0 && numero%5 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por todos los numeros mencionados");
} else if (numero%2 === 0 && numero%3 === 0 && numero%5 === 0) {
    document.write("El numero es divisible por los numeros 2, 3 y 5");
} else if (numero%2 === 0 && numero%3 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por los numeros 2, 3 y 7");
} else if (numero%2 === 0 && numero%5 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por los numeros 2, 5 y 7");
} else if (numero%2 === 0 && numero%3 === 0) {
    document.write("El numero es divisible por los numeros 2 y 3");
} else if (numero%2 === 0 && numero%5 === 0) {
    document.write("El numero es divisible por los numeros 2 y 5");
} else if (numero%2 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por los numeros 2 y 7");
} else if (numero%2 === 0) {
    document.write("El numero es divisible unicamente por 2 ");
} else if (numero%3 === 0 && numero%5 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por los numeros 3, 5 y 7");
} else if (numero%3 === 0 && numero%5 === 0) {
    document.write("El numero es divisible por los numeros 3 y 5");
} else if (numero%3 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por los numeros 3 y 7");
} else if (numero%3 === 0) {
    document.write("El numero es divisible unicamente por 3");
} else if (numero%5 === 0 && numero%7 === 0) {
    document.write("El numero es divisible por los numeros 5 y 7");
} else if (numero%5 === 0) {
    document.write("El numero es divisible unicamente por 5");
} else if (numero%7 === 0) {
    document.write("El numero es divisible unicamente por 7");
} else {
    document.write("El numero no es divisible por ninguno de los numeros mencionados");
}
