var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'CALL characters_getall();';

    connection.query(query, function(err, result){
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO characters(c_name, c_alignment, c_race, c_class, ' +
        'charisma, wisdom, strength, dexterity, constitution, intelligence, deity_id, player_id) ' +
        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';

    var queryData = [params.c_name, params.c_alignment, params.c_race, params.c_class,
        params.charisma, params.wisdom, params.strength, params.dexterity,
        params.constitution, params.intelligence, params.deity_id, params.player_id];

    connection.query(query, queryData, function(err, result){
        if(err || params.party_id == undefined){
            console.log(err);
            callback(err, result);
        }else{
            var character_id = result.insertId;
            var query = 'INSERT INTO party_character(character_id, party_id) VALUES ?';
            var characterPartyData = [];

            if (params.party_id.constructor == Array){
                for(var i = 0;i<params.party_id.length;i++){
                    characterPartyData.push(
                        [character_id, params.party_id[i]]
                    );
                }
            }
            else{
                characterPartyData.push([character_id, params.party_id]);
            }
            connection.query(query, [characterPartyData], function(err, result){
                callback(err, result);
            });
        }
    });
};