// Estrutura de repetição - Clássico

// exemplo 1:
for (let i = 0; i <= 5; i++) {
    const isPair = i % 2 === 0 ? "é par" : "é ímpar";
    console.log(i, isPair);
}

const frutas = ["Maça", "Pêra", "Uva", "Manga", "Laranja", "Jaboticaba"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} - ${frutas[i]}`);
}
