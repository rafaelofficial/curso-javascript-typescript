/**
 * Operadores lógicos
 * 
 * && = AND equivale a E: todas as expressões precisam ser verdadeiras para retornar true
 * || = OR equivale a OU: 
 * ! = NOT equivale a NÃO
 */

const expAND = true && true;
const expOR = false || false;
const expNOT = !true;
console.log(expAND, expOR, expNOT);

const nome = 'Rafa';
const senha = '098';
const vaiLogar = nome === 'Rafa' && senha === '098';

console.log(vaiLogar);
