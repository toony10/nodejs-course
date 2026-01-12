import fs from 'fs';
import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => { 
    // Solution 1:
    //      fs.readFile(`${__dirname}/test-file.txt`, (err, data) => {
    //          if (err) console.log(err);
    //          res.end(data);
    //   });

    // Solution 2: Streams (without backpressure)
    // const readable=fs.createReadStream(`${__dirname}/test-file.txt`)
    // readable.on('data',(chunck)=>{
    //     res.write(chunck)
    // })
    // readable.on('end', () => {
    //     res.end() 
    // })
    
    // Solution 3: Streams (with backpressure)
    const readable = fs.createReadStream(`${ __dirname }/test-file.txt`)
    readable.pipe(res)
})

export default server;