/** Exercício com Objeto Date */
const getDataCompleta = document.getElementById("main");
const data = new Date();

getDataCompleta.innerHTML = data.toLocaleString('pt-BR', { dateStyle: "full", timeStyle: "short" });
