import http from 'http';

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': ' text/html: charset=uts-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello UMC!</p>');
  })
  .listen(8080, () => {
    console.log('server가 켜짐');
  });
