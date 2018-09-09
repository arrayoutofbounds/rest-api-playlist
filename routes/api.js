const express = require("express");
const router = express.Router();

// get a list of ninjas from the database
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET'});
});

// add a new ninja to the database
router.post('/ninjas', (req, res) => {
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// edit a ninja in the database
router.put('/ninjas/:id', (req, res) => {
    res.send({type: 'PUT'});
});

// detele a ninja in the database
router.delete('/ninjas/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;