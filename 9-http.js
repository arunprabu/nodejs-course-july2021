const http = require('http');

http.createServer( (req, res)=> {

  // handling multiple urls
  switch(req.url){
    case '/':
      res.end('Welcome to Home Page!');
      break;
    case '/about': 
      res.end('Welcome to About Page');
      break;
    case '/contact': 
      res.end('Welcome to Contact Page!');
      break;
    default:
      res.end('404 - Page not found!');
  }

}).listen( 3000, ()=> {
  console.log('Server is up on http://localhost:3000');
})