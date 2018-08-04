var conn = require('../../conn');
var express = require('express');
var router = express.Router();

module.exports.video_fetch = function(req, res){
    var topic_id = req.body.topic_id;
    conn.query('SELECT * FROM video WHERE video_id = ?',topic_id,function(er, result){
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
                tmp['name'] = row['name'];
                tmp['url'] = row['url'];
                data.push(tmp);
            });
            res.status(200);
            res.json({"message":data});
        }
    });
}

module.exports.video_add = function(req, res){
    var topic_id = req.body.topic_id;
    var name = req.body.name;
    var url = req.bosy.url;
    var q = [name,topic_id,url];
    conn.query('INSERT INTO video (name, topic_id, url) VALUES (?, ?, ?, ?)',q, function(err,res){
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
}