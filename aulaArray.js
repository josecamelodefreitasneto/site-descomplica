// declaração de arrays var arr= new Array(elemento0,elemento1,....,elementoN)
// var arr-Array(elemento0,elemento1,....., elementoN);
// var arr-[elemento0,elemento1,....., elementoN];

var valores =[8,1,7,2,9];

console.log(valores);
console.log(valores[0]);
console.log(valores[3]);
console.log(valores[4]);

for(var inter = 0; inter<valores.length; inter++){
    console.log("Posição:  " + inter + " VALOR: " +  valores[inter]);
}

// Calcular a media dos numeros de um array
var soma = 0;
for(var inter = 0; inter <valores.length; inter++){
   soma+= valores[inter];
}
var media = soma/valores.length;
console.log("A MEDIA É: " + media);