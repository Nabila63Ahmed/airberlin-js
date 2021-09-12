express = require ('express')
server = express()

server.get('/ping', function(req, res) {
    res.send('pong')
})

server.listen(3000, function () {
});