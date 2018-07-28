
var questions = require('../controllers/questions');
var study = require('../controllers/study');
var auth = require('../controllers/login');
var chapter = require('../controllers/chapter');
var p = require('../controllers/image');
var conn = require('../../conn');
var express = require('express');
var router = express.Router();

//questions
router.get('/q', questions.qget);
router.post('/qpost', questions.qpost);
router.delete('/qdel', questions.qdel);


//studymaterial
router.get('/study/:c_id', study.sget);

//login
router.post('/register', auth.register);
router.post('/login',auth.login);
router.post('/paid', auth.paid);

//chaper
router.post('/ch', chapter.chapput);

//file upload
router.post('/picupload', p.upload);

module.exports = router;