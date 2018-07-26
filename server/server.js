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

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.post('/action/signup', (req, res) => {
    console.log(req);
    if (req.body.username && req.body.email && req.body.password) {
        const verification = {
            isUsernameError: !(req.body.username && req.body.username.length >= 3),
            isEmailError: !(req.body.email && req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
            isPasswordError: !(req.body.password && req.body.password.length >= 8),
        };

        if (!verification.isUsernameError && !verification.isEmailError && !verification.isPasswordError) {
            res.end(JSON.stringify({}));
        } else {
            res.end(JSON.stringify({
                error: ''
            }));
        }
    } else {
        res.end(JSON.stringify({
            error: 'Please complete the form before sending it.'
        }));
    }
});

app.listen(2000);