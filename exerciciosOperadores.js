/* Escreva um algoritmo para ler o salario mensal atula de um funcionario
 * é o percetual de rerajuste.
 * Calcular e escrever o valor do novo salário
 * */

var salarioAtual = 6000;
var percetual= 10;
var reajuste= 0;
var novoSalario= 0;

reajuste = salarioAtual*percetual/100;
novoSalario = salarioAtual+reajuste;

console.log("O novo salario é: " + novoSalario);

/*
* Faça um algoritmo que leia um número inteiro e que imprima o seu sucessor e seu antecessor
*/

var numero = 10;
var sucessor = numero+1;
var antecessor= numero-1;

console.log(" O sucessor é :" + sucessor + " O antecessor é: "+ antecessor);

/*
*
*
*
*/
var custoFabrica=40000;
var impostos = 45;
var distribuidor = 28;
var valorCarroNovo;


distribuidor = custoFabrica * 28/100;
impostos = custoFabrica * 45/100;
distribuidor = custoFabrica * 28/100;
valorCarroNovo = custoFabrica + impostos+distribuidor;


 console.log("Valor do carro novo com todos os impostos é: " + valorCarroNovo+"R$");

/*
*Faça um algoritmo que leia três notas de um aluno, e calcule e escreva a média final deste aluno.
 Considerar que a médiaé ponderada e que o peso das notas é 2,3,5.
 formula para o calculo da mádia é:
*/

var n1 = 5;
var n2 = 4;
var n3 = 7;
var media = 0;

media = (n1*2+n2*3+n3*5)/10;



console.log(" o valor da média do aluno é " +media)

var nu1 = 4;
var nu2 = 5;
var nu3 = 7;
var nu4 = 6;
var mediaP = 0;

mediaP = (nu1*1 +nu2*2+nu3*3+nu4*4)/10

console.log(" o valor da média do aluno é " +mediaP)




