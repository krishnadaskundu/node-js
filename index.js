const http = require('http');


http.createServer((req,resp) =>
{
resp.write("<h1>Code Step by step</h1>");
resp.end();
}).listen(4500);


//used of http, function as parameter , arrow funcion, making a basic server


/*
const http=require('http');

http.createServer((req, resp)=>{

    resp.write("this is my first server");
    resp.end();
}).listen(4500);

*/