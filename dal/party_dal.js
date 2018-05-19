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

exports.insert = function(params, callback) {
    var query = 'INSERT INTO party (party_name, numOfMembers) VALUES (?,?)';

    var queryData = [params.party_name, params.numOfMembers];

    connection.query(query, queryData, function (err, result) {
        if (err || params.character_id == undefined) {
            console.log(err);
            callback(err, result);
        } else {
            var party_id = result.insertId;
            var query = 'INSERT INTO party_character (party_id, character_id) VALUES ?';
            var partyCharacterData = [];

            if (params.character_id.constructor == Array) {
                for (var i = 0; i < params.character_id.length; i++) {
                    partyCharacterData.push([party_id, params.character_id[i]]
                    );
                }
            }
            else {
                partyCharacterData.push([party_id, params.character_id]);
            }

            connection.query(query, [partyCharacterData],
                function (err, result) {
                    callback(err, party_id);
                });
        }
    });
};

var partyCharacterInsert = function(party_id, characterIdArray, callback){
    var query =  'INSERT INTO party_character (party_id, character_id) VALUES ?';

    var partyCharacterData = [];
    if(characterIdArray.constructor == Array){
        for(var i = 0; i < characterIdArray.length; i++) {
            partyCharacterData.push([party_id, characterIdArray[i]]);
        }
    }
    else{
        partyCharacterData.push([party_id, characterIdArray]);
    }
    connection.query(query, [partyCharacterData], function(err, result){
        callback(err,result);
    });
};

var partyCharacterUpdate = function(party_id, characterIdArray, callback){
    var query = 'CALL party_character_delete(?)';

    connection.query(query, party_id, function(err, result){
        if(err || characterIdArray == undefined){
            callback(err, result);
        } else{
            partyCharacterInsert(party_id, characterIdArray, callback);
        }
    });
};

exports.getinfo = function(party_id, callback){
    var query = 'CALL party_getinfo(?)';
    var queryData = [party_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

exports.update = function(params, callback){
    var query = 'UPDATE party SET party_name = ?, numOfMembers = ? WHERE party_id = ?';
    var queryData = [params.party_name, params.numOfMembers, params.party_id];

    connection.query(query, queryData, function(err, result){
        partyCharacterUpdate(params.party_id, params.character_id, function(err,result){
            callback(err, result);
        });
    });
};


exports.delete = function(party_id, callback){
    var query = 'CALL party_delete(?)';
    var queryData = [party_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};