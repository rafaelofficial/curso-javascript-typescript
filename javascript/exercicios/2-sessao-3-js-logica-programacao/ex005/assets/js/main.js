const form = document.querySelector('#form');

// captura evento de submit do formulário
form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#input-peso');
    const inputAltura = evento.target.querySelector('#input-altura');

    const peso = parseInt(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getCalculoImc(peso, altura);
    const resultadoImc = getResultadoImc(imc);
    const mensagem = `O seu IMC é: ${imc} - ${resultadoImc}!`;
    
    setResultado(mensagem, true);
});

// retorna o resultado do IMC
function getResultadoImc(imc) {
    const resultado = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return resultado[5];
    if (imc >= 34.9) return resultado[4];
    if (imc >= 29.9) return resultado[3];
    if (imc >= 24.9) return resultado[2];
    if (imc >= 18.5) return resultado[1];
    if (imc < 18.5) return resultado[0];
}

// faz o calculo matemático do IMC
function getCalculoImc(peso, altura) {
    const calculoImc = peso / altura ** 2;
    return calculoImc.toFixed(2);
}

// cria uma tag HTML para exibir uma mensagem para o usuário
function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

// seta a mensagem do resultado final na flag para o usuário 
function setResultado (mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const paragrafo = criaParagrafo();
    if (isValid) {
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = mensagem;
    resultado.appendChild(paragrafo);
}
