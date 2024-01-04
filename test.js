const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end('Hello, World!\n');

});

const port = 3000;
server.listen(port, () =>{
    console.log("Server listening on port 3000...")
});