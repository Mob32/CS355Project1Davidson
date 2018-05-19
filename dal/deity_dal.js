var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'CALL deity_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = "INSERT INTO deity(d_name, deityOf, d_alignment) VALUES (?,?,?)";
    var queryData = [params.d_name, params.deityOf, params.d_alignment];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.getinfo = function(deity_id, callback){
    var query = 'CALL deity_getinfo(?)';
    var queryData = [deity_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.update = function(params, callback){
    var query = 'UPDATE deity SET d_name = ?, deityOf = ?, d_alignment = ? WHERE deity_id = ?';
    var queryData = [params.d_name, params.deityOf, params.d_alignment, params.deity_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.delete = function(deity_id, callback){
    var query = 'CALL deity_delete(?)';
    var queryData = [deity_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};