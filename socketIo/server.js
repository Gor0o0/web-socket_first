// -=-=|import
const express = require('express');
const socketio = require('socket.io');

// -=-=|init
const app = express();
app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000, () => {console.log('http://localhost:8000');});
const io = socketio(expressServer);

io.on('connection', (socket) => {
    console.log('Клиент подключился:', socket.id);

    socket.on('messageFromClient', (data) => {
        console.log('Получено сообщение:', data);
        io.emit('newMessageFromServer', data);
    });

    socket.on('disconnect', () => {
        console.log('Клиент отключился:', socket.id);
    });
});
