/** 
 * dataString
 Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método Date.parse() (IETF-compliant RFC 2822 timestamps e também uma versão da ISO8601). 
*/
const data = new Date('03/07/2022 20:15:59.100');

console.log('Dia =', data.getDate());
console.log('Mes =', data.getMonth() + 1); // mês começa em 0
console.log('Ano =', data.getFullYear());
console.log('Hora =', data.getHours());
console.log('min =', data.getMinutes());
console.log('seg =', data.getSeconds());
console.log('ms =', data.getMilliseconds());
console.log('Dia da semana =', data.getDay()); // 0 = domingo | 6 = sábado

console.log(data.toUTCString());
