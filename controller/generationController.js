const pokedex = require('../api/data.json'); 

const getGenerations = (req, res) => {
    res.status(200).json(pokedex.Pokedex[0].generations);
}

const getGeneration = (req, res) => {
    const { nom } = req.params;
    const generation = pokedex.Pokedex[0].generations.find(g => g.nomGen === nom);

    if (!generation) {
        res.status(404).json({ message: `Génération non trouvée.` });
    } else {
        res.status(200).json(generation);
    }
}

module.exports = { getGenerations, getGeneration };
