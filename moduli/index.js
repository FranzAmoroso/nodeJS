
const numero = 3;

if (numero <3) {
    console.log('il numero è minore di 3');
}else if (numero == 3){
    console.log("il numero è uguale a 3");
}else {
    console.log('il numero è maggiore di 3');
};

for (let i = 0; i < numero; i++){
    console.log(i);
}
/* 
 globali 
- __dirname: percorso alla cartella corrente
- __filename: noe del file
- require: funzione per usare i moduli
- module: info sul modulo corrente
- process : info relative all'ambiente di esecuzione
per altri globlali visitare il sito ufficiale node.org
*/
/* 
console.log('Prova:', __dirname);
console.log('Prova:', __filename);
console.log('Prova:', module);
console.log('Prova:', process);
console.log('Prova:', require); 
*/


/* Moduli

-cosa soono i moduli->pacchetti-<dipendence (codice incapsulato) interni, built-in, esterni
- esempio di modulo
- esportare con module.exports
- iportare modulo con require
- sintassi alternative
- funzioni invocate da require
*/



const nomi = require('./nome'); //importare l'oggetto dal file nome

console.log(nomi.persona1); // andare a chiamare il valore dentro l'oggetto del file nome.js
console.log(nomi); //manda in console tutto l'oggetto del file nome.js


//Richiesta di importare un file 
// il punto(.) indica che è un file creato da noi
const saluta = require('./utils')

// sintassi alternativa di come importare un file.js creato da noi 
// funzione invocata sul file utils.js ed importata ed invocata da require
require('./utils')



saluta('anna');
saluta(nomi.persona2);
saluta(nomi.persona3);
saluta(nomi.persona100)

