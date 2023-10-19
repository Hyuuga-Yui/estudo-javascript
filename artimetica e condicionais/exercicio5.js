/*

    Algoritmo que calcula o valor a ser pago por um produto de acordo com a forma de pagamento desejada

    1 - Debito: 10% de desconto
    2 - Dinheiro ou pix: 15% de desconto
    3 - Parcelar em ate 2 vezes: preço normal
    4 - Parcelar em mais de 2 vezes: preço normal + 10% de juros

*/

const valorProduto = 100;

const formaPagamento = 1;

if (formaPagamento === 1) {

    console.log(valorProduto * 0.9)

} else if (formaPagamento === 2) {

    console.log(valorProduto * 0.85)

} else if (formaPagamento === 3) {

    console.log(valorProduto)

} else if (formaPagamento === 4) {

    console.log(valorProduto + (valorProduto * 0.1))

}
