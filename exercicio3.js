/**
 * Para fazer uma promoção, os comerciantes estáo procurando aumentar suas vendas oferecendo descontos. 
 * Faça um algoritimo que possa receber um valor de um produto 
 * e que escreva o novo valor, tento em vista que o desconto foi de 9%.  
 */

var valorDesconto = 0.09;
var valorProduto = 1000;
var valorFinal = 0;

valorDesconto = valorProduto*0.09;
valorFinal = valorProduto-valorDesconto;

console.log(" O valor com desconto é :" + valorFinal );

