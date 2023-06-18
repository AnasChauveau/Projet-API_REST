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

const getPokemonByCategorie = (req, res) => {
    const nom = req.params.nom;
    let pokemon = [];
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        for(let y = 0; y < pokedex.Pokedex[0].generations[i].pokemons.length; y++){
            if(pokedex.Pokedex[0].generations[i].pokemons[y].categorie["nomCat"] === nom){
                pokemon.push(pokedex.Pokedex[0].generations[i].pokemons[y]);
            }  
        }
    }

    console.log(pokemon);
    if (pokemon.length < 0) {
        res.status(404).json({ message: `Categorie avec le nom ${nom} non trouvée.` });
    } else {
        res.status(200).json(pokemon);
    }
}

module.exports = { 
    getCategories, 
    getCategorie,
    getPokemonByCategorie
};