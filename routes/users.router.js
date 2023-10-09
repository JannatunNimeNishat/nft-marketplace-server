const express = require('express');
const { saveUser } = require('../controllers/users.controller');

const router = express.Router();


router.post('/', saveUser);



module.exports = router;