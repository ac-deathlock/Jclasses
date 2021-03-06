var conn = require('../../conn');
var express = require('express');
var router = express.Router();


module.exports.sget = function(req, res){
    var c_id = req.params.c_id;
    conn.query('SELECT * FROM study WHERE c_id = ?',c_id,function(er, result){
        if(er){
            throw er;
            res.status(400);
            res.json({"message":"some error"});
        }
        else
        {
            var data = [];
            result.forEach(function(row){
                var tmp = {};
                tmp['heading'] = row['heading'];
                tmp['description'] = row['description'];
                data.push(tmp);
            });
            res.status(200);
            res.json({"message":data});
        }
    });
};

module.exports.topic_put = function(req, res){
    var heading = req.body.heading;
    var description = req.body.description;
    var subject= req.body.subject;
    var c_id = req.body.c_id;
    var q = [heading, description,subject,c_id];
    conn.query('INSERT INTO study (heading, description, s_id, c_id) VALUES (?, ?, ?, ?)',q, function(er, result){
        if(er){
            throw er;
            res.status(400);
            res.json({"message":"error occured"});
        }
        else{
            res.status(200);
            res.json({"message":"db updated"});
        }
    });
};

