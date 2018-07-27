// const io = require('socket.io')();

// io.on('connection', socket => {
//     console.log(`New connection!`);

//     socket.emit('new article', {
//         id: 1,
//         title: `He's mark`,
//         description: `Oh I, I'm mark`
//     });
// });

// io.listen(2000);

// console.log('Socket server listening on port 2000');

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes/router');

const app = express();

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

const port = 2000;

app.listen(port, () => {
    console.log(`Server launched to http://localhost:${port}`);
});