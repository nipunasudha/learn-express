const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//ViewEngine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

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
        title: "MY TITLE",
        people: people,
        moretext: "More text from backend"
    });
});
// app.get('/', (req, res) => res.json(people));

app.listen(3000, () => console.log('Example app listening on port 3000!'));