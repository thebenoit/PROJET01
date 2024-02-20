const path = require('path')


console.log("affichage du __dirname2", __dirname);
console.log("affichage du __filename", __filename);
console.log("affichage du path.basename: ", path.basename(__filename));
console.log("affichage du extName: ", path.extname(__filename));
console.log("affichage du parse: ", path.parse(__filename));
const objetFichier = path.parse(__filename);
console.log(objetFichier.base);

let nomFichierImage = path.join(__dirname,"image","Carte","Hormozi.jpeg");
console.log("voici le nom de mon image(incluant le chemin): ", nomFichierImage);


