var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback){
    var query = 'CALL quest_getall();';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback){
    var query = "INSERT INTO quest(quest_name, if_completed, reward, party_id) VALUES (?,?,?,?)";
    var queryData = [params.quest_name, params.if_completed, params.reward, params.party_id];
    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.getinfo = function(quest_id, callback){
    var query = 'CALL quest_getinfo(?)';
    var queryData = [quest_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.update = function(params, callback){
    var query = 'UPDATE quest SET quest_name = ?, if_completed = ?, reward = ?, party_id = ? WHERE quest_id = ?';
    var queryData = [params.quest_name, params.if_completed, params.reward, params.party_id, params.quest_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.delete = function(quest_id, callback){
    var query = 'CALL quest_delete(?)';
    var queryData = [quest_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};