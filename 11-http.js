// Server Side Rendering App
const http = require('http');

const menu = `<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
`

function getHomePage(){
  return `
  <html>
    <head>
      <title>SSR App Demo</title>
    </head>
    <body>
      ${menu}

      <div>
        <h1 style="color: blue;">Welcome to my Home Page</h1>
      </div>
    </body>
  </html>
  `
}

function getAboutPage(){
  return `
  <html>
    <head>
      <title>SSR App Demo</title>
    </head>
    <body>
      ${menu}
      <div>
        <h1>Welcome to my About Page</h1>
      </div>
    </body>
  </html>
  `
}

function getContactPage(){
  return `
  <html>
    <head>
      <title>SSR App Demo</title>
    </head>
    <body>
      ${menu}
      <div>
        <h1>Welcome to my Contact Page</h1>
      </div>
    </body>
  </html>
  `
}

function get404Page(){
  return `
  <html>
    <head>
      <title>SSR App Demo</title>
    </head>
    <body>
      <div>
        ${menu}
        <h1>404 - Page not found</h1>
      </div>
    </body>
  </html>
  `
}


http.createServer( (req, res)=> {

  res.writeHead(200, {"Content-Type": "text/html"});
  // handling multiple urls
  switch(req.url){
    case '/':
      // sending HTML Response
      res.write(getHomePage());
      break;

    case '/about':
      // sending HTML Response
      res.write(getAboutPage());
      break;
    
    case '/contact':
      // sending HTML Response
      res.write(getContactPage());
      break;
    
    case '/users':
      // sending JSON Response
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(`[
        {
          id: 1,
          name: 'Arun',
          phone: 4533452
        },
        {
          id: 2,
          name: 'John',
          phone: 523453
        },
      ]`);
      break;

    default: 
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write(get404Page());
  }
  res.end();
}).listen( 3000, ()=> {
  console.log('Server is up on http://localhost:3000');
})

