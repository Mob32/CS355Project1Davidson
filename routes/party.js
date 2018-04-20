var express = require('express');
var router = express.Router();
var party_dal = require('../dal/party_dal');
var character_party_dal = require('../dal/character_party_dal');

router.get('/all', function(req, res){
    party_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else{
            res.render('party/party_view_all', {party: result[0]});
        }
    })
});

router.get('/add', function(req, res){
    res.render('party/party_add');
});

router.get('/characters_party', function(req, res){
    character_party_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('character/characters_party', {character_party: result[0]});
        }
    })
});

router.get('/insert', function(req, res){
    party_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/party/all');
        }
    });
});

module.exports = router;