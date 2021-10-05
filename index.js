const express = require ('express')

const server = express()

server.get('/ping', function(req, res) {
    res.send('pong')
})

server.listen(3000, function () {
    console.log("Server is up and running on port 3000..")
});