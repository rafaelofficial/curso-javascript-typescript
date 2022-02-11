// criação de um objeto simples;
const pessoa = {
    nome: 'José',
    sobrenome: 'da Silva',
    idade: 20,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem a idade atual de ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);


// criação de um objeto com funções;
function criaPessoa(nome, sobrenome, idade) {
    return {  nome,  sobrenome,  idade };
}

const pessoa1 = criaPessoa('José', 'da Silva', 20);
const pessoa2 = criaPessoa('Júnior', 'Oliveira', 21);

console.log(pessoa1.nome);
console.log(pessoa2.nome);

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();