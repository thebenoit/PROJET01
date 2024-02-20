const http = require(`http`);
const PORT = process.env.PORT || 8000;
const pageWeb = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> Salut !</h1>
    <p>mon beau paragraphes</p>
</body>
</html>`;

http
  .createServer((requete, reponse) => {
    console.log("la page a afficher est", requete.url);
    reponse.write(pageWeb);
    reponse.end();
  })
  .listen(PORT, () => console.log(`service http démaré sur le port: ${PORT}`));
