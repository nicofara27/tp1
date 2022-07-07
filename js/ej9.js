// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let frase = prompt("Ingresa una frase de 10 caracteres o menos");
frase = frase.toLowerCase();
let vocales = "";

if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u"
) {
  vocales += (frase.charAt(0) + " ");
}
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u"
) {
  vocales += (frase.charAt(1) + " ");
}
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u"
) {
  vocales += (frase.charAt(2) + " ");
}
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u"
) {
  vocales += (frase.charAt(3) + " ");
}
if (
  frase.charAt(4) === "a" ||
  frase.charAt(4) === "e" ||
  frase.charAt(4) === "i" ||
  frase.charAt(4) === "o" ||
  frase.charAt(4) === "u"
) {
  vocales += (frase.charAt(4) + " ");
}
if (
  frase.charAt(5) === "a" ||
  frase.charAt(5) === "e" ||
  frase.charAt(5) === "i" ||
  frase.charAt(5) === "o" ||
  frase.charAt(5) === "u"
) {
  vocales += (frase.charAt(5) + " ");
}
if (
  frase.charAt(6) === "a" ||
  frase.charAt(6) === "e" ||
  frase.charAt(6) === "i" ||
  frase.charAt(6) === "o" ||
  frase.charAt(6) === "u"
) {
  vocales += (frase.charAt(6) + " ");
}
if (
  frase.charAt(7) === "a" ||
  frase.charAt(7) === "e" ||
  frase.charAt(7) === "i" ||
  frase.charAt(7) === "o" ||
  frase.charAt(7) === "u"
) {
  vocales += (frase.charAt(7) + " ");
}
if (
  frase.charAt(8) === "a" ||
  frase.charAt(8) === "e" ||
  frase.charAt(8) === "i" ||
  frase.charAt(8) === "o" ||
  frase.charAt(8) === "u"
) {
  vocales += (frase.charAt(8) + " ");
}
if (
  frase.charAt(9) === "a" ||
  frase.charAt(9) === "e" ||
  frase.charAt(9) === "i" ||
  frase.charAt(9) === "o" ||
  frase.charAt(9) === "u"
) {
  vocales += (frase.charAt(9) + " ");
}

document.write("Las vocales que aparecen en la frase son: " + vocales);


// Este programa muestra las vocales pero sin repetirlas.

// let frase = prompt("Ingresa una frase de 20 caracteres o menos");
// let vocales = "";
// let vocales1 = "";
// let vocales2 = "";
// let minus = frase.toLowerCase();
// let totalCaracteres = frase.length;
// let mitad1 = frase.substring(0, totalCaracteres / 2);
// let mitad2 = frase.substring(totalCaracteres / 2, totalCaracteres);

// // primera mitad de la frase
// if (
//   mitad1.charAt(0) === "a" ||
//   mitad1.charAt(1) === "a" ||
//   mitad1.charAt(2) === "a" ||
//   mitad1.charAt(3) === "a" ||
//   mitad1.charAt(4) === "a" ||
//   mitad1.charAt(5) === "a" ||
//   mitad1.charAt(6) === "a" ||
//   mitad1.charAt(7) === "a" ||
//   mitad1.charAt(8) === "a" ||
//   mitad1.charAt(9) === "a"
// ) {
//   vocales1 += "a";
// }
// if (
//   mitad1.charAt(0) === "e" ||
//   mitad1.charAt(1) === "e" ||
//   mitad1.charAt(2) === "e" ||
//   mitad1.charAt(3) === "e" ||
//   mitad1.charAt(4) === "e" ||
//   mitad1.charAt(5) === "e" ||
//   mitad1.charAt(6) === "e" ||
//   mitad1.charAt(7) === "e" ||
//   mitad1.charAt(8) === "e" ||
//   mitad1.charAt(9) === "e"
// ) {
//   vocales1 += "e";
// }
// if (
//   mitad1.charAt(0) === "i" ||
//   mitad1.charAt(1) === "i" ||
//   mitad1.charAt(2) === "i" ||
//   mitad1.charAt(3) === "i" ||
//   mitad1.charAt(4) === "i" ||
//   mitad1.charAt(5) === "i" ||
//   mitad1.charAt(6) === "i" ||
//   mitad1.charAt(7) === "i" ||
//   mitad1.charAt(8) === "i" ||
//   mitad1.charAt(9) === "i"
// ) {
//   vocales1 += "i";
// }
// if (
//   mitad1.charAt(0) === "o" ||
//   mitad1.charAt(1) === "o" ||
//   mitad1.charAt(2) === "o" ||
//   mitad1.charAt(3) === "o" ||
//   mitad1.charAt(4) === "o" ||
//   mitad1.charAt(5) === "o" ||
//   mitad1.charAt(6) === "o" ||
//   mitad1.charAt(7) === "o" ||
//   mitad1.charAt(8) === "o" ||
//   mitad1.charAt(9) === "o"
// ) {
//   vocales1 += "o";
// }
// if (
//   mitad1.charAt(0) === "u" ||
//   mitad1.charAt(1) === "u" ||
//   mitad1.charAt(2) === "u" ||
//   mitad1.charAt(3) === "u" ||
//   mitad1.charAt(4) === "u" ||
//   mitad1.charAt(5) === "u" ||
//   mitad1.charAt(6) === "u" ||
//   mitad1.charAt(7) === "u" ||
//   mitad1.charAt(8) === "u" ||
//   mitad1.charAt(9) === "u"
// ) {
//   vocales1 += "u";
// }

