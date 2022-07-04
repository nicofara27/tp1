// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercero numero"));

if (num1 > num2 && num1 > num3) {
    document.write("El numero mas grande es el numero uno: " + num1);
}else if (num2 > num1 && num2 > num3) {
    document.write("El numero mas grande es el numero dos: " + num2);
}else if (num3 > num1 && num3 > num2) {
    document.write("El numero mas grande es el numero tres: " + num3); 
} else if (num1 === num2 && num1 > num3) {
    document.write("El primer y el segundo numero son iguales y son los mas grandes: " + num1)
} else if (num1 === num3 && num1 > num2) {
    document.write("El primer y el tercer numero son iguales y son los mas grandes: " + num1)
} else if (num2 === num3 && num2 > num1) {
    document.write("El segundo y el tercer numero son iguales y son los mas grandes: " + num2)
} else {
    document.write("Los tres numeros son iguales");
}