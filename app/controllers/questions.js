
var conn = require('../../conn');
var express = require('express');
var router = express.Router();

module.exports.qget = function(req, res) {
    
    conn.query('SELECT * FROM questions WHERE 1 ',function(er,result){
        if(er)
        {
            throw er;
            res.status(400);
            res.json({"message":"Some error occured"});
        }
        else
        {
            var data = [];
            result.forEach(function(row){
                var tmp = {};
                tmp['question'] = row['question'];
                data.push(tmp);
            });
            res.status(200);
            res.json({"message":data});
        }
    }); 
};

module.exports.qpost = function(req, res){
    var question = req.body.question;
    var awnser = req.body.awnser;
    var chapter = req.body.chapter;
    //var subject = req.body.subject;
    var level = req.body.level;
    var qp = [chapter,question,awnser,level];
    console.log(qp);
    conn.query('INSERT INTO questions (c_id, question, awnser, level) VALUES (?, ?, ?, ?)',qp,function(er,result){
        if(er)
        {
            throw er;
            res.status(400);
            res.json({"message":"some error occured"});
        }
        else
        {
            res.status(200);
            res.json({"message":"db updated"});

        }
    });
};

module.exports.qdel = function(req, res){
    var q_id = req.body.q_id;
    console.log(q_id);
    conn.query('DELETE FROM questions WHERE c_id = ?',q_id,function(er,result){
        if(er)
        {
            throw er;
            res.status(400);
            res.json({"message":"some error occured"});
        }
        else
        {
            res.status(200);
            res.json({"message":"db updated"});

        }
    }); 
};