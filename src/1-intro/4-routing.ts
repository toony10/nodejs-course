import * as http from 'http';
const server = http.createServer((req, res) => {
  // console.log(req.url)  //log the pathName

  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('Hello from the overview');
  } else if (pathName === '/product') {
    res.end('Hello from the product');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
