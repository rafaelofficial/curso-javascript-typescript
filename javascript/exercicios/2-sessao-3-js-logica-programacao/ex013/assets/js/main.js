// Exercício com for
const elemento = [
    { tag: "p", texto: "Isso é um parágrafo" },
    { tag: "div", texto: "Isso é uma div" },
    { tag: "footer", texto: "Isso é um footer" },
    { tag: 'section', texto: "Isso é uma section" }
];

// cria um elemento
let container = document.querySelector('.container');
let div = document.createElement('div');

// adiciona no outro elemento
for (let i = 0; i < elemento.length; i++) {
    let { tag, texto } = elemento[i];
    let tags = document.createElement(tag);
    tags.innerText = texto;
    div.appendChild(tags);
}
container.appendChild(div);
