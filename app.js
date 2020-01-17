const express   = require('express');     //get that code
const app       = express();              //initialize
const http      = require('http');        //go get it
const server    = http.createServer(app); //initialize

const PORT      = 8080;     //80 is default port, which port is our context served by

server.listen(PORT);                            //start em up
app.use(express.static(__dirname + '/public')); //where is our default directory
//app.subscribe

console.log("Listening to port: " + PORT);      //print to termial i.e cout, printf

//set our route(s)
//serve up file index.html when someone type in localhost:1111
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});