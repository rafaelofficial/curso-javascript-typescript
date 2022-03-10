/** Exercício com Objeto Date e Switch/Case */
const getDataCompleta = document.getElementById("main");

const data = new Date();
let dia = data.getDay();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let min = data.getMinutes();

function getDiasDaSemana(diaDaSemana) {
    
    switch (diaDaSemana) {
        case 0:
            dia = 'Domingo';
            return dia;
        case 1:
            dia = 'Segunda-feira';
            return dia;
        case 2:
            dia = 'Terça-feira';
            return dia;
        case 3:
            dia = 'Quarta-feira';
            return dia;
        case 4:
            dia = 'Quinta-feira';
            return dia;
        case 5:
            dia = 'Sexta-feira';
            return dia;
        case 6:
            dia = 'Sábado';
            return dia;
        default:
            dia = 'Dia da semana não existe';
            return dia;
    }
}

function getMesesDoAno(mesDoAno) {
    
    let mes;
    switch (mesDoAno) {
        case 0:
            mes = 'Janeiro';
            return mes;
        case 1:
            mes = 'Fevereiro';
            return mes;
        case 2:
            mes = 'Março';
            return mes;
        case 3:
            mes = 'Abril';
            return mes;
        case 4:
            mes = 'Maio';
            return mes;
        case 5: 
            mes = 'Junho';
            return mes;
        case 6:
            mes = 'Julho';
            return mes;
        case 7:
            mes = 'Agosto';
            return mes;
        case 8: 
            mes = 'Setembro';
            return mes;
        case 9:
            mes = 'Outubro';
            return mes;
        case 10:
            mes = 'Novembro';
            return mes;
        case 11:
            mes = 'Dezembro';
            return mes;
        default:
            mes = 'Mês do ano não existe';
            return mes;
    }
}

getDataCompleta.innerHTML = `${getDiasDaSemana(dia)}, ${getMesesDoAno(mes)} de ${ano} ${hora}:${min}`;
