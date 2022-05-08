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
        this.socket = socket;
        console.log('socket', socket);

        socket.on('connect', () => {
            console.log('connect fire', socket.id);

            // ここは複数回発火することがある
        });
        socket.on('data', (arg) => {
            console.log('data fire', arg);
        });
    }
}

const misc = new Misc();
window.addEventListener('load', () => {
    misc.initialize();
});



