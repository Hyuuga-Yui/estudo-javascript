/*
    Calcule o valor de uma viagem, levando em conta as seguintes variáveis:

        1 - O preço do etanol
        2 - O preço da gasolina
        3 - Tipo de combustível que está no carro
        4 - Gasto médio de combustível do carro por KM
        5 - Distância em KM da viagem

    Imprimir o valor gasto para realização da viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.43;

const kmPorLitro = 5;

const distanciaViagemKm = 230;

const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaViagemKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
}

// valor com 2 casas decimais
console.log(valorGasto.toFixed(2));