const express = require('express');
const cors = require('cors');

require('dotenv').config();

//router
const artistRouter = require('./routes/artists.route');
const usersRouter = require('./routes/users.router');

const app = express();
app.use(cors());
app.use(express.json());

//mongodb connection
require('./config/db')


// authentication
//session
const passport = require('passport');
const session = require('express-session')
//
const MongoStore = require('connect-mongo');

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DB_URL,
        collectionName: 'sessions'
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,//expire after 1 day
    }
}))

app.use(passport.initialize());
app.use(passport.session());



// routes
//artist router
app.use('/artists', artistRouter);
//users router
app.use('/users', usersRouter);




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
