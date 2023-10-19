
/* Algortimo que calcula o imc */

const peso = 48;
const altura = 1.54;
const IMC = peso / (altura * altura);

// dados em relaçao a adultos //
if (IMC >= 40) {

    console.log("Obesidade Grave");

} else if (IMC >= 30 && IMC < 40) {

    console.log("Obeso");

} else if (IMC >= 25 && IMC < 30) {

    console.log("Acima do peso");

} else if (IMC >= 18.5 && IMC < 25) {

    console.log("Peso normal");

} else if (IMC < 18.5) {

    console.log("Abaixo do peso");

}