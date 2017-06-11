var express = require('express');
var app = express();
var path = require('path');

const PORT = 8000;

const APP_DIR = path.resolve(__dirname + "/../public/");

/**
 * Debugging function: Logs all requests to the server.
 * TODO: Remove it some time in the future
 */
app.get('*', function(req, res){
    console.log(req.url);
    req.next();
});

app.use(express.static(APP_DIR));

app.get('/', function(req, res){
    res.sendFile(APP_DIR+'/index.html');
});

app.listen(PORT,function(){
    console.log("Listening on port " + PORT)
});
