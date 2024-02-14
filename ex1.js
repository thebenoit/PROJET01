//Programme qui fait la lecture d'un fichier en mode asynchrone
// Auteur: Kemmy Will
//Date: 13 février 2024

const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {*} dossier : le nom du dossier oû se trouve le fichier à lire
 * @param {*} fichier : le nom du fichier à lire
 */
function lireFichier(dossier, fichier){

    fs.readFile(path.join(__dirname, monDossier, monFichier), 
'utf-8',
(err, data) =>{
    if(err) throw err;

    console.log(data)
});

}

fs.writeFile(){
    path.join(__dirname, monDossier, monFichier)
    contenu du fichier,
    err => {
        if(err) throw err;
        console.log(`Fichier ${nomFichier} créer avec succès`)
    }
}
let monFichier = 'test.txt'
let monDossier = 'mesFichiers'
let nouveauDossier = 'nouveauDossier'

let nouveauContenu = `contenu original`;
let contenuFichier = `Ajouter à la fin du fichier`;




lireFichier(monDossier, monFichier);
console.log('fin du programme');

