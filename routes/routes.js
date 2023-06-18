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
router.get('/pokemons/:id/attaques', pokemonController.getAttaquesByPokemon);
router.get('/pokemons/:id/attaque/:nom', pokemonController.getAttaqueByPokemonId);
router.get('/pokemons/:id/types', pokemonController.getTypesByPokemon);
router.get('/pokemons/:id/types/:nom', pokemonController.getTypeByPokemonId);
router.get('/pokemons/:id/categories', pokemonController.getCategoriesByPokemon);


// Routes pour les Generations
router.get('/generations', generationController.getGenerations);
router.get('/generations/:nom', generationController.getGenerationByNom);
router.get('/generations/:nom/pokemons', generationController.getPokemonsByGeneration);
router.get('/generations/:nom/pokemon/:id', generationController.getPokemonByGeneration);


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
