// Constantes com const
/**
 * Regras de constantes em JavaScript:
 * Não podemos criar constantes com palavras reservadas;
 * Não pode modificar o valor de uma constantes, const;
 * Constantes precisam ter nomes significativos;
 * Constantes não podem começar com números. ex: 1nome;
 * Não podem conter espaços ou traços, utilizamos camelCase e é Case-sensitive;
 */

const nome = 'João'; // Declaração e inicialização de uma constante 

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 12.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

// Constantes não podem ser alteradas, elas são imutáveis.
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log('\nResultado duplicado:', resultadoDuplicado);
console.log(typeof resultadoDuplicado);