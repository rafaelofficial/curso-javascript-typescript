/**
 * Primitivos (Imutáveis): string, number, boolean, undefined, null (bigint e symbol) -> valor são copiados;
 * Referência (mutável): array, object, function -> são passados por referência na memória do computador
 */
// exemplos: 

// primitivos
let nome = 'João';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'Teste';
console.log(a, b);

// arrays
let arrayA = [1, 2, 3];
let arrayB = [...arrayA]; // operador: spread
let arrayC = arrayB;
console.log(arrayA, arrayB);

arrayA.push(4);
console.log(arrayA, arrayB);

arrayB.pop();
console.log(arrayA, arrayB);

arrayA.push('João');
console.log(arrayA, arrayC);

// objetos
const objA = {
    nome: 'João',
    sobrenome: 'da Silva',
    idade: 20
};

const objB = { ...objA };

objA.nome = 'Pedro';
objA.sobrenome = 'Anastácio';
objA.idade = 21;

console.log(objA);
console.log(objB);