var express = require('express');
var Flower = require('../models/Flower');
var router = express.Router();

router.get('/',function(req, res) {
    Flower.find({}, function(err,flowers){
        if(err) return res.status(500).json({error: err});
        res.json(flowers);
    });
});
router.get('/:id', function(req, res) {
    Flower.find({_id:req.params.id}, function(err,flowers)
    {
        if(err) return res.status(500).json({message: 'Utente non trovato'});
        res.json(flowers);
    });
});
router.post('/', function (req, res) {
    var newFlower = Flower(req.body);
    newFlower.save(function(err){
        res.status(201).json(newFlower);
    })
});
router.put('/:id',function(req,res,next) {
    Flower.findOne({_id: req.params.id}).exec(function (err, Flower) {
        if (err) return res.status(500).json({message: 'Fiore non trovato'});
        if (!Flower) return res.status(404).json({message: 'Fiore non trovato'});
        for (key in req.body) {
            Flower[key] = req.body[key];
        }
        Flower.save(function (err) {
            if (err) return res.status(500).json({message: 'Non riesco a salvare'});
            res.json(Flower);
        })
    });
});

router.delete('/:id', function (req, res, next) {
    Flower.remove({_id: req.params.id}, function(err){
        if(err) return response.status(500).json({message:'Fiore non trovato'});
        res.json({message : 'Fiore eliminataocorrettamente'})
    })
});

module.exports = router;

