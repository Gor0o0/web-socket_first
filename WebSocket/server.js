const http = require('http'); //> import module http from node
const websocket = require('ws'); //> import module ws from node

const server = http.createServer((res, req) => {
    req.end('-=-=-=-=| Connect |=-=-=-=-')
}); //> main server
const wss = new websocket.Server({ server }); //> second ws server

wss.on('headers', (headers, req) => { //> тут только увидели
    console.log(headers);
});

wss.on('connection', (ws, req) => { //> первый контакт с ws | долгосрочные события
    ws.on('message', (data) => {console.log(data.toString());});
    ws.send('-=| Hell o client |=-');
});

server.listen(8000, () => {
    console.log("http://localhost:8000");
});