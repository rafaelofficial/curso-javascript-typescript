// exibe uma mensagem
function saudacao(nome) {
    return `Bom dia, ${nome}`;
}

const retornoDaFuncao = saudacao('José!');
console.log(retornoDaFuncao);
// exibe um calculo
function soma(x, y) {
    return x + y;
}

const resultado = soma(3, 9);
console.log(resultado);

// função anônima
const raizQuadrada = function (n) {
    return Math.sqrt(n);
};

console.log(raizQuadrada(9));

// arrow function
const raizQuadrada2 = n => Math.sqrt(n);
console.log(raizQuadrada2(9));