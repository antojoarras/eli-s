const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('  <head>');
  res.write('    <title>Does any reads me?</title>');
  res.write('  </head>');
  res.write('  <body>');
  res.write('    <h1>Welcome to Eli\'s web</h1>');
  res.write('    <p1>Make sure to subscribe: <a href="https://www.youtube.com/@elithelegobrick/videos">click me</a></p1>');
  res.write('  </body>');
  res.write('</html>');
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
