
var conn = require('../../conn');
var express = require('express');
var router = express.Router();

module.exports.chapput = function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var q = [name, description];
    conn.query('INSERT INTO chapter (c_name, description) VALUES (?, ?)',q, function(er, result){
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