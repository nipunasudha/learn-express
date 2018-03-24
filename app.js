const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

//ViewEngine
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/base');

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set static path
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, '/www'))); // redirect root
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))); // redirect bootstrap JS
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist'))); // redirect JS jQuery
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))); // redirect CSS bootstrap

let people = [
    {
        name: "Nipuna Sudharaka",
        age: 30
    },
    {
        name: "Shan Pramuditha",
        age: 27
    },
    {
        name: "Chamod Damitha",
        age: 28
    }
];

// app.get('/', (req, res) => res.send('Hello World People!'));
app.get('/home', (req, res) => {
    res.render('index', {
        title: "Populator",
        people: people,
        moretext: "More text from backend"
    });
});


app.post('/users/add', (req, res) => {
    let newPerson = {
        name: req.body.personName,
        age: req.body.age
    };
    res.json(newPerson);
});


// app.get('/', (req, res) => res.json(people));

app.listen(3000, () => console.log('Example app listening on port 3000!'));