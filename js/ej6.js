// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));

if (num1 > num2) {
    document.write("El numero mas grande es el numero uno: " + num1);
}else if (num2 > num1) {
    document.write("El numero mas grande es el numero dos: " + num2);
}else {
    document.write("Los numeros son iguales");
}