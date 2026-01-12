// Import the server from the required file
import server from './2-how-node-works/2-stream';

//this is the server that will be used to start the application
server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requests...');
});