/**
 * Avaliação de Curto-Circuito (Short-Circuit);
 * 
 * &&, ||;
 * 
 * valores que testam falso em javascript
 * FALSY:
 * false (literal)
 * 0
 * '', "", ``
 * null, undefined
 * NaN
 * qualquer coisa diferente desses valores acima, retorna true.
 */

// exemplo com o AND:
/**
 * se a variável executaAlgumaCoisa tiver um valor diferente das condições FALSY, 
 * o programa irá avaliar a variável e passar por ela e retornar a função falaAlgumaCoisa();
 */

function falaAlgumaCoisa() {
    return "Olá, mundo!";
}

const executaAlgumaCoisa = "Hello, world!";
const shortCircuit = executaAlgumaCoisa && falaAlgumaCoisa();

console.log(shortCircuit);
// exibe: Olá, mundo!

// exemplo com o OR:

//retorna sempre o primeiro valor verdadeiro
const qualquerCor = null;
const corPadrao = "Preto";
const curtoCircuito = qualquerCor || corPadrao;

console.log(curtoCircuito);
// exibe Preto
