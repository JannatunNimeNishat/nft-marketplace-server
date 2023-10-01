const express = require('express');

const Artists = require('../models/artists.model');

const router = express.Router();


router.get('/', async (req, res) => {
    const allArtists = await Artists.find({});
    res.send(allArtists);
})


module.exports = router;