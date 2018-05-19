var express = require('express');
var router = express.Router();
var player_dal = require('../dal/player_dal');
var character_player_dal = require('../dal/character_player_dal');

router.get('/all', function(req, res, next){
    player_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('player/player_view_all', {player: result[0],
                was_successful: req.query.was_successful});
        }
    })
});

router.get('/add', function(req, res){
    res.render('player/player_add');
});

router.get('/insert', function(req, res){
    player_dal.insert(req.query, function(err,result){
        if(err) {
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/player/all');
        }
    });
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

router.get('/edit', function(req, res){
    player_dal.getinfo(req.query.player_id, function(err,result){
        if(err){ res.send(err);}
        else{
            res.render('player/PlayerUpdate',
                {player:result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    player_dal.update(req.query, function(err,result){
        if(err) {
            res.send(err);
        }
        else{
            res.redirect(302, '/player/all');
        }
    });
});

router.get('/delete', function(req, res){
    player_dal.delete(req.query.player_id, function(err, player_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/player/all?&was_successful=1');
        }
    });
});

module.exports = router;