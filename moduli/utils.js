function saluta(nome){
    console.log(`Ciao ${nome}`);
}

module.exports = saluta //Esportare un a funzione

function utils(){
console.log('ciao da utils.js');    
};

utils() // qunado andremo ad esportare direttamente il file , andremo a vedere la funzione invocata