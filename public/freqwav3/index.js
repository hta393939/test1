/*!
 * index.js
 * (c) 2022- usagi
 * This is released by the MIT License.
 */

const sp = (v, n = 2) => {
    return ('' + v).padStart(n, '0');
};

const filedate = (d = new Date()) => {
    let s = '';
    s += `${sp(d.getFullYear(), 4)}`;
    s += `${sp(d.getMonth() + 1)}`;
    s += `${sp(d.getDate())}`;
    s += `_${sp(d.getHours())}`;
    s += `${sp(d.getMinutes())}`;
    s += `${sp(d.getSeconds())}`;
    s += `_${sp(d.getMilliseconds(), 3)}`;
    return s;
};

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

    ready() {
        {
            const e = window.iddownload;
            if (e) {
                e.addEventListener('click', () => {
                    const blob = new Blob([]);
                    this.download(blob, `fw_${filedate()}.dat`);
                });
            }
        }
    }

/**
 * ファイルをダウンロードする
 * @param {Blob} blob 
 * @param {string} name 
 */
    download(blob, name) {
        {
            const a = document.createElement('a');
            a.download = name;
            a.href = URL.createObjectURL(blob);
            a.dispatchEvent(new MouseEvent('click'));
            URL.revokeObjectURL(a.href);
        }
    }

}

const misc = new Misc();
window.addEventListener('load', () => {
    misc.initialize();
});



