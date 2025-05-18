const http = require('http')
const Server = http.createServer((req, res) => {
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Hello World")
})
Server.listen(3000, () => {
    console.log("Server si running on http://localhost:3000")
})
