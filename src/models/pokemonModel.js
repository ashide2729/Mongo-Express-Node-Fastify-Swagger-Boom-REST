// External Dependancies
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    strength: {
        type: Number,
        required: true,
        min: 20,
        max: 100
    },
    pokeType: {
        type: String,
        enum: ['water', 'land', 'fire', 'wind'],
        required: true
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)