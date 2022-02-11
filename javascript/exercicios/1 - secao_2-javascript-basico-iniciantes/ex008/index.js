// operadores aritiméticos -> + = adição e concatenação, - = subtração, * = multiplicação, ** = potenciação / = divisão, % = resto da divisão;
// ordem de precedência -> 1 - entre ( ), 2 - **, 3 - *, /, % e 4 - +, -;
// incremento e decremento -> ++, --;

// exemplos:

let n1 = 5;
let n2 = 10;
let n3 = 0;
let resultado;

resultado = n1 + n2;
console.log('soma =', resultado);

resultado = n1 - n2;
console.log('subtração =', resultado);

resultado = n1 * n2;
console.log('multiplicação =', resultado);

resultado = n1 / n2;
console.log('divisão =', resultado);

resultado = n1 ** n2;
console.log('pontenciação =', resultado);

resultado = (n1 + n2) / 2;
console.log('precedência =', resultado);

resultado = 1;
resultado++;
console.log('incremento =', resultado);

resultado = 1;
resultado--;
console.log('decremento =', resultado);

resultado = n1 + '10';
console.log('concatenação =', resultado);

// tratamento de dados NaN
let a = 10;
let b = '5';

b = parseInt(b);
console.log('parseInt =', a + b);

b = parseFloat(b);
console.log('parseFloat =', a + b / 2);

b = Number(b);
console.log('Number =', a + b);