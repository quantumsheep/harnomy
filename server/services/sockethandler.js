/**
 * @param {SocketIO.Server} io
 */
module.exports = io => {
    io.on('connection', socket => {
        console.log(`New connection!`);

        socket.emit('new article', {
            id: 1,
            title: `He's mark`,
            description: `Oh I, I'm mark`
        });
    });
}