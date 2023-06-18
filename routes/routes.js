const express = require('express');
const pokemonController = require('../controller/pokemonController.js');
const generationController = require('../controller/generationController');
const categorieController = require('../controller/categorieController');
const typeController = require('../controller/typeController');
const attaqueController = require('../controller/attaqueController');

const router = express.Router();

// Routes pour les Pokemons
router.get('/pokemons', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemonById);
router.get('/pokemon/:id/attaques', pokemonController.getAttaquesByPokemon);
router.get('/pokemon/:id/attaque/:nom', pokemonController.getAttaqueByPokemonId);
router.get('/pokemon/:id/types', pokemonController.getTypesByPokemon);
router.get('/pokemon/:id/types/:nom', pokemonController.getTypeByPokemonId);
router.get('/pokemon/:id/categories', pokemonController.getCategoriesByPokemon);


router.post('/pokemons', pokemonController.createPokemon);
router.put('/pokemon/:id', pokemonController.updatePokemon);
router.delete('/pokemon/:id', pokemonController.deletePokemon);


// Routes pour les Generations
router.get('/generations', generationController.getGenerations);
router.get('/generation/:nom', generationController.getGeneration);
router.get('/generation/:nom/pokemons', generationController.getPokemonsByGeneration);
router.get('/generation/:nom/pokemon/:id', generationController.getPokemonByGeneration);


// Routes pour les Categories
router.get('/categories', categorieController.getCategories);
router.get('/categorie/:nom', categorieController.getCategorie);


// Routes pour les Types
router.get('/types', typeController.getTypes);
router.get('/type/:nom', typeController.getType);


// Routes pour les Attaques
router.get('/attaques', attaqueController.getAttaques);
router.get('/attaque/:nom', attaqueController.getAttaque);


module.exports = router;
