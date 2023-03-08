const config = require('./config.json');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = config.server.port;

// Middle-wares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routers
const homepage = require('./routers/homepage');

// Router handler
app.use('/', homepage);


app.use((req, res, next) => {
    res.status(404).send("Sorry can't find thats!");
});

app.listen(port, () => {
    console.log("API server listening to port: " + port);
});