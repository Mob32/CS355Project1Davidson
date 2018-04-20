var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM player;';

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