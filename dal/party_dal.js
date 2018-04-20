var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL party_getall();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO party(party_name, numOfMembers) VALUES (?,?)';

    var queryData = [params.party_name, params.numOfMembers];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};