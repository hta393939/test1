/**
 * 
 */

const http = require('http');
const https = require('https');
const express = require('express');
const socketio = require('socket.io');

console.log('20220507_1');

class Misc {
    constructor() {
        this.HTTP_PORT = 3000;


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
        this.initializeRouter();
    }

    serverAction(req, res) {
        console.log('serverAction called', req, res);
        {

        }
        {
            res.write(JSON.stringify({}));
            res.end();
        }
    }

    initializeRouter() {
        const mainRouter = express.Router();
        mainRouter.use('/', express.static(__dirname + '/public'));

        this.app.use('/', mainRouter);
        this.app.listen(this.HTTP_PORT);
    }

}

const misc = new Misc();

misc.initialize();



