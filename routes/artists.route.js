const express = require('express');
const { getAllArtists, createArtists, getSingleArtist } = require('../controllers/artistsController');


const router = express.Router();

//create many artists
router.post('/', createArtists);

// get all artists
router.get('/', getAllArtists);

//get single artist 
router.get('/:id',getSingleArtist);

// login



module.exports = router;