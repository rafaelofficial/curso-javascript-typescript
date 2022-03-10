const numero = 10;

if (numero <= 10) {
    console.log('Número é menor ou igual a 10...');
} 

if (numero >= 0 && numero <= 5) {
    console.log('Este número está entre 0 e 5...');
} else if (numero >= 6 && numero <= 8) {
    console.log('Este número está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('Este número está entre 9 e 11...')
} else {
    console.log('Este número NÃO está entre 0 e 5...');
}
