var express = require('express');
var router = express.Router();
var quest_dal = require('../dal/quest_dal');
var party_dal = require('../dal/party_dal');
var completed_dal = require('../dal/completed_dal');

router.get('/all', function(req, res, next){
    quest_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('quest/quest_view_all', {quest: result[0],
                was_successful: req.query.was_successful});
        }
    })
});

router.get('/add', function(req, res){
    party_dal.getAll(function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.render('quest/quest_add', {party_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res){
    quest_dal.insert(req.query, function(err,result){
        if(err) {
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/quest/all');
        }
    });
});

router.get('/completed', function(req, res){
    completed_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('quest/completed', {completed: result[0]});
        }
    })
});

router.get('/edit', function(req, res){
    quest_dal.getinfo(req.query.quest_id, function(err,result){
        if(err){ res.send(err);}
        else{
            res.render('quest/QuestUpdate',
                {quest:result[0][0], quest_party:result[1]});
        }
    });
});

router.get('/update', function(req, res) {
    quest_dal.update(req.query, function(err, result){
        if(err) {
            res.send(err);
        }
        else{
            res.redirect(302, '/quest/all');
        }
    });
});

router.get('/delete', function(req, res){
    quest_dal.delete(req.query.quest_id, function(err, quest_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/quest/all?&was_successful=1');
        }
    });
});

module.exports = router;