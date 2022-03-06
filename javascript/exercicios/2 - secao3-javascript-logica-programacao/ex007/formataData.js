// formata data pt-BR
function setNumZeroNaEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = setNumZeroNaEsquerda(data.getDate());
    const mes = setNumZeroNaEsquerda(data.getMonth() + 1);
    const ano = setNumZeroNaEsquerda(data.getFullYear());
    const hora = setNumZeroNaEsquerda(data.getHours());
    const min = setNumZeroNaEsquerda(data.getMinutes());
    const seg = setNumZeroNaEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataPtBr = formataData(data);
console.log(dataPtBr);