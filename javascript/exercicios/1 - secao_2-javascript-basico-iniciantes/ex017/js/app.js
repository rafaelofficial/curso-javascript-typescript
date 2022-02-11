// exercício para: funções, array e objetos

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); // previne o comportamento padrão do navegador
        
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');
        /**
         * TODO: 
         * 1 - Pegar os dados (nome, sobrenome, idade e peso) ex: nome.value;
         * 2 - Criar um objeto e 
         * 3 - Adicionar no array (pessoas)
         * 4 - Adicionar os dados enviados na div resultado
         */

        // cria objeto
        const criaPessoas =  {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        // adiciona objeto no array
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        // adiciona na div o resultado
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();
