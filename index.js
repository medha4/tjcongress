#!/usr/bin/nodejs

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express')
var app = express();
var path = require('path')
var request = require('request');
const fs = require('fs');

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 8080 );
app.set('trust proxy', 1) // trust first proxy 

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/img', express.static(path.join(__dirname, 'img')))
app.use('/fonts', express.static(path.join(__dirname, 'fonts')))
app.use('/lib', express.static(path.join(__dirname, 'lib')))
app.use('/examples', express.static(path.join(__dirname, 'examples')))
app.use('/docs', express.static(path.join(__dirname, 'docs')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/contactform', express.static(path.join(__dirname, 'contactform')))
app.use('/html', express.static(path.join(__dirname, 'html')))


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages


app.get('/', function(req, res){
    res.sendFile(__dirname+ '/index.html');
});

app.get('/index', function(req, res){
    res.sendFile(__dirname+ '/index.html');
});



// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});