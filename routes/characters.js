var express = require('express');
var router = express.Router();
var characters_dal = require('../dal/characters_dal');
var party_dal = require('../dal/party_dal');
var character_party_dal = require('../dal/character_party_dal');
var character_player_dal = require('../dal/character_player_dal');

router.get('/all', function(req, res){
    characters_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('characters/characters_view_all', {characters: result[0]});
        }
    })
});

router.get('/add', function(req, res){
    party_dal.getAll(function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.render('characters/characters_add', {party_result: result[0]});
        }
    });
});

router.get('/characters_party', function(req, res){
    character_party_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('characters/characters_party', {character_party: result[0]});
        }
    })
});

router.get('/characters_player', function(req, res){
    character_player_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('characters/characters_player', {character_player: result[0]});
        }
    })
});


router.get('/insert', function(req, res){
    characters_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/characters/all');
        }
    });
});

module.exports = router;