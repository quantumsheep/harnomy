const io = require('socket.io')();

io.on('connection', socket => {
    console.log(`New connection!`);
    
    socket.emit('title', 'SyncBlog');
});

io.listen(2000);

console.log('Socket server listening on port 2000');