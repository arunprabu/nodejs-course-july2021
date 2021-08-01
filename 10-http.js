const http = require('http');

http.createServer( (req, res)=> {

  // handling multiple urls
  switch(req.url){
    case '/':
      // sending HTMl Response
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(`<div>
        <h1>Welcome to my Home Page</h1>
      </div>
      `);
      break;
    case '/about': 
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(`<div>
        <h1>Welcome to About Page</h1>
      </div>
      `);
      break;
    case '/contact': 
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(`<div>
        <h1>Welcome to Contact Page</h1>
      </div>
      `);
      break;
    default:
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(`<div>
        <h1>Page Not Found</h1>
      </div>
      `);
  }
  res.end();

}).listen( 3000, ()=> {
  console.log('Server is up on http://localhost:3000');
})