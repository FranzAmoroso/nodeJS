/* 
MODULI

- cosa sono i moduli built-in
- importare modulo OS
- userinfo, uptime, versione, arch
- importare modulo path
- separator, join (con sottocartelle), basename, resolve (percorsi*/



const os = require('os'); //importare i moduli OS

console.log(os.userInfo()); // l'utente del sistema perativo

console.log(os.uptime()); // quando tempo il sistema operativo è attivo

console.log(os.version()); // versione del sistema operativo 

console.log(os.arch()); // l'architettura del sitema operativo

const prova = {
    nome: os.type(), //nome sistema operativo
    relase:os.release(), //versione sistema operativo
    memoria: os.totalmem(), //memoria totale
    disponibile: os.freemem(), //memoria disponibile
}

console.log(prova);

const path = require('path');

console.log(path.sep); // separatore of default del sistema operativo dei path

const percorsofile = path.join('/moduli\ built\ in\ OS\ e\ PATH', 'prova.txt');

console.log(percorsofile);

console.log(path.basename(percorsofile)); //se vogliamoandare a trovare il file in un perorso

const percorsoAssoluto = path.resolve(__dirname,'moduli\ built\ in\ OS\ e\ PATH', 'prova.txt' ); // Trovare il percorso assoluto in una cartella

console.log(percorsoAssoluto); //mostrare in console il percorso assoluto della cartella