var express = require('express');
var router = express.Router();
var deity_dal = require('../dal/deity_dal');

router.get('/all', function(req, res, next){
    deity_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }else{
            res.render('deity/deity_view_all', {deity: result[0],
                was_successful: req.query.was_successful});
        }
    })
});

router.get('/add', function(req, res){
    res.render('deity/deity_add');
});

router.get('/insert', function(req, res){
    deity_dal.insert(req.query, function(err,result){
        if(err) {
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/deity/all');
        }
    });
});

router.get('/edit', function(req, res){
    deity_dal.getinfo(req.query.deity_id, function(err,result){
        if(err){ res.send(err);}
        else{
            res.render('deity/deityUpdate',
                {deity:result[0][0]});
        }
    });
});

router.get('/update', function(req, res) {
    deity_dal.update(req.query, function(err,result){
        if(err) {
            res.send(err);
        }
        else{
            res.redirect(302, '/deity/all');
        }
    });
});

router.get('/delete', function(req, res){
    deity_dal.delete(req.query.deity_id, function(err, deity_id){
        if(err){
            res.send(err);
        }
        else{
            res.redirect(302, '/deity/all?&was_successful=1');
        }
    });
});


module.exports = router;