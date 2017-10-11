var http = require("http");

var PORTONE = 7000;

var PORTTWO = 7500;

function handleRequestOne(request, response){

	response.end("Well Done Chap! Path hit: " + request.url);

}

function handleRequestTwo(request, response){
	response.end("You are a stink-amle!");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function(){
	console.log("Server listening on: http://localhost:" + PORTONE);

});

serverTwo.listen(PORTTWO, function(){
	console.log("Server listening on: http://localhost:" + PORTTWO);
});