const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
const { links, lists, tables } = require('./app');

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const messages = (req, res, next) => {
    let message;
    res.locals.message = message;
    next();
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

app.get('/form', messages, (req, res) => {
    res.render('pages/form');
});

app.post('/form', (req, res) => {
    let message = req.body;
    res.locals.message = message;
    res.render('pages/form');
});

app.get('/', function (req, res) {
    res.render('pages/home');
});

app.get('/links', links);
app.get('/list', lists);
app.get('/table', tables);

app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));
