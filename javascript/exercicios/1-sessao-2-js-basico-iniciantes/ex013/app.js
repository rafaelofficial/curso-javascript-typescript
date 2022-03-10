const frutas = ['uva', 'maça', 'laranja', 'manga'];

console.log(frutas); // exibe o array 
console.log(frutas[0]); // exibe o primeiro índice
console.log(frutas[2]); // exibe o índice 2 

frutas[1] = 'pêra'; // modifica o valor do indice 1
console.log(frutas);

frutas[4] = 'abacate'; // adiciona um elemento no final do array
console.log(frutas);

frutas.push('jaboticaba'); // adiciona um elemento no final do array com o método push
console.log(frutas);

frutas.unshift('ameixa'); // adiciona um elemento no começo
console.log(frutas);

const removeNoFim = frutas.pop(); // remove no fim
console.log(removeNoFim);
console.log(frutas);

const removeNoInicio = frutas.shift(); // remove no inicio
console.log(removeNoInicio);
console.log(frutas);

delete frutas[2]; // apaga um indice
console.log(frutas);

console.log(frutas.slice(0, 2)); // fatia o array
console.log(typeof frutas); // verifica o tipo do array
console.log(frutas instanceof Array); // verifica se frutas é uma instancia de um array