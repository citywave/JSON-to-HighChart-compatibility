
var http           = require('http');
var express        = require('express');
var bodyParser     = require('body-parser');
var app            = express();
var readLine       = require('readline');
var fs             = require('fs');

var server = http.createServer(app);
var port = process.env.PORT || 8090;

app.use(bodyParser.json({ extended: true, limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

var writeStream = fs.createWriteStream(__dirname + '/dataset/result.json', {'flags': 'a'});


var rd = readLine.createInterface({
    input: fs.createReadStream(__dirname + '/dataset/input'),
    output: process.stdout,
    console: false,
});


// {"device_id":"T076453","ip":"11.22.243.77","city":"Moratuwa","temp":30,"timestamp":"2018-04-12 21:59:59","intime":1.523570400155E12,"outtime":1.523570400378E12}
//[1147651200000,67.79],
var xAxis = 10000000; //start of the x axis of the chart

writeStream.write('[\n');
rd.on('line', function(line) {
    //console.log(line);
    var jsonContent = JSON.parse(line);
	// Get Value from JSON
	//console.log("device name:", jsonContent.device_id);
	//console.log("ip address:", jsonContent.ip);

	//correction
	var correctedIntime = Number(jsonContent.intime);
	var correctedOuttime = Number(jsonContent.outtime);
	var delay = correctedOuttime - correctedIntime;
	//console.log('------------------------' + correctedIntime);



	writeStream.write('[' + xAxis + ',' + delay + '],\n');
	//writeStream.write('\n');
	//writeStream.end('this is the end line');

	xAxis++;
});

//writeStream.write(']');


server.listen(port);
console.log('Server Started on port ' + port);
