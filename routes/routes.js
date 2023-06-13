const express = require('express');
const pokemonController = require('../controller/pokemonController.js');
// const generationController = require('./controller/generationController');
// const categoryController = require('./controller/categoryController');
// const typeController = require('./controller/typeController');
// const attackController = require('./controller/attackController');

const router = express.Router();

// Routes pour les Pokemons
router.get('/pokemons', pokemonController.getAllPokemons);
router.get('/pokemons/:id', pokemonController.getPokemonById);
router.post('/pokemons', pokemonController.createPokemon);
router.put('/pokemons/:id', pokemonController.updatePokemon);
router.delete('/pokemons/:id', pokemonController.deletePokemon);

// // Routes pour les Generations
// router.get('/generations', generationController.getGenerations);
// router.get('/generations/:id', generationController.getGeneration);


// // Routes pour les Categories
// router.get('/categories', categoryController.getCategories);
// router.get('/categories/:id', categoryController.getCategory);


// // Routes pour les Types
// router.get('/types', typeController.getTypes);
// router.get('/types/:id', typeController.getType);


// // Routes pour les Attaques
// router.get('/attacks', attackController.getAttacks);
// router.get('/attacks/:id', attackController.getAttack);


module.exports = router;
