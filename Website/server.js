const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = config.server.port;

// Middle-wares
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine
app.set('view engine', 'ejs');

// Public folder
app.use('/images', express.static(__dirname + "/public/images/"))
app.use('/css', express.static(__dirname + "/public/css/"))
app.use('/javascripts', express.static(__dirname + "/public/javascripts/"))

// Routers
const API_SERVICE = require('./routers/api_service');
const homepage = require('./routers/homepage');

// API
app.use('/API', API_SERVICE);

// Router handler
app.use('/', homepage);


app.use((req, res, next) => {
    res.status(404).render("not_found");
});

app.listen(port, (err) => {
    if (err) return console.log("Error in server setup: " + err);
    console.log(`API server listening to port: ${port}`);
});