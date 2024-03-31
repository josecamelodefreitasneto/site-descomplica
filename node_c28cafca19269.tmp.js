const prompt = require ("prompt-sync")({sigint: true})
/* Faça um algoritmo que efetue o calculo de quantidade de litros de compustivel gastos em uma viagem,
 * sabendo-se que o carro faz 12 km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.
 * utilizar as sequintes fórmulas "distancia = tempo * velocidade "  litros usados = distacia /12
 * O algoritmo deverá apresentar os valores da velocidade média, tempo gasto na viagem, 
 * distancia percorrida e a quantidade de litros utilizado na viagem. 
 * distância e o tempo gasto na viagem.
 */

let tempoGastoViagem = 3;
let velocidadeMedia1 = 80;
let distaciaPercorrida = tempoGastoViagem*velocidadeMedia1;
let combustivelGastos = distaciaPercorrida/12;



console.log("A velocidade média da viagem é " + velocidadeMedia1 + " KM ");
console.log("A distáncia percorrida é " + distaciaPercorrida + " KM ");
console.log("O tempo gasto é " + tempoGastoViagem + " horas ");
console.log("O total gosto em compustivel foi ? " + combustivelGastos + " Litros");



function calcularLitrosGastos(tempo, velocidadeMedia) {
    // Calcula a distância percorrida
    var distancia = tempo * velocidadeMedia;

    // Calcula a quantidade de litros usados
    var litrosUsados = distancia / 12;

    return {
        velocidadeMedia: velocidadeMedia,
        tempoViagem: tempo,
        distanciaPercorrida: distancia,
        litrosUsados: litrosUsados
    };
}

// Exemplo de uso da função
var tempoGasto = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
var velocidadeMedia = parseFloat(prompt("Digite a velocidade média durante a viagem (em km/h):"));

if (!isNaN(tempoGasto) && !isNaN(velocidadeMedia)) {
    var resultado = calcularLitrosGastos(tempoGasto, velocidadeMedia);
    console.log("Velocidade Média: " + resultado.velocidadeMedia + " km/h");
    console.log("Tempo Gasto na Viagem: " + resultado.tempoViagem + " horas");
    console.log("Distância Percorrida: " + resultado.distanciaPercorrida + " km");
    console.log("Quantidade de Litros Utilizados na Viagem: " + resultado.litrosUsados.toFixed(2) + " litros");
} else {
    console.log("Valores inválidos. Por favor, digite valores numéricos válidos.");
}
