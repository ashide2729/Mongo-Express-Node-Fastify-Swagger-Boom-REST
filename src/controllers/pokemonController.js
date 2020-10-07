// External Dependancies
const boom = require('boom')

// Get Data Models
const Pokemon = require('../models/pokemonModel')

// Get all pokemons
exports.getPokemons = async (req, reply) => {
    try {
        const pokemons = await Pokemon.find()
        return pokemons
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single pokemon by ID
exports.getPokemon = async (req, reply) => {
    try {
        const id = req.params.id
        const pokemon = await Pokemon.findById(id)
        return pokemon
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new pokemon
exports.addPokemon = async (req, reply) => {
    try {
        const pokemon = new Pokemon(req.body)
        return pokemon.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing pokemon
exports.updatePokemon = async (req, reply) => {
    try {
        const id = req.params.id
        const pokemon = req.body
        const { ...updateData } = pokemon
        const update = await Pokemon.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a pokemon
exports.deletePokemon = async (req, reply) => {
    try {
        const id = req.params.id
        const pokemon = await Pokemon.findByIdAndRemove(id)
        return pokemon
    } catch (err) {
        throw boom.boomify(err)
    }
}