const personne = require('./personne');
console.log("Hello World")
console.log(personne)
console.log(personne.nom)

const Personne = require('./classPersonne');
const paul = new Personne('Paul Larue', 33);
paul.salut();

const path = require('./exemple_path')


