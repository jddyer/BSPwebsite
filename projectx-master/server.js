var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    var str = fs.readFileSync('index.html', "utf8");
    console.log("str="+JSON.stringify(str));
    res.send(str);
});
var port = Number(process.env.PORT || 5000);
var server = app.listen(port, function() {
    console.log('Listening on port %d', port);
});