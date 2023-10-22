/* 
Event emitters
- introduzione event

*/
//importare Event Emitters
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

/* ci iscriviamo all'evento messagio */
customEmitter.on('messaggio' , (nome ,anno) => {
    console.log(`ciao sono ${nome} e sono partito il ${anno}`);
})
customEmitter.on('messaggio' , (anno) => {
    console.log(anno);
})
customEmitter.on('messaggio' , (nome) => {
    console.log(`buon giorno ${nome}`);
})
customEmitter.on('messaggio' , () => {
    console.log("non ho niente");
})
/* emissione dell'evento */
customEmitter.emit('messaggio', 'eduardo', 2023);

