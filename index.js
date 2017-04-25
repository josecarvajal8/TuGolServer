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

app.post('/signIn', cors(), auth.signIn);
app.post('/signUp', cors(), auth.signUp);

server.listen(app.get('port'), function () {
    console.log("Servidor corriendo por el puerto " + app.get('port'));
});