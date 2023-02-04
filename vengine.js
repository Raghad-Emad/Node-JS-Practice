const express = require('express');

// expressx app 
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for express request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));

// render a view
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi11 finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yoshi22 finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yoshi33 finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ]
    res.render('index', {title: 'Dynamic title', blogs});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

// 404 
app.use((req, res) => {
    res.status(404).render('404');
});