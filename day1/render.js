// Renders html 
const http = require("http");
const fs = require("fs");

let port = "4005"

const server = http.createServer(function(req, res){
    console.log("Port: ", port);
    // MIME type text/html

    res.writeHead(200, {"Content-Type": "text/html"});

    // read file

    fs.readFile('index.html', (err, data) => {
        if (err) {
            throw err;
        }
        console.log("Site up!")

        //send res
        res.end(data);
    })
}).listen(port);