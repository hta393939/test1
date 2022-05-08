/**
 * 
 */

const http = require('http');
const https = require('https');
const express = require('express');
const socketio = require('socket.io');
const { info } = require('console');

console.log('20220507_1');

class Misc {
    constructor() {
        this.HTTP_PORT = 3000;

/**
 * express() の返り
 */
        this.app = null;
    }
    initialize() {
        {
            const app = express();
            this.app = app;
        }
        if (false) {
            const server = http.createServer((req, res) => {
                this.serverAction(req, res);
            });
            server.listen(this.HTTP_PORT);
            console.log('server start', this.HTTP_PORT);
        }
        this.initializeSocket();
        this.initializeRouter();

        this.httpServer.listen(this.HTTP_PORT);
//        this.app.listen(this.HTTP_PORT);
    }

    serverAction(req, res) {
        console.log('serverAction called', req.url);
        {

        }
        {
            res.write(JSON.stringify({}));
            res.end();
        }
    }

    initializeSocket() {
        console.log('initializeSocket called');

        const httpServer = http.Server(this.app);
        this.httpServer = httpServer;
        const io = socketio(httpServer);
        this.io = io;

        io.on('connection', socket => {
            console.log('接続', socket.id);

//            const userId = computeUserId(socket);
            socket.on('disconnect', async () => {
//                const sockets = await io.in(userId).fetchSockets();
                console.log('切断');
            });

            socket.on('message', (msg) => {
                console.log('message fire', msg);
//                io.emit('message', msg);
            });

        });
        console.log('initializeSocket leave');
    }

/**
 * ルーター追加
 */
    initializeRouter() {
        const mainRouter = express.Router();
        mainRouter.use('/', express.static(__dirname + '/public'));

        this.app.use('/', mainRouter);
    }

}

const misc = new Misc();

misc.initialize();



