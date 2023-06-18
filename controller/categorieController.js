const pokedex = require('../api/data.json');

const getCategories = (req, res) => {
    res.status(200).json(pokedex.Pokedex[0].categories);
}

const getCategorie = (req, res) => {
    const nom = req.params.nom;
    const categorie = pokedex.Pokedex[0].categories.find(c => c.nomCat === nom);

    if (!categorie) {
        res.status(404).json({ message: `Categorie avec le nom ${nom} non trouvée.` });
    } else {
        res.status(200).json(categorie);
    }
}

module.exports = { getCategories, getCategorie };