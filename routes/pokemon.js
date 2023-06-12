const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController');


router.get('/pokedex', apiController.pokedex);


module.exports = router;
