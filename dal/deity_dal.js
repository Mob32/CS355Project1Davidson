var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'SELECT * FROM deity;';

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