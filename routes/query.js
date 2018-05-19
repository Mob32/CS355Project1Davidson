var express = require('express');
var router = express.Router();
var query_dal = require('../dal/query_dal');

router.get('/q1', function(req, res, next){
    query_dal.q1(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q1', {q1: result[0]});
        }
    })
});

router.get('/q2', function(req, res, next){
    query_dal.q2(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q2', {q2: result[0]});
        }
    })
});

router.get('/q3', function(req, res, next){
    query_dal.q3(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q3', {q3: result[0]});
        }
    })
});

router.get('/q4', function(req, res, next){
    query_dal.q4(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q4', {q4: result[0]});
        }
    })
});

router.get('/q5', function(req, res, next){
    query_dal.q5(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q5', {q5: result[0]});
        }
    })
});

router.get('/q6', function(req, res, next){
    query_dal.q6(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q6', {q6: result[0]});
        }
    })
});

router.get('/q7', function(req, res, next){
    query_dal.q7(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q7', {q7: result[0]});
        }
    })
});

router.get('/q8&9', function(req, res, next){
    query_dal.q9(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q8&9', {q9: result[0]});
        }
    })
});

router.get('/q10', function(req, res, next){
    query_dal.q10(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('query/q10', {q10: result[0]});
        }
    })
});








module.exports = router;