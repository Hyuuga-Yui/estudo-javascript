/*
    Calcule o valor de uma viagem, tendo 3 variáveis:

        1 - O preço do combustível
        2 - Gasto médio de combustível do carro por KM
        3 - Distância em KM da viagem

    Imprimir o valor gasto para realização da viagem
*/

const precoCombustivel = 5.79;

const kmPorLitro = 5;

const distanciaViagemKm = 230;

const litrosConsumidos = distanciaViagemKm / kmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);

// valor com 2 casas decimais
console.log(valorGasto.toFixed(2));
