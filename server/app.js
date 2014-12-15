var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var galleria = require('./routes/galleria');
karvinenGalleriaImagePath = './dist/images/galleria';
var app = express();
var Message = mongoose.model('Message', {
    text: String
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Development Settings
 */
if (app.get('env') === 'development') {
    mongoose.connect('mongodb://localhost/karvinenry-dev');  

    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));


    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

    app.post('/message', function (req, res){
        Message.create({
            //text : req.body.text,
            text : 'testi',
            done : false
        }, function(err, message){
           if (err)
                res.send(err);

            // get and return all the todos after you create another
            Message.find(function(err, messages) {
                if (err)
                    res.send(err)
                res.json(messages);
            }); 
        });      
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

/**
* Routes
*/
app.use('/galleria', galleria);

module.exports = app;
