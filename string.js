/*charAt(index): Retorna o caractere na posição especificada.

concat(string1, string2, ...): Combina duas ou mais strings e retorna uma nova string.

indexOf(substring, startIndex): Retorna o índice da primeira ocorrência da substring especificada, começando a busca a partir do índice opcional startIndex.

lastIndexOf(substring, startIndex): Retorna o índice da última ocorrência da substring especificada, começando a busca a partir do índice opcional startIndex.

substring(startIndex, endIndex): Retorna a parte da string entre os índices startIndex e endIndex (não incluído).

slice(startIndex, endIndex): Retorna uma parte da string entre os índices startIndex e endIndex (não incluído), permitindo índices negativos.

toUpperCase(): Retorna a string convertida para letras maiúsculas.

toLowerCase(): Retorna a string convertida para letras minúsculas.

trim(): Remove os espaços em branco do início e do final da string.

replace(oldValue, newValue): Substitui a primeira ocorrência de oldValue por newValue na string.

split(separator): Divide a string em um array de substrings com base no separador especificado.

charAt(index): Retorna o caractere na posição especificada. */

var nome = "Jose camelo";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor preencha seu nome completo";
console.log(resultado);

var res = nome.toLocaleLowerCase();
console.log(res);

var jogo = " Mortal kombat vs street fighter";
var posicao = jogo.indexOf(13,);
console.log(posicao);

var cortado = jogo.slice(13,);
console.log(cortado);