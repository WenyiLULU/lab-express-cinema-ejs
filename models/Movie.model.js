const mongoose = require('mongoose')

// creat schema
const modelMovie = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]   
})

const Movie = mongoose.model('Movie', modelMovie)

module.exports = Movie