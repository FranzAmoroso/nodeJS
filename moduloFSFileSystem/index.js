 /* Modulo FS file system
 
 - FS sincrono (readfileSync, writeFileSync)
 - Leggere file, scrivere in file (override e append con {fag:a}), creare un file
 - FS asincrono (readFile, writeFile)
 - sync vs async
 */



 const { error, log } = require('console');
const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

 const ciao = readFileSync('./ciao.txt', 'utf8' );
 const prova = readFileSync('./prova.txt', 'utf8' );

 console.log(ciao);

 //writeFileSync('./nuovofile.txt', 'file creato da writeFileSunc')
/*  questo codice utilizza writeFileSync per creare il file nuovofile.txt */

 // writeFileSync('./prova.txt', 'sciviamo questo sul file Prova.txt', {flag: 'a'}) 
 /* Questo codice utilizza la funzione writeFileSync del modulo fs di Node.js per scrivere un testo nel file "prova.txt". L'opzione {flag: 'a'} indica che il testo verrà aggiunto (append) al contenuto esistente del file anziché sostituirlo.

Di seguito spiego il codice passo dopo passo:

writeFileSync: Questa è una funzione sincrona fornita dal modulo fs di Node.js. È usata per scrivere dati in un file.
./prova.txt: Questo è il percorso relativo del file nel quale intendi scrivere. In questo caso, "prova.txt" si trova nella stessa directory del file di codice.
'scriviamo questo sul file Prova.txt': Questo è il testo che verrà scritto nel file "prova.txt".
{flag: 'a'}: Questo oggetto opzionale imposta la modalità di scrittura del file. In particolare, a significa "append" e indica che il testo verrà aggiunto al contenuto esistente del file, anziché sostituirlo.
Quindi, quando esegui questo codice, il testo "scriviamo questo sul file Prova.txt" verrà aggiunto in append al file "prova.txt". */


// Operazione 1 con readFile sincrono
/* readFile('./prova.txt', 'utf8', (error, result) => {
    if(error){
        console.log(error);
        return
    };
    console.log(result);sciviamo questo sul file Prova.txtsciviamo questo sul file Prova.txtsciviamo questo sul file Prova.txtsciviamo questo sul file Prova.txtsciviamo questo sul file Prova.txtsciviamo questo sul file Prova.txtsciviamo questo sul file Prova.txt
})
 */

// Operazione 2 con read file asincrono
console.log('comincio');
readFile('./prova.txt', 'utf8', (error, result) => {
    if(error){
        console.log(error);
        return
    };
    const prova = result;
    //console.log(prova);
    readFile('./prova.txt', 'utf8', (error, result)=>{
        if(error){
            console.log(error);
            return
        };
        const ciao = result
        //console.log(ciao);
        writeFile('./nuovo.txt', 'bella', (error,result)=>{
            if(error){
                console.log(error);
                return
            }
            //console.log(result);
            console.log('ho finito');
        })
    })
    
})

console.log('sto camminando');