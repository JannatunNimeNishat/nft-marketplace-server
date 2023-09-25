const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("nft market place is running")
})



module.exports = app;
