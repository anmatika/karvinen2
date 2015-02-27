// Include Express
var express = require('express');
var nodemailer = require('nodemailer');

// Initialize the Router
var router = express.Router();

var galleria = require('./galleria');
var database = require('./database');

// Setup a route /galleria/images
router.get('/galleria', galleria.getImages); 
router.post('/createPost', database.createPost); 
router.get('/getPosts', database.getPosts); 

router.post('/palaute', function (req, res){
	console.log('palaute hit');
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'anttidlink@gmail.com',
	        pass: 'z@PekL$AQF92tHuIoaisqnnBW'
	    }
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: 'Sender Name <anttidlink@gmail.com>"', // sender address
	    to: 'anttidlink@gmail.com', // list of receivers
	    subject: 'Hello', // Subject line
	    text: 'Hello world', // plaintext body
	    html: '<b>Hello world </b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});

	res.send('done');
});

// Expose the module
module.exports = router;
