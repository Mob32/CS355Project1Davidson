var express = require('express');
var router = express.Router();
var deity_dal = require('../dal/deity_dal');

router.get('/all', function(req, res, next){
    deity_dal.getAll(function(err, result){
        if(err) {
            console.log(err);
            res.send(err);
        }else{
            console.log(result);
            res.render('deity/deity_view_all', {deity: result});
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


module.exports = router;