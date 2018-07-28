var conn = require('../../conn');
var express = require('express');
var router = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, '../image');
    },
    filename: function(req, callback, callback){
        // conn.query('INSERT INTO pic (path) VALUES ?',,function(er,result){
        console.log("message");
        // });
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage: storage});
exports.upload=function(req,res){
    console.log("working ");
}