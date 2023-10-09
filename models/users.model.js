const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    img: {
        type: String,
    },
    owned_nfts: {
        // type: [String],
        type: [mongoose.Schema.Types.Mixed]
    },
    amount: {
        type: Number,
        require: true
    },
    followed_artists: {
        type: [String],
    },
})

module.exports = mongoose.model('users', usersSchema);

