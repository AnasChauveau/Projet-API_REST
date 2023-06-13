const pokedexData = require('../api/data.json');


const pokedex = (req, res) => {
    const routes = [
      {href: '/pokedex', description: 'Accueil', method: 'GET'},
      {href: '/pokemons', description: 'Voir tous les pokemons', method: 'GET'}
    ];
    res.json(routes);
  };

  const generations = (req, res) => {
    res.json(pokedexData.generation);
  };
  
  module.exports = {
    pokedex,
    generations
  };
  