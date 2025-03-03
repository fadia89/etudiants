
import http from 'http';

const server = http.createServer((request, response) => {
    response.end('<h1>Hello world</h1>');
});

server.listen(8000, 'localhost', () => {
    console.log('Server is running on port 8000');
});
