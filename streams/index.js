/* Streams

- streams sono dei flusso di dati constante diviso in pezzi */


//CODICE

// creazione di un file grande con il testo all'interno 
/* const { writeFileSync } = require("fs")
for (let i = 0; 0<10000; i++){
    writeFileSync('./filegrande.txt', `ciao riga numero ${i}\n` , {flag : 'a'});
} */

//Scarichiamo tutti i dati in una volta sovraccaricando la risposta del codice
/* const { ReadFileSync, writeFileSync, readFileSync} = require('fs');
const filegrande = readFileSync('./filegrande.txt');

console.log(filegrande); */



//Scarichiamo i dati in pezzi per non sovraccaricare tutto in una volta la risposta del codice 
/* const { createReadStream, ReadFileSync, writeFileSync, readFileSync} = require('fs');
const stream = createReadStream('./filegrande.txt');
stream.on('data', (result) =>{
    console.log(result);
})  */