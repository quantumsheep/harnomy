const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes/router');
const sockethandler = require('./services/sockethandler');

const db = require('./services/db');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: `vg*\\ZLM>qYPet^T>XQ#^2.=vGV'x/c=ZP5P6-9;'P.2w=Gm&Lq-{&c\\Js@@-jL^^\\JFtTDj}m2D/B9eK8#6j5^spN7%>4mUvD%mbY.E2-7Zp*XRWW}JbFp4\\C?h:Q3+`,
    store: new MongoStore({ mongooseConnection: db.connection }),
    resave: true,
    saveUninitialized: true,
}));

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