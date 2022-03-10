// exercício:

let valorA = 'A'; // B
let valorB = 'B'; // C
let valorC = 'C'; // A

const variavelAuxiliar = valorA;

valorA = valorB;
valorB = valorC; 
valorC = variavelAuxiliar;

console.log(valorA, valorB, variavelAuxiliar);

// ou

let valorAb = 'A'; // B
let valorBb = 'B'; // C
let valorCb = 'C'; // A

[valorAb, valorBb, valorCb] = [valorBb, valorCb, valorAb];
console.log(valorAb, valorBb, valorCb);
