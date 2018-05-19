var express = require('express');
var router = express.Router();
var party_dal = require('../dal/party_dal');
var characters_dal = require('../dal/characters_dal');
var character_party_dal = require('../dal/character_party_dal');

router.get('/all', function(req, res){
    party_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else{
            res.render('party/party_view_all', {party: result[0],
                was_successful: req.query.was_successful});
        }
    })
});

router.get('/add', function(req, res){
    characters_dal.getAll(function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('party/party_add', {character_result: result[0]});
        }
    });
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

router.get('/edit', function(req, res){
    party_dal.getinfo(req.query.party_id, function(err,result){
        if(err){ res.send(err);}
        else{
            res.render('party/partyUpdate',
                {party:result[0][0], character_result:result[1]});
        }
    });
});

router.get('/update', function(req, res){
    party_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/party/all');
        }
    });
});

router.get('/delete', function(req, res){
    party_dal.delete(req.query.party_id, function(err, party_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/party/all?&was_successful=1');
        }
    });
});

module.exports = router;