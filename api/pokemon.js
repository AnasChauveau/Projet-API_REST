const express = require('express');
const router = express.Router();


// Routes pour le module users
router.get('/pokedex', (req, res) => {
  // Code pour obtenir les informations sur le Pokémon
  const routes = [
    {url: '/pokedex', description: 'Source', methode: 'GET'},
    {url: '/pokemons', description: 'Voir les pokemons', methode: 'GET'}
   
  ];

  // Envoie les informations sur le Pokémon en tant que réponse
  res.json(routes);
});


router.get('/pokedex/generation', (req, res) => {
  // Code pour obtenir les informations sur le Pokémon
  const routes = [
    {NumGen: '1', titre: 'Rouge', annee: '1998'},
    {NumGen: '2', titre: 'Emeraude', annee: '2000'}
   
  ];

  // Envoie les informations sur le Pokémon en tant que réponse
  res.json(routes);
});


// Routes pour le module users
router.get('/pokedex/pokemons', (req, res) => {
  // Code pour obtenir les informations sur le Pokémon
  const pokemons = [
    {name: 'Pikachu',type: 'Electric', level: 25},
    {name: 'salameche',type: 'Feu', level: 12}
  ];

  // Envoie les informations sur le Pokémon en tant que réponse
  res.json(pokemons);
});

module.exports = router;