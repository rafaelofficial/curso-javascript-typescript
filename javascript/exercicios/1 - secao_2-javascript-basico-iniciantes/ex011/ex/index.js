// exercício: strings

const nome = prompt('Digite o seu nome:');

document.body.innerHTML = `Seu nome é: <strong><mark>${nome}</mark></strong></br>`;
document.body.innerHTML += `Seu nome tem <strong><mark>${nome.length}</mark></strong> letras </br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong><mark>${nome.charAt(1)}</mark></strong> </br>`;
document.body.innerHTML += `Qual é o primeiro índice da letra 'A' do seu nome? <strong><mark>${nome.indexOf("a", 0)}</mark></strong> </br>`;
document.body.innerHTML += `Qual é o último índice da letra 'A' no seu nome? <strong><mark>${nome.lastIndexOf("a", nome.length)}</mark></strong> </br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong><mark>${nome.slice(-3)}</mark></strong> </br>`;
document.body.innerHTML += `As palavras do seu nome são: <strong><mark>${nome.split(' ')}</mark></strong> </br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong><mark>${nome.toLocaleUpperCase()}</mark></strong> </br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong><mark>${nome.toLocaleLowerCase()}</mark></strong> </br>`;