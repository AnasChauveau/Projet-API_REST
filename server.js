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
app.use(express.json());

const apiController = require('./controller/apiController');

app.get('/api/pokemons', apiController.getAllPokemons);

app.get('/api/pokemons/:id', apiController.getPokemonById);

app.post('/api/pokemons', apiController.createPokemon);

app.put('/api/pokemons/:id', apiController.updatePokemon);

app.delete('/api/pokemons/:id', apiController.deletePokemon);

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Serveur en cours d'exécution sur le port ${port}`);
});