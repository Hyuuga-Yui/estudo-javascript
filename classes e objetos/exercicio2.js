
/* Criar uma classe Pessoa que contenha o método para calcular o IMC, assim como no exercicio4 na pasta de aritmetica e condiiconais */

class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {

        const IMC = this.peso / (this.altura * this.altura);

        if (IMC >= 40) {

            console.log(this.nome + " está com obesidade grave");

        } else if (IMC >= 30 && IMC < 40) {

            console.log(this.nome + " está obeso");

        } else if (IMC >= 25 && IMC < 30) {

            console.log(this.nome + " está acima do peso");

        } else if (IMC >= 18.5 && IMC < 25) {

            console.log(this.nome + " está no peso normal");

        } else if (IMC < 18.5) {

            console.log(this.nome + " está abaixo do peso");

        }
    }

}

const yui = new Pessoa("Yui", 48, 1.54);
yui.calcularIMC();