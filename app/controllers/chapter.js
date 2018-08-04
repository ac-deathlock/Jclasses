
var conn = require('../../conn');
var express = require('express');
var router = express.Router();

module.exports.chapput = function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var subject = req.body.subject;
    var q = [name, description,subject];
    conn.query('INSERT INTO chapter (c_name, description, s_id) VALUES (?, ?, ?)',q, function(er, result){
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

module.exports.chapterFetch = function(req,res){
    var s_id = req.body.s_id;
    conn.query('SELECT * FROM chapter WHERE s_id = ?',s_id,function(er, result){
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
                tmp['c_name'] = row['c_name'];
                tmp['description'] = row['description'];
                data.push(tmp);
            });
            res.status(200);
            res.json({"message":data});
        }
    });
};