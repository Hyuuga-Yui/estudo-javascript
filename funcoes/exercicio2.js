
/* Refazendo o exercicio5 da pasta basico, só que dessa vez com função */

/*

    Algoritmo que calcula o valor a ser pago por um produto de acordo com a forma de pagamento desejada

    1 - Debito: 10% de desconto
    2 - Dinheiro ou pix: 15% de desconto
    3 - Parcelar em ate 2 vezes: preço normal
    4 - Parcelar em mais de 2 vezes: preço normal + 10% de juros

*/

const valorProduto = 100;

function desconto(valor, desconto) {
    return valor - (valor * (desconto / 100))
}

function juros(valor) {
    return valor + (valor * 0.1)
}

const formaPagamento = 1;

if (formaPagamento === 1) {

    console.log(desconto(valorProduto, 10))

} else if (formaPagamento === 2) {

    console.log(desconto(valorProduto, 15))

} else if (formaPagamento === 3) {

    console.log(valorProduto)

} else if (formaPagamento === 4) {

    console.log(juros(valorProduto))

}
