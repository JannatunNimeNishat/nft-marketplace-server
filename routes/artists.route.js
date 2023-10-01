const express = require('express');
const { getAllArtists, createArtists } = require('../controllers/artistsController');


const router = express.Router();

// get all artists
router.get('/', getAllArtists);
//create many artists
router.post('/', createArtists);


module.exports = router;