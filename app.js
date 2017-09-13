const express = require('express');
const server = express();
const port = 8080;

// server.get('/', function (req, res) {
//   res.send('Hello World!')
// })

server.use(express.static(__dirname + '/public'));

server.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('listening on ' + port);
    }
});