// // Segunda mitad de la frase
// if (
//   mitad2.charAt(0) === "a" ||
//   mitad2.charAt(1) === "a" ||
//   mitad2.charAt(2) === "a" ||
//   mitad2.charAt(3) === "a" ||
//   mitad2.charAt(4) === "a" ||
//   mitad2.charAt(5) === "a" ||
//   mitad2.charAt(6) === "a" ||
//   mitad2.charAt(7) === "a" ||
//   mitad2.charAt(8) === "a" ||
//   mitad2.charAt(9) === "a"
// ) {
//   vocales2 += "a";
// }
// if (
//   mitad2.charAt(0) === "e" ||
//   mitad2.charAt(1) === "e" ||
//   mitad2.charAt(2) === "e" ||
//   mitad2.charAt(3) === "e" ||
//   mitad2.charAt(4) === "e" ||
//   mitad2.charAt(5) === "e" ||
//   mitad2.charAt(6) === "e" ||
//   mitad2.charAt(7) === "e" ||
//   mitad2.charAt(8) === "e" ||
//   mitad2.charAt(9) === "e"
// ) {
//   vocales2 += "e";
// }
// if (
//   mitad2.charAt(0) === "i" ||
//   mitad2.charAt(1) === "i" ||
//   mitad2.charAt(2) === "i" ||
//   mitad2.charAt(3) === "i" ||
//   mitad2.charAt(4) === "i" ||
//   mitad2.charAt(5) === "i" ||
//   mitad2.charAt(6) === "i" ||
//   mitad2.charAt(7) === "i" ||
//   mitad2.charAt(8) === "i" ||
//   mitad2.charAt(9) === "i"
// ) {
//   vocales2 += "i";
// }
// if (
//   mitad2.charAt(0) === "o" ||
//   mitad2.charAt(1) === "o" ||
//   mitad2.charAt(2) === "o" ||
//   mitad2.charAt(3) === "o" ||
//   mitad2.charAt(4) === "o" ||
//   mitad2.charAt(5) === "o" ||
//   mitad2.charAt(6) === "o" ||
//   mitad2.charAt(7) === "o" ||
//   mitad2.charAt(8) === "o" ||
//   mitad2.charAt(9) === "o"
// ) {
//   vocales2 += "o";
// }
// if (
//   mitad2.charAt(0) === "u" ||
//   mitad2.charAt(1) === "u" ||
//   mitad2.charAt(2) === "u" ||
//   mitad2.charAt(3) === "u" ||
//   mitad2.charAt(4) === "u" ||
//   mitad2.charAt(5) === "u" ||
//   mitad2.charAt(6) === "u" ||
//   mitad2.charAt(7) === "u" ||
//   mitad2.charAt(8) === "u" ||
//   mitad2.charAt(9) === "u"
// ) {
//   vocales2 += "u";
// }

// // Comparacion entre las vocales que aparecen en la primera y segunda mitad
// if (
//   vocales1.charAt(0) === "a" ||
//   vocales2.charAt(0) === "a" ||
//   vocales1.charAt(1) === "a" ||
//   vocales2.charAt(1) === "a" ||
//   vocales1.charAt(2) === "a" ||
//   vocales2.charAt(2) === "a" ||
//   vocales1.charAt(3) === "a" ||
//   vocales2.charAt(3) === "a" ||
//   vocales1.charAt(4) === "a" ||
//   vocales2.charAt(4) === "a"
// ) {
//   vocales += " a";
// }

// if (
//   vocales1.charAt(0) === "e" ||
//   vocales2.charAt(0) === "e" ||
//   vocales1.charAt(1) === "e" ||
//   vocales2.charAt(1) === "e" ||
//   vocales1.charAt(2) === "e" ||
//   vocales2.charAt(2) === "e" ||
//   vocales1.charAt(3) === "e" ||
//   vocales2.charAt(3) === "e" ||
//   vocales1.charAt(4) === "e" ||
//   vocales2.charAt(4) === "e"
// ) {
//   vocales += " e";
// }

// if (
//   vocales1.charAt(0) === "i" ||
//   vocales2.charAt(0) === "i" ||
//   vocales1.charAt(1) === "i" ||
//   vocales2.charAt(1) === "i" ||
//   vocales1.charAt(2) === "i" ||
//   vocales2.charAt(2) === "i" ||
//   vocales1.charAt(3) === "i" ||
//   vocales2.charAt(3) === "i" ||
//   vocales1.charAt(4) === "i" ||
//   vocales2.charAt(4) === "i"
// ) {
//   vocales += " i";
// }

// if (
//   vocales1.charAt(0) === "o" ||
//   vocales2.charAt(0) === "o" ||
//   vocales1.charAt(1) === "o" ||
//   vocales2.charAt(1) === "o" ||
//   vocales1.charAt(2) === "o" ||
//   vocales2.charAt(2) === "o" ||
//   vocales1.charAt(3) === "o" ||
//   vocales2.charAt(3) === "o" ||
//   vocales1.charAt(4) === "o" ||
//   vocales2.charAt(4) === "o"
// ) {
//   vocales += " o";
// }

// if (
//   vocales1.charAt(0) === "u" ||
//   vocales2.charAt(0) === "u" ||
//   vocales1.charAt(1) === "u" ||
//   vocales2.charAt(1) === "u" ||
//   vocales1.charAt(2) === "u" ||
//   vocales2.charAt(2) === "u" ||
//   vocales1.charAt(3) === "u" ||
//   vocales2.charAt(3) === "u" ||
//   vocales1.charAt(4) === "u" ||
//   vocales2.charAt(4) === "u"
// ) {
//   vocales += " u";
// }

// document.write("Las vocales que aparecen en la frase son:" + vocales);
