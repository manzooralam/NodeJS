/* 
 Module: 

 - Same as JavaScript libraries
 - A set of functions you want to include in your application
 - It can be built-in modules OR user defined modules
 - To include a module, use the require() function with the name of the module
 - e.g. var http = require('http');



*/

/*
http: 
- Predefined or built-in module
- Allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
- The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
- Node js as web server
- Method: createServer(), listen()
*/

/*
HTTP Header:
- If the response from the HTTP server is supposed to be displayed as HTML,
- you should include an HTTP header with the correct content type:
- e.g.  res.writeHead(200, {'Content-Type': 'text/html'});
- first argument of the res.writeHead() method is the status code, 200 means that all is OK,
- second argument is an object containing the response headers.
*/
/* const http = require('http');
// User defined
var dt = require('./myModule/getDate');

const hostname = '127.0.0.1';
const port = 3000; 

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h2> Date and Time  </h2> ' + '<p> ' +dt.myDateTime()+' </p>'); 
  res.end();
}); 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  */


/* Callback functions */

/* Sync  */
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("End");

/*  Async */
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("End");  