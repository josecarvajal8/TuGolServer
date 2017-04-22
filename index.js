var cors = require('cors'),
    app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    io = require('socket.io')(server),
    mongoose = require('mongoose'),
    config = require('./config');

mongoose.connect(config.db);

app.set('port', config.port);
app.all('*', cors());
app.use(bodyParser.json());
app.get('/', cors(), api.test);