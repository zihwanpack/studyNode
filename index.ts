import http from 'http';

console.log(http);
const server = http.createServer((req, res) => {
  // 응답에 대한 정보가 기록되는 header 세팅
  res.writeHead(200, { 'Content-Type': ' text/html; charset=uts-8' });
  // 본문인 body
  res.write('<h1>Hello Node!</h1>');
  // 응답 종료
  res.end('<p>Hello UMC!</p>');
});
// 포트번호 설정하는 부분
server.listen(8080, () => {
  console.log('server가 켜짐');
});

server.on('listening', () => {
  console.log('8080 포트에서 서버가 열림');
});

server.on('error', (err) => {
  console.error(err);
});
