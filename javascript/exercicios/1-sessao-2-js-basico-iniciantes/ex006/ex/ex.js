/**
 * Exercício de const e let:
 * 
 * Mostrar esse resultado utilizando const e let: 
 * João da Silva tem 30 anos, pesa 60 kg, tem 1.88 e seu IMC é de 18.9999.
 * João da Silva nasce em 1980.
 */

const nome = 'João';
const sobrenome = 'da Silva';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} e seu IMC é de ${indiceMassaCorporal};`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
