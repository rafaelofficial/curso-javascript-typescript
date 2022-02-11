/**
 * Regras de variáveis em JavaScript:
 * Não podemos criar variáveis com palavras reservadas;
 * Não podemos redeclarar variáveis let;
 * Variáveis precisam ter nomes significativos;
 * Variáveis não podem começar com números. ex: 1nome;
 * Não podem conter espaços ou traços, utilizamos camelCase e é Case-sensitive;
 * NÃO UTILIZE var, UTILIZE let.
 */

let nome; // Declaração de variável
nome = 'João'; // Inicialização de variável 

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 12.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');