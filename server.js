
// import http package
const { response } = require('express');
const http = require('http');

// create a server
const server = http.createServer( (hrequest, response) => {
 response.statusCode = 200;
response.setHeader('Content-Type', 'text/plain');
 response.end('Hello Welocome South African Economic and Allied Worker Union \n');
});

// declared port variable
const port = 3000;

// start the server
server.listen(port, () => {
 console.log(`Server is running on Successfully at port ${port}`);
});
