
var http = require('http');
var fs = require('fs');
const passwords = require('./password-generator');



//create a server object:
http.createServer(function (req, res) {
    // res.write('Hello World!'); //write a response to the client
    res.end('<h1>Hello Node!!!!!<h1>'); //end the response
  }).listen(3000); //the server object listens on port 8080
  fs.readFile('welcome.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
console.log(passwords);
