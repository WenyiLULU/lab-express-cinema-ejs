const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET movies page */
router.get('/', (req, res, next) =>{
    Movie.find({})
    .then(movies => {
        console.log(movies)
        res.render('movies',{movies})
    })
    .catch(error => {console.log(error)});

   
});

module.exports = router;
