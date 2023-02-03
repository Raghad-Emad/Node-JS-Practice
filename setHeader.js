const http = require('http');

const server = http.createServer((req,res)=> {

    // set Header content type 
    
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    // res.write('Welcome to website!');
    res.write('<h2>Welcome to website!</h2>');

    res.end();
});

server.listen(3000, 'localhost', ()=> {
    console.log('listening for request on port 3000');
});