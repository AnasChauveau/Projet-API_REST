// const pokedexData = require('../api/data.json');


// const accueil = (req, res) => {
//   const routes = [
//     {href: '/pokedex', description: 'Accès à l\'API', method: 'GET'}
//   ];
//   res.json(routes);
// };


// const pokedex = (req, res) => {
//     const routes = [
//       {href: '/pokedex', description: 'Accueil', method: 'GET'},
//       {href: '/pokemons', description: 'Voir tous les pokemons', method: 'GET'}
//     ];
//     res.json(routes);
//   };

//   const generations = (req, res) => {
//     res.json(pokedexData.generation);
//   };
  
//   module.exports = {
//     pokedex,
//     generations,
//     accueil
//   };


const pokedex = require('../api/data.json'); 

const getAllPokemons = (req, res) => {
    
    //res.json(pokedex.Pokedex[0].generations[0].pokemons);
    let allPokemons = [];
    
    pokedex.Pokedex.forEach(pokedexEntry => {
        pokedexEntry.generations.forEach(generation => {
            allPokemons = allPokemons.concat(generation.pokemons);
        });
    });
    res.json(allPokemons);
};

const getPokemonById = (req, res) => {
    let pokemon = "";
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        if(pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id))){
            pokemon = pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id));
        }  
    }
    if (pokemon == "") return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
};

const getTypesByPokemon = (req, res) => {
    let pokemon = "";
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        if(pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).types){
            pokemon = pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).types;
        }  
    }
    if (pokemon == "") return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
}

const getAttaquesByPokemon = (req, res) => {
    let pokemon = "";
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        if(pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).attaques){
            pokemon = pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).attaques;
        }  
    }
    if (pokemon == "") return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
}

const getAttaqueByPokemonId = (req, res) => {
    let pokemon = "";
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        if(pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).attaques.find(p => p.nomAtt === parseInt(req.params.nom))){
            pokemon = pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).attaques.find(p => p.nomAtt === parseInt(req.params.nom));
        }  
    }
    if (pokemon == "") return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
}

const getTypeByPokemonId = (req, res) => {
    let pokemon = "";
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        if(pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).types.find(p => p.nomType === parseInt(req.params.nom))){
            pokemon = pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).types.find(p => p.nomType === parseInt(req.params.nom));
        }  
    }
    if (pokemon == "") return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
}
  
const getCategoriesByPokemon = (req, res) => {
    let pokemon = "";
    for(let i = 0; i < pokedex.Pokedex[0].generations.length; i++){
        if(pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).categorie){
            pokemon = pokedex.Pokedex[0].generations[i].pokemons.find(p => p.numPokedex === parseInt(req.params.id)).categorie;
        }  
    }
    if (pokemon == "") return res.status(404).send('Le pokemon avec l\'ID donné n\'a pas été trouvé.');
    res.json(pokemon);
}

module.exports = { 
    getAllPokemons,
    getPokemonById,

    getAttaquesByPokemon,
    getAttaqueByPokemonId,

    getTypesByPokemon,
    getTypeByPokemonId,
    
    getCategoriesByPokemon

};