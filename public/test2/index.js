/**
 * @file index.js
 */

class Misc {
    constructor() {

    }
    initialize() {
        this.initSocket();
    }

    initSocket() {
//        console.log('typeof io', typeof io, window.io);
        const socket = io();
        console.log('socket', socket);

        socket.on('connect', () => {
            console.log('connect fire', socket.id);
        });
        socket.on('connection', (arg) => {
            console.log('connection fire', arg);
        });
    }
}

const misc = new Misc();
window.addEventListener('load', () => {
    misc.initialize();
});



