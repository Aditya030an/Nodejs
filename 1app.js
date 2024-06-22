// console.log("Hello World");   for run write in terminal node appName in this node app.js

//add two Number 
let a = 1;
let b = 2;
console.log("The sum is " + (a+b));

//i want to import add and sub function from cal
//import
var cal = require('./2calc');
result = cal.add(2 , 6);
console.log("add " + result);
console.log("add " + cal.add(2,3));
console.log("sub " + cal.sub(4,3));

//normal http server by node
var http = require('http');
http.createServer(function(req , res){

    //head
    res.writeHead(200 , `'Content-type' : 'text-html'`);
    //for multimul line
    res.write("Hello World")
    res.write("Welcom allien!!!")
    res.end()  //declearing that i am ending my code 

    //for single line
    // res.end("Byy")
}).listen(8080);
