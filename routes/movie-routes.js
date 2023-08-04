const express = require('express');
const {Router} = require("express");

const {
    getMovies,
    getMovie,
    deleteMovie,
    addMovie,
    updateMovie,
} = require('../controllers/movie-controller');


const router = new Router()


router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.delete('/movies/:id', deleteMovie);
router.post('/movies', addMovie);
router.patch('/movies/:id', updateMovie);

module.exports = router;