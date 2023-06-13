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

let pokedex = require('./api/data.json'); // Remplacez ceci par le chemin d'accès à votre fichier JSON

app.get('/api/pokemons', (req, res) => {
    res.json(pokedex.Pokedex[0].generations[0].pokemons);
});

app.get('/api/pokemons/:id', (req, res) => {
    const pokemon = pokedex.Pokedex[0].generations[0].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
    if (!pokemon) return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
});

app.post('/api/pokemons', (req, res) => {
    const pokemon = {
        numPokedex: pokedex.Pokedex[0].generations[0].pokemons.length + 1,
        nom: req.body.nom,
        categorie: req.body.categorie,
        types: req.body.types,
        attaques: req.body.attaques
    };
    pokedex.Pokedex[0].generations[0].pokemons.push(pokemon);
    res.json(pokemon);
});

app.put('/api/pokemons/:id', (req, res) => {
    const pokemon = pokedex.Pokedex[0].generations[0].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
    if (!pokemon) return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');

    pokemon.nom = req.body.nom;
    pokemon.categorie = req.body.categorie;
    pokemon.types = req.body.types;
    pokemon.attaques = req.body.attaques;

    res.json(pokemon);
});

app.delete('/api/pokemons/delete/:id', (req, res) => {
    const pokemon = pokedex.Pokedex[0].generations[0].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
    if (!pokemon) return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');

    const index = pokedex.Pokedex[0].generations[0].pokemons.indexOf(pokemon);
    pokedex.Pokedex[0].generations[0].pokemons.splice(index, 1);

    res.json(pokemon);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Écoute sur le port ${port}...`));
