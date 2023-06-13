// const express = require('express');

// const app = express();
// app.use(express.json());



// // Importer le module pokemon.js
// const pokemonAPI = require('./routes/pokemon');

// // Configurer la route pour le module pokemon
// app.use('/api', pokemonAPI);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Serveur en cours d'exécution sur le port ${port}`);
// });

const express = require('express');
const app = express();
const router = require('./routes/routes');

app.use(express.json());
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur le port ${port}`);
});