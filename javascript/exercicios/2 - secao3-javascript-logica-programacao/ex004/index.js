// if, else if e else:

// entre 0 - 11: Bom dia...
// entre 12 - 17: Boa tarde...
// entre 18 - 23: Boa noite...

// if pode ser usado sozinho...
// sempre que utilizo a palavra else, preciso de um if antes...
// Eu posso ter vários else if nas condições...
// podemos usar condições sem usar o else if, utilizando apenas if e else...

const hora = 25;
const tenhoGrana = true;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá, mundo!');
}

if (tenhoGrana) {
    console.log('Vou sair de casa...');
} else {
    console.log('Não vou sair de casa...');
}
