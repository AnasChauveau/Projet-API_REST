const pokedex = require('../api/data.json');

const getCategories = (req, res) => {
    res.status(200).json(pokedex.Pokedex[0].categories);
}

const getCategorie = (req, res) => {
    const { id } = req.params;
    const categorie = pokedex.Pokedex[0].categories.find(c => c._nomCat_ === id);

    if (!categorie) {
        res.status(404).json({ message: `Categorie avec l'ID ${id} non trouvée.` });
    } else {
        res.status(200).json(categorie);
    }
}

module.exports = { getCategories, getCategorie };