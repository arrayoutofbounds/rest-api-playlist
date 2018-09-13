const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise; // overriding the deprecaated promise in mongo db

app.use(express.static('./public'));

// middleware runs between req and res
app.use(bodyParser.json());

// anyting after /api uses the routes file
app.use('/api', routes); 

// error handling middleware. We write our own here. This middle ware is hit if next is called in the routes.
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, () => {
    console.log("Stared Server");
});