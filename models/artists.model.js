const mongoose = require('mongoose');

const artistsSchema = mongoose.Schema({

    artist_name: {
        type: String,
        require: true,
    },
    artist_img: {
        type: String,
        require: true,
    },
    volume: {
        type: Number,
        require: true,
    },
    nfts_sold: {
        type: Number,
        require: true,
    },
    followers: {
        type: Number,
        require: true,
    },
    bio: {
        type: String,
        require: true,
    },
    links: {
        type: Object,
        require: true,
    },

})

module.exports = mongoose.model('artists', artistsSchema)
