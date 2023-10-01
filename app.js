const express = require('express');

const app = express();

//router
const artistRouter = require('./routes/artists.route'); 

//mongodb connection
require('./config/db')

// routes
app.use('/artists', artistRouter);



app.get('/', (req, res) => {
    res.status(200).send("nft market place is running")
})

// route not found
app.use((req, res, next) => {
    res.status(404).send("Route not found")
})

// server error 
app.use((error, req, res, next) => {
    res.status(500).send("server error", error)
})

module.exports = app;
