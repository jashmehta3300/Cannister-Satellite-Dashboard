
var express = require('express');

var app = express();

var server = app.listen(4000, () => { //Start the server, listening on port 4000.

    console.log("Listening to requests port 4000...");

})


var io = require('socket.io')(server); //Bind socket.io to our express server.

app.use(express.static('public')); //Send index.html page on GET /

const SerialPort = require('serialport'); 

const Readline = SerialPort.parsers.Readline;

var port = new SerialPort('\\\\.\\COM3', {baudRate: 9600}, () => true);



const parser = port.pipe(new Readline({delimiter: '\r\n'})); //Read the line only when new line comes.

parser.on('data', (temp) => {
    var splitData = temp.split(',');
    console.log("temp 1");
    console.log(splitData[0]);

    console.log("temp 2");
    console.log(splitData[1]);

    console.log("temp 3");
    console.log(splitData[2]);

    console.log("temp 4");
    console.log(splitData[3]);

    var today = new Date();


    io.sockets.emit('temp1', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:splitData[0]}); //emit the data i.e. {date, time, temp} to all the connected clients.

    io.sockets.emit('temp2', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:splitData[1]}); //emit the data i.e. {date, time, temp} to all the connected clients.

    io.sockets.emit('temp3', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:splitData[2]}); //emit the data i.e. {date, time, temp} to all the connected clients.

    io.sockets.emit('temp4', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), temp:splitData[3]}); //emit the data i.e. {date, time, temp} to all the connected clients.

});



io.on('connection', (socket) => {

    console.log("Someone connected."); //show a log as a new client connects.

})
