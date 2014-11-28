// This is server for nodejitsu

var express = require('express');
var path = require('path');

var app = express();

 // changes it to use the optimized version for production
app.use(express.static(path.join(__dirname, '/server/dist')));

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(process.env.PORT || 3000);
// module.exports = app;