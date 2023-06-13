const express = require('express');
const pokemonController = require('../controller/pokemonController.js');
const generationController = require('../controller/generationController');
const categorieController = require('../controller/categorieController');
const typeController = require('../controller/typeController');
const attaqueController = require('../controller/attaqueController');

const router = express.Router();

// Routes pour les Pokemons
router.get('/pokemons', pokemonController.getAllPokemons);
router.get('/pokemons/:id', pokemonController.getPokemonById);
router.post('/pokemons', pokemonController.createPokemon);
router.put('/pokemons/:id', pokemonController.updatePokemon);
router.delete('/pokemons/:id', pokemonController.deletePokemon);

// Routes pour les Generations
router.get('/generations', generationController.getGenerations);
router.get('/generations/:nom', generationController.getGeneration);


// Routes pour les Categories
router.get('/categories', categorieController.getCategories);
router.get('/categories/:nom', categorieController.getCategorie);


// Routes pour les Types
router.get('/types', typeController.getTypes);
router.get('/types/:nom', typeController.getType);


// Routes pour les Attaques
router.get('/attaques', attaqueController.getAttaques);
router.get('/attaques/:nom', attaqueController.getAttaque);


module.exports = router;
