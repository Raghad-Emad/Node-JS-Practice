const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=> {

    // set Header content type 
    res.setHeader('Content-Type', 'text/html');

    let path = './views';

    switch (req.url) {
        case '/':
            path += 'index.html';
            break;

        case '/about':
            path += 'about.html';
            break;
    
        default:
            path += '404.html'
            break;
    }

    // send html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else {

            // res.write(data);
            // res.end();

            // or
            res.end(data);
        }
    })
   
});

server.listen(3000, 'localhost', ()=> {
    console.log('listening for request on port 3000');
});