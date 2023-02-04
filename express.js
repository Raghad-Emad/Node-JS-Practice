const express = require('express');

// expressx app 
const app = express();

// listen for express 
app.listen(3000);

app.get('/', (req, res) => {

    // res.send('<p>This is an express file</p>')
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {

    // res.send('<p>This is about</p>')
    res.sendFile('./views/about.html', { root: __dirname });
});




// redirect with express

app.get('/about-us', (req, res) => {

    res.redirect('./about');
});




// 404 

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

