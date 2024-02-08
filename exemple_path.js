const path = require('path')

console.log("affichage du __dirname", __dirname);
console.log("affichage du __filename", __filename);
console.log("affichage du path.basename: ", path.basename(__filename));

const objetFichier = path.parse(__filename);
console.log(objetFichier.base);
