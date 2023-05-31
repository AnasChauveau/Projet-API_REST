const express = require('express');
const router = express.Router();

// Routes pour le module users
router.get('/pokemon', (req, res) => {
  // Code pour obtenir les informations sur le Pokémon
  const pokemon = {
    name: 'Pikachu',
    type: 'Electric',
    level: 25,
  };

  // Envoie les informations sur le Pokémon en tant que réponse
  res.json(pokemon);
});

module.exports = router;