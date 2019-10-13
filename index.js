// programa para validar numero de bi com Regex

/*
000322416ba036
006242029ue045
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Regex = new RegExp(/^(\d{9})[a-z]{2}(\d{3})$/i);

 rl.question('Insira o numero do BI para validação: ? para terminar (n) : ', (res) => {
    if (res.match(/^n(o)?$/i)){
        rl.close();
    }else{
        if (res.match(Regex) !== null)  {
            console.log('o seu BI é válido  😉');
            rl.close();
        }else{
            console.log('o seu BI é inválido 😥'); 
            rl.close();
        }
    }
  });




