
const pokedex = (req, res) => {
    const routes = [
      {url: '/pokedex', description: 'Source', methode: 'GET'},
      {url: '/pokemons', description: 'Voir les pokemons', methode: 'GET'}
    ];
    res.json(routes);
  };
  
  module.exports = {
    pokedex
  };
  