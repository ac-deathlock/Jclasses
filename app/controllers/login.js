//import resolve from 'path';

var conn = require('../../conn');
var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');

var checkexist = (email) => {
  
    conn.query('SELECT * FROM student WHERE email = ?',email, (err, res) => {
      if(err){
        return 1;
      }
      else{
        if(res.length == 0)
          return 0;
        else
          return 1;
      }
    })
 
}

module.exports.register = async (req, res) => {
    // console.log("req",req.body);
  //var today = new Date();
  // var salt = Math.random().toString(16);
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var student=[
    req.body.name,
    req.body.email,
    hashedPassword,
    req.body.phone,
    req.body.class
  ];
  //console.log(student);
  //var check = checkexist(req.body.email);
  var check = 0;
  if(check == 0){
    conn.query('INSERT INTO student (name, email, password, phone, class) VALUES (?, ?, ?, ?, ?)', student,function(er,result){
      if (er) {
          console.log("error ocurred",er);
          res.send({
            "code":400,
            "message":"error ocurred"
          })
        }else{
          console.log('The solution is: ', result);
          res.send({
            "code":200,
            "message":"user registered sucessfully"
              });
        }
    });
  }
  else
  { 
    console.log("User already exists");
    res.send({
      "code":400,
      "message":"user already exist"
        });
  }
};

module.exports.login = function(req, res){
  
    var email = req.body.email;
    var password = req.body.password;
    console.log("chala login");
    //var check =  checkexist(req.body.email);
    var check = 0;
    if(check== 0){
      conn.query('SELECT * FROM student WHERE email = ?', email, function(er, result){
          console.log(result);
          if (er) {
              // console.log("error ocurred",error);
              res.send({
                "code":400,
                "message":"error ocurred"
              })
            }else{
              // console.log('The solution is: ', results);
              if(result.length >0){
                
                var hashedPassword = bcrypt.hashSync(req.body.password, 8);
                var passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password);
                if(passwordIsValid){
                      const payload = {
                        id: result[0].student_id,
                        name: result[0].name,
                        pay: result[0].payment
                      }
                      var token = jwt.sign(payload, 'thisisnotsospecial', {
                        expiresIn: 2592000 // expires in 24 hours
                    });
                      res.send({
                        "code":200,
                        "token":token,
                        "message":"login sucessfull"
                          });
                }
                else{
                  res.send({
                    "code":204,
                    "message":"Email and password does not match"
                      });
                }
              }
              else{
                res.send({
                  "code":204,
                  "message":"Email does not exits"
                    });
              }
            }
      });
    }
};

module.exports.paid = function(req, res){
  var id = req.body.id
  var q = ["1",
          id]
  conn.query("UPDATE payment = ? WHERE student_id = ?", q, function(err,res){
    if(err){
      res.send({
        "code":204,
        "message":"some error in payment"
          });
    }
    else{
      res.send({
        "code":204,
        "message":"payment updated"
          });
    }

  });

}