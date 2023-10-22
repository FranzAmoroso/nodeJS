const persona1 = "Luca";
const persona2 = "Marco";
const persona4 = "Anna"; // questo valore non lo esporterà
const persona5 = "Maria";


module.exports = {persona1, persona2} // Esportazione di un oggetto

module.exports.persona3 = "Gianni"; //esportazione diretta 

module.exports.persona100 = persona5; //esportazione di una variabile
