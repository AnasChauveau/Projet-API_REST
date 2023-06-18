const pokedex = require('../api/data.json'); 

const getAttaques = (req, res) => {
    res.status(200).json(pokedex.Pokedex[0].attaques);
}

const getAttaque = (req, res) => {
    const nom = req.params.nom;
    const attack = pokedex.Pokedex[0].attaques.find(a => a.nomAtt === nom);

    if (!attack) {
        res.status(404).json({ message: `L'attaque avec le nom ${nom} non trouvée.` });
    } else {
        res.status(200).json(attack);
    }
}

module.exports = { getAttaques, getAttaque };
