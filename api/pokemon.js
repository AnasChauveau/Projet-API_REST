const express = require('express');
const router = express.Router();

// Routes pour le module users
router.get('/pokemons', (req, res) => {
  // Code pour obtenir les informations sur le Pokémon
  const pokemons = [
    {name: 'Pikachu',type: 'Electric', level: 25},
    {name: 'salameche',type: 'Feu', level: 12}
  ];

  // Envoie les informations sur le Pokémon en tant que réponse
  res.json(pokemons);
});

module.exports = router;