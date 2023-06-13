const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController');


router.get('/pokedex', apiController.pokedex);
router.get('/pokedex/generations', apiController.generations);


module.exports = router;
