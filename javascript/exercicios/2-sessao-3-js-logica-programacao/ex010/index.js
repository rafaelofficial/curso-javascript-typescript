// Atribuição via desestruturação (Arrays)

// exemplo 1: exemplo básico
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, resto);

// exemplo 2: buscando um índice de uma lista
const outroNumero = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(outroNumero[1][2]);

// exemplo 3: buscando um índice de uma lista e o índice dela
const listaDeNumeros = [ [7, 2, 10], [3, 12, 5], [765, 1, 9] ];
const [listaUm, listaDois, listaTres] = listaDeNumeros;
console.log(listaTres, listaTres[2]);
