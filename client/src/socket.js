import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:2000');

export default socket;