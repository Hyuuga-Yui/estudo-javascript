
/* Algoritmo que dada 3 notas de um aluno, calcula a média e indica se passou */

const nota1 = 8.0;
const nota2 = 6.0;
const nota3 = 3.5;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {

    console.log("Parabens, passou")

} else if (media < 7 && media > 5) {

    console.log("Infelizmente esta de recuperacao")

} else if (media <= 5) {

    console.log("O aluno reprovou");

}