// Import our Controllers
const pokemonController = require('../controllers/pokemonController')

const routes = [
    {
        method: 'GET',
        url: '/v1/pokemons',
        handler: pokemonController.getPokemons
    },
    {
        method: 'GET',
        url: '/v1/pokemons/:id',
        handler: pokemonController.getPokemon
    },
    {
        method: 'POST',
        url: '/v1/pokemons',
        handler: pokemonController.addPokemon
        // schema: documentation.addPokemon
    },
    {
        method: 'PUT',
        url: '/v1/pokemons/:id',
        handler: pokemonController.updatePokemon
    },
    {
        method: 'DELETE',
        url: '/v1/pokemons/:id',
        handler: pokemonController.deletePokemon
    }
]

module.exports = routes