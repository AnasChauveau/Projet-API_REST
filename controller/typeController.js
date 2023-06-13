const pokedex = require('../api/data.json'); 

const getTypes = (req, res) => {
    res.status(200).json(pokedex.Pokedex[0].types);
}

const getType = (req, res) => {
    const { id } = req.params;
    const type = pokedex.Pokedex[0].types.find(t => t._nomType_ === id);

    if (!type) {
        res.status(404).json({ message: `Le type avec l'ID ${id} non trouvée.` });
    } else {
        res.status(200).json(type);
    }
}

module.exports = { getTypes, getType };
