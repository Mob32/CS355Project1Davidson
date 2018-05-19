var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'CALL player_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = "INSERT INTO player(email, first_name, last_name, numOfCharacters) VALUES (?,?,?,?)";
    var queryData = [params.email, params.first_name, params.last_name, params.numOfCharacters];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.getinfo = function(player_id, callback){
    var query = 'CALL player_getinfo(?)';
    var queryData = [player_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.update = function(params, callback){
    var query = 'UPDATE player SET email = ?, first_name = ?, last_name = ?, numOfCharacters = ? WHERE player_id = ?';
    var queryData = [params.email, params.first_name, params.last_name, params.numOfCharacters, params.player_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.delete = function(player_id, callback){
    var query = 'CALL player_delete(?)';
    var queryData = [player_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};