const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const app = express();

// middleware runs between req and res
app.use(bodyParser.json());

// anyting after /api uses the routes file
app.use('/api', routes); 

app.listen(process.env.port || 4000, () => {
    console.log("Stared Server");
});