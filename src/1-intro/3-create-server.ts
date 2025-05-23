import * as http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello Form the Server')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
