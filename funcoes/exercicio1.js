
/* Exercicio de funções, dclarando e chamando-as individualmente e umas dentro das outras */


/* Função que escreve seu nome */

function apresentacao(nome) {
    console.log("Oi, meu nome é" + nome)
}

apresentacao('Yui')


/* Função para verificar se uma pessoa é maior de idade */

function verificaIdade(idade) {

    if (idade >= 18) {
        console.log("Maior")
    } else {
        console.log("Menor")
    }

}

verificaIdade(20)
verificaIdade(16)

// função dentro de outra função //

function nomeIdade(nome, idade) {

    console.log(apresentacao(nome) + " e eu sou " + verificaIdade(idade) + " de idade")

}

nomeIdade("Yui", 20)