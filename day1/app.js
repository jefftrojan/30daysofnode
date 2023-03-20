const http = require('http');

const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log("Running on server succesfully");
    response.end('Server working successfully');
});

server.listen(port, host, (error) => {
    if (error) {
        console.log("An error occured: ",error );
    }
    console.log("Server is listening on " + host + ':'+port)
    
})