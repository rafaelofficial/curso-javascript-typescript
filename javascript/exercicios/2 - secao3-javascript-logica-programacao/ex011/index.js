// Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Zé',
    sobrenome: 'da Silva',
    idade: 20,
    endereco: {
        rua: 'Av Carlos Botelho',
        numero: 123
    }
};

const { nome, sobrenome, endereco: { rua, numero } } = pessoa;
console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}, Rua: ${rua}, Número: ${numero}`);
