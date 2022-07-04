// 8.- Escribe un programa que pida un número y diga si es divisible por 2

let num = parseInt(prompt("Ingrese un numero"));
let resultado = num % 2;

if (resultado === 0) {
    document.write("El numero " + num + " es divisible por 2");
} else {
    document.write("El numero " + num + " no es divisible por 2")
}