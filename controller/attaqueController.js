const pokedex = require('../api/data.json'); 

const getAttaques = (req, res) => {
    res.status(200).json(pokedex.Pokedex[0].attaques);
}

const getAttaque = (req, res) => {
    const { id } = req.params;
    const attack = pokedex.Pokedex[0].attaques.find(a => a._nomAtt_ === id);

    if (!attack) {
        res.status(404).json({ message: `L'attaque avec l'ID ${id} non trouvée.` });
    } else {
        res.status(200).json(attack);
    }
}

module.exports = { getAttaques, getAttaque };
