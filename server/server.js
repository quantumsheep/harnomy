const io = require('socket.io')();

io.on('connection', socket => {
    console.log(`New connection!`);
    
    socket.emit('new article', {
        id: 1,
        title: `He's mark`,
        description: `Oh I, I'm mark`
    });
});

io.listen(2000);

console.log('Socket server listening on port 2000');