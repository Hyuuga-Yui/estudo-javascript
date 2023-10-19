

/* 

    Criar uma classe que represente um carro contendo as seguintes variaveis:

        - Marca
        - Cor
        - Gasto médio de combustível por Km


    E um método que dada a quantidade de Km e o preço do combustível, retorne o gasto (em reais) do percurso 

*/

class Carro {

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoPercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const renegade = new Carro('Renegade', 'Preto', 9);
const gasto = renegade.gastoPercurso(70, 6.23);
console.log(gasto);