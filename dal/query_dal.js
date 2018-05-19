var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.q1 = function(callback) {
    var query = 'CALL query1();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q2 = function(callback) {
    var query = 'CALL query2();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q3 = function(callback) {
    var query = 'CALL query3();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q4 = function(callback) {
    var query = 'CALL query4();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q5 = function(callback) {
    var query = 'CALL query5();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q6 = function(callback) {
    var query = 'CALL query6();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q7 = function(callback) {
    var query = 'CALL query7();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};


exports.q9 = function(callback) {
    var query = 'CALL query9();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.q10 = function(callback) {
    var query = 'CALL query10();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

