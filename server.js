var http = require('http');
http
  .createServer(function(req, res) {
    console.log(req.url);
    // console.log('SERVER WAS HIT');
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello My Very First Lab For JavaScript Class');
  })
  .listen(3000);
console.log('Server running at http://localhost:3000/');