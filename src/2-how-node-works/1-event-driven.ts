import eventEmitter from 'events';
import http from 'http';
class Sales extends eventEmitter { 
    constructor() { 
        super();
    }
}

const myEmmiter = new Sales();


myEmmiter.on('newSale', () => {
    console.log('There a new sale');
});

myEmmiter.on('newSale', (stock) => {
    console.log(`There are now ${stock} items left in stock`);
});

myEmmiter.emit('newSale', 9);
myEmmiter.emit('newSale');


//////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received');
    res.end('Request received');
});

server.on('request', (req, res) => {
    console.log('Another Request received');
});

server.on('close', () => {
    console.log('Server closed');
});

export default server;