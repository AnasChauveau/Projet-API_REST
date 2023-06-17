// const pokedexData = require('../api/data.json');


// const accueil = (req, res) => {
//   const routes = [
//     {href: '/pokedex', description: 'Accès à l\'API', method: 'GET'}
//   ];
//   res.json(routes);
// };


// const pokedex = (req, res) => {
//     const routes = [
//       {href: '/pokedex', description: 'Accueil', method: 'GET'},
//       {href: '/pokemons', description: 'Voir tous les pokemons', method: 'GET'}
//     ];
//     res.json(routes);
//   };

//   const generations = (req, res) => {
//     res.json(pokedexData.generation);
//   };
  
//   module.exports = {
//     pokedex,
//     generations,
//     accueil
//   };


const pokedex = require('../api/data.json'); 

exports.getAllPokemons = (req, res) => {
    
    //res.json(pokedex.Pokedex[0].generations[0].pokemons);
    let allPokemons = [];
    
    pokedex.Pokedex.forEach(pokedexEntry => {
        pokedexEntry.generations.forEach(generation => {
            allPokemons = allPokemons.concat(generation.pokemons);
        });
    });
    res.json(allPokemons);
};

exports.getPokemonById = (req, res) => {
    const pokemon = pokedex.Pokedex[0].generations[0].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
    if (!pokemon) return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
};

exports.createPokemon = (req, res) => {
    const pokemon = {
        numPokedex: pokedex.Pokedex[0].generations[0].pokemons.length + 1,
        nom: req.body.nom,
        categorie: req.body.categorie,
        types: req.body.types,
        attaques: req.body.attaques
    };
    pokedex.Pokedex[0].generations[0].pokemons.push(pokemon);
    res.json(pokemon);
};

exports.updatePokemon = (req, res) => {
    const pokemon = pokedex.Pokedex[0].generations[0].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
    if (!pokemon) return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');

    pokemon.nom = req.body.nom;
    pokemon.categorie = req.body.categorie;
    pokemon.types = req.body.types;
    pokemon.attaques = req.body.attaques;

    res.json(pokemon);
};

exports.deletePokemon = (req, res) => {
    const pokemon = pokedex.Pokedex[0].generations[0].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
    if (!pokemon) return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');

    const index = pokedex.Pokedex[0].generations[0].pokemons.indexOf(pokemon);
    pokedex.Pokedex[0].generations[0].pokemons.splice(index, 1);

    res.json(pokemon);
};
  