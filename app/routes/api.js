
var questions = require('../controllers/questions');
var study = require('../controllers/study');
var auth = require('../controllers/login');
var chapter = require('../controllers/chapter');
var p = require('../controllers/image');
var video = require('../controllers/video');
var conn = require('../../conn');
var express = require('express');
var router = express.Router();

//questions
router.get('/q', questions.qget);
router.post('/qpost', questions.qpost);
router.delete('/qdel', questions.qdel);


//studymaterial
router.post('/gettopic', study.sget);
router.post('/puttopic', study.topic_put);

//login
router.post('/register', auth.register);
router.post('/login',auth.login);
router.post('/paid', auth.paid);

//chaper
router.post('/chapteradd', chapter.chapput);
router.post('/chapterfetch', chapter.chapterFetch);

//file upload
router.post('/picupload', p.upload);
//video
router.post('/videofetch', video.video_fetch);

module.exports = router;