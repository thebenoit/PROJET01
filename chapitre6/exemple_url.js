const url = require('url');
const monUrl = new URL('https://www.youtube.com/')

console.log('href', monUrl.href);
console.log('toString', monUrl.toString());
console.log('host', monUrl.host);
console.log('hostname', monUrl.hostname);
console.log('pathname', monUrl.pathname);
console.log('search', monUrl.search);
monUrl.searchParams.append('validation', 'ok');
console.log('searchParams', monUrl.searchParams);
monUrl.searchParams.forEach((valeur, cle) => console.log(`cle: ${cle}; valeur: ${valeur}`) )


const tableauTemp = [-12, -8, 3, 8, 14, 28];
tableauTemp.forEach((valeur, indice) => console.log(`indice: ${indice}: valeur: ${valeur}`))

//exemple production  d'une liste non numérotée du genre <ul><li>-12</li><li>-8
console.log('ul');
tableauTemp.forEach((valeur, indice) => console.log(` <li>${valeur}</li>`))
console.log(`</ul>`)


