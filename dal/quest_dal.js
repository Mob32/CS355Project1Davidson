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
    var query = "INSERT INTO quest(quest_name, if_completed, reward) VALUES (?,?,?)";
    var queryData = [params.quest_name, params.if_completed, params.reward, params.party_id];
    connection.query(query, queryData, function(err, result){
        if(err || params.party_id == undefined){
            console.log(err);
            callback(err, result);
        }else{
            var quest_id = result.insertId;
            var query = 'INSERT INTO quest_party(quest_id, party_id) VALUES ?';
            var questPartyData = [];

            questPartyData.push([quest_id, params.party_id]);

            connection.query(query, [questPartyData], function(err, result){
                callback(err, result);
            });
        }
    });
};