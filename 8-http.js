const http = require('http');

http.createServer(function(req, res){
  console.log('Request Received'); // will be printed twice in chrome family browsers
  
  // req obj 
  console.log(req.url);

  res.end("Welcome to My Webpage!");

  console.log('Response sent');

  
}).listen(3000, function(){
  console.log('Server is up on http://localhost:3000');
});