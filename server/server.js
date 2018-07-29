const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes/router');
const sockethandler = require('./services/sockethandler');

const config = {
    enableCORS: true
};

/**
 * Enable CORS if necessary (mostly for development, don't use in prod (with domain name))
 */
if (config.enableCORS) {
    app.use(cors({
        methods: ['GET', 'POST']
    }));
}

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(cookieParser());

router(app);

sockethandler(io);

const port = 2000;

server.listen(port, () => {
    console.log(`HTTP and WebSocket servers launched at http://localhost:${port}`);
});