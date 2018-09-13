const express = require("express");
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the database
router.get('/ninjas', (req, res, next) => {
    // Ninja.find({}).then((ninjas) => {
    //     res.send(ninjas);
    // });
    Ninja.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
    }).then(function(ninjas){
        res.send(ninjas);
    });;
});

// add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
    // create a new ninja record
    // creates new ninja object and then save it automatically.
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next); // goes to the next piece of middleware
});

// edit a ninja in the database
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja);
        });
    });
});

// detele a ninja in the database
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => {
        res.send(ninja);
    });
});

module.exports = router;