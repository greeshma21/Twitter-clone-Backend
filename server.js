/*
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000);
*/


/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.get('/hello', (req, res) => {
    res.send('Hello World from A8!!!');
});

const deleteMovie = (req, res) => {
    const id = req.params['mid'];
    movies = movies.filter(m => m._id !== id);
    res.json(movies);
};
app.delete('/api/movies/:mid', deleteMovie);

require('./services/movies-service')(app);

app.listen(4000);*/

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

/*require('./services/tweets-service')(app);
require('./services/todos-service')(app);*/
require('./services/movies-service')(app);

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


require('./db/who/who-service')(app);
require('./db/tweets/tweet-service')(app);
require('./services/tweets-service')(app);

require('./movies/service')(app);


app.listen(process.env.PORT || 4000);

