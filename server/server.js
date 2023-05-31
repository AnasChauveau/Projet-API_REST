const express = require('express');
const app = express();

// Importer le module pokemon.js
const pokemonAPI = require('../api/pokemon');

// Configurer la route pour le module pokemon
app.use('/api', pokemonAPI);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
