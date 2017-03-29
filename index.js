var express = require('express'),
    app = express(),
    http = require('http'),
    httpServer = http.Server(app);
port = 3000;
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});
app.listen(port, function () {
    console.log('App listen in Port: ' + port);
});
var delog = require("debug.log");

delog.log(string, [...], [level]);
delog.warn(string, [...], [level]);
delog.error(string, [...], [level]);
delog.request(string, [...], [level]);
delog.response(string, [...], [level]);
delog.process(string, [...], [level]);
delog.success(string, [...], [level]);
